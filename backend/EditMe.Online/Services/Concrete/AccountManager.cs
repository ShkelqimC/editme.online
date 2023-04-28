﻿using EditMe.Online.Data;
using EditMe.Online.Dtos.AccountDtos;
using EditMe.Online.Helpers;
using EditMe.Online.Services.Interface;
using System.Security.Cryptography;
using static BCrypt.Net.BCrypt;
namespace EditMe.Online.Services.Concrete;
public class AccountManager : IAccountManager
{
    private readonly EditmeDbContext _context;
    private readonly IMapper _mapper;
    private readonly IJwtManager _jwtManager;
    private readonly IEmailManager _emailManager;
    private readonly AppSettings _appSettings;

    public AccountManager(EditmeDbContext context, IMapper mapper, IJwtManager jwtService, IEmailManager emailService, IOptions<AppSettings> appSettings)
    {
        _context = context;
        _mapper = mapper;
        _jwtManager = jwtService;
        _emailManager = emailService;
        _appSettings = appSettings.Value;
    }


    public async Task<AuthenticateResponse> Authenticate(AuthenticateRequest model/*, string ipAddress*/)
    {
        var account = _context.Accounts.SingleOrDefault(x => x.Email == model.Email);

        // validate
        if (account == null)
        {
            throw new AppException("No Account");
        }
        else if (!account.IsVerified)
        {
            throw new AppException("Account isnt verified");
        }
        else if (!Verify(model.Password, account.PasswordHash))
        {
            throw new AppException("Email or password is incorrect");
        }
        // authentication successful so generate jwt and refresh tokens
        var jwtToken = _jwtManager.GenerateJwtToken(account);
        var refreshToken = await _jwtManager.GenerateRefreshToken(/*ipAddress*/);
        account.RefreshTokens.Add(refreshToken);

        // remove old refresh tokens from account
        RemoveOldRefreshTokens(account);

        // save changes to db
        _context.Update(account);
        await _context.SaveChangesAsync();

        var response = _mapper.Map<AuthenticateResponse>(account);
        response.JwtToken = jwtToken;
        response.RefreshToken = refreshToken.Token;
        return response;
    }

    public async Task<AuthenticateResponse> RefreshToken(string token/*, string ipAddress*/)
    {
        var account = await GetAccountByRefreshToken(token);
        var refreshToken = account.RefreshTokens.Single(x => x.Token == token);

        if (refreshToken.IsRevoked)
        {
            // revoke all descendant tokens in case this token has been compromised
            RevokeDescendantRefreshTokens(refreshToken, account/*, ipAddress*/, $"Attempted reuse of revoked ancestor token: {token}");
            _context.Update(account);
            await _context.SaveChangesAsync();
        }

        if (!refreshToken.IsActive)
            throw new AppException("Invalid token");

        // replace old refresh token with a new one (rotate token)
        var newRefreshToken = await RotateRefreshToken(refreshToken/*, ipAddress*/);
        account.RefreshTokens.Add(newRefreshToken);

        // remove old refresh tokens from account
        RemoveOldRefreshTokens(account);

        // save changes to db
        _context.Update(account);
        await _context.SaveChangesAsync();

        // generate new jwt
        var jwtToken = _jwtManager.GenerateJwtToken(account);

        // return data in authenticate response object
        var response = _mapper.Map<AuthenticateResponse>(account);
        response.JwtToken = jwtToken;
        response.RefreshToken = newRefreshToken.Token;
        return response;
    }

    public async Task RevokeToken(string token/*, string ipAddress*/)
    {
        var account = await GetAccountByRefreshToken(token);
        var refreshToken = account.RefreshTokens.Single(x => x.Token == token);

        if (!refreshToken.IsActive)
            throw new AppException("Invalid token");

        // revoke token and save
        RevokeRefreshToken(refreshToken,/* ipAddress,*/ "Revoked without replacement");
        _context.Update(account);
        await _context.SaveChangesAsync();
    }

    public async Task Register(RegisterRequest model/*, string origin*/)
    {
        // validate
        if (await _context.Accounts.AnyAsync(x => x.Email == model.Email))
        {
            // send already registered error in email to prevent account enumeration
            await SendAlreadyRegisteredEmail(model.Email/*, origin*/);
            return;
        }

        // map model to new account object
        var account = _mapper.Map<Account>(model);

        // first registered account is an admin
        var isFirstAccount = !await _context.Accounts.AnyAsync();
        account.Role = isFirstAccount ? Role.Admin : Role.User;
        account.Created = DateTime.UtcNow;
        account.VerificationToken = await GenerateVerificationToken();

        // hash password
        account.PasswordHash = HashPassword(model.Password);

        // save account
        await _context.Accounts.AddAsync(account);
        await _context.SaveChangesAsync();

        // send email
        await SendVerificationEmail(account/*, origin*/);
    }

    public async Task VerifyEmail(string token)
    {
        var account =await _context.Accounts.SingleOrDefaultAsync(x => x.VerificationToken == token);
        if (account == null) throw new AppException("Verification failed");
        account.Verified = DateTime.UtcNow;
        account.IsVerified = true;
        account.VerificationToken = null;

        _context.Accounts.Update(account);
        await _context.SaveChangesAsync();
    }
    public async Task ResendVerifyEmail(ForgotPasswordRequest model/*, string origin*/)
    {
        var account = await _context.Accounts.SingleOrDefaultAsync(x => x.Email == model.Email);

        // always return ok response to prevent email enumeration
        if (account == null) return;

        // create reset token that expires after 1 day
        //account.VerificationToken;

        // send email
        await ReSendVerificationEmail(account/*, origin*/);
    }
    public async Task ForgotPassword(ForgotPasswordRequest model/*, string origin*/)
    {
        var account = await _context.Accounts.SingleOrDefaultAsync(x => x.Email == model.Email);

        // always return ok response to prevent email enumeration
        if (account == null) return;

        // create reset token that expires after 1 day
        account.ResetToken = await GenerateResetToken();
        account.ResetTokenExpires = DateTime.UtcNow.AddDays(1);

        _context.Accounts.Update(account);
        await _context.SaveChangesAsync();

        // send email
        await SendPasswordResetEmail(account/*, origin*/);
    }

    public async Task ValidateResetToken(ValidateResetTokenRequest model)
    {
        await GetAccountByResetToken(model.Token);
    }

    public async Task ResetPassword(ResetPasswordRequest model)
    {
        var account = await GetAccountByResetToken(model.Token);

        // update password and remove reset token
        account.PasswordHash = HashPassword(model.Password);
        account.PasswordReset = DateTime.UtcNow;
        account.IsVerified = true;
        account.ResetToken = null;
        account.ResetTokenExpires = null;

        _context.Accounts.Update(account);
        await _context.SaveChangesAsync();
    }

    public async Task<List<AccountResponse>> GetAll()
    {
        var accounts = await _context.Accounts.ToListAsync();
        return _mapper.Map<List<AccountResponse>>(accounts);
    }

    public async Task<AccountResponse> GetById(int id)
    {
        var account = await GetAccount(id);
        return _mapper.Map<AccountResponse>(account);
    }

    public async Task<AccountResponse> Create(CreateRequest model)
    {
        // validate
        if (await _context.Accounts.AnyAsync(x => x.Email == model.Email))
            throw new AppException($"Email '{model.Email}' is already registered");

        // map model to new account object
        var account = _mapper.Map<Account>(model);
        account.Created = DateTime.UtcNow;
        account.Verified = DateTime.UtcNow;

        // hash password
        account.PasswordHash = HashPassword(model.Password);

        // save account
        _context.Accounts.Add(account);
        await _context.SaveChangesAsync();

        return _mapper.Map<AccountResponse>(account);
    }

    public async Task<AccountResponse> Update(int id, UpdateRequest model)
    {
        var account = await GetAccount(id);

        // validate
        if (account.Email != model.Email && _context.Accounts.Any(x => x.Email == model.Email))
            throw new AppException($"Email '{model.Email}' is already registered");

        // hash password if it was entered
        if (!string.IsNullOrEmpty(model.Password))
            account.PasswordHash = HashPassword(model.Password);

        // copy model to account and save
        _mapper.Map(model, account);
        account.Updated = DateTime.UtcNow;
        _context.Accounts.Update(account);
        await _context.SaveChangesAsync();

        return _mapper.Map<AccountResponse>(account);
    }

    public async Task Delete(int id)
    {
        var account = await GetAccount(id);
        _context.Accounts.Remove(account);
        await _context.SaveChangesAsync();
    }

    // helper methods

    private async Task<Account> GetAccount(int id)
    {
        var account = await _context.Accounts.FindAsync(id);
        return account ?? throw new KeyNotFoundException("Account not found");
    }

    private async Task<Account> GetAccountByRefreshToken(string token)
    {
        var account = await _context.Accounts.SingleOrDefaultAsync(u => u.RefreshTokens.Any(t => t.Token == token));
        return account ?? throw new AppException("Invalid token");
    }

    private async Task<Account> GetAccountByResetToken(string token)
    {
        var account = await _context.Accounts.SingleOrDefaultAsync(x =>
            x.ResetToken == token && x.ResetTokenExpires > DateTime.UtcNow);
        return account ?? throw new AppException("Invalid token");
    }

    private async Task<string> GenerateResetToken()
    {
        // token is a cryptographically strong random sequence of values
        var token = Convert.ToHexString(RandomNumberGenerator.GetBytes(64));

        // ensure token is unique by checking against db
        var tokenIsUnique = !await _context.Accounts.AnyAsync(x => x.ResetToken == token);
        if (!tokenIsUnique)
            return await GenerateResetToken();

        return token;
    }

    private async Task<string> GenerateVerificationToken()
    {
        // token is a cryptographically strong random sequence of values
        var token = Convert.ToHexString(RandomNumberGenerator.GetBytes(64));

        // ensure token is unique by checking against db
        var tokenIsUnique = !await _context.Accounts.AnyAsync(x => x.VerificationToken == token);
        if (!tokenIsUnique)
            return await GenerateVerificationToken();

        return token;
    }

    private async Task<RefreshToken> RotateRefreshToken(RefreshToken refreshToken/*, string ipAddress*/)
    {
        var newRefreshToken = await _jwtManager.GenerateRefreshToken(/*ipAddress*/);
        RevokeRefreshToken(refreshToken/*, ipAddress*/, "Replaced by new token", newRefreshToken.Token);
        return newRefreshToken;
    }

    private void RemoveOldRefreshTokens(Account account)
    {
        account.RefreshTokens.RemoveAll(x =>
            !x.IsActive &&
            x.Created.AddDays(_appSettings.RefreshTokenTTL) <= DateTime.UtcNow);
    }

    private void RevokeDescendantRefreshTokens(RefreshToken refreshToken, Account account/*, string ipAddress*/, string reason)
    {
        // recursively traverse the refresh token chain and ensure all descendants are revoked
        if (!string.IsNullOrEmpty(refreshToken.ReplacedByToken))
        {
            var childToken = account.RefreshTokens.SingleOrDefault(x => x.Token == refreshToken.ReplacedByToken);
            if (childToken.IsActive)
                RevokeRefreshToken(childToken/*, ipAddress*/, reason);
            else
                RevokeDescendantRefreshTokens(childToken, account/*, ipAddress*/, reason);
        }
    }

    private static void RevokeRefreshToken(RefreshToken token, string ipAddress, string reason = null, string replacedByToken = null)
    {
        token.Revoked = DateTime.UtcNow;
        token.RevokedByIp = ipAddress;
        token.ReasonRevoked = reason;
        token.ReplacedByToken = replacedByToken;
    }

    private async Task SendVerificationEmail(Account account/*, string origin*/)
    {
        string message;
        //if (!string.IsNullOrEmpty(origin))
        //{
        //    // origin exists if request sent from browser single page app (e.g. Angular or React)
        //    // so send link to verify via single page app
        //    var verifyUrl = $"{origin}/account/verify-email?token={account.VerificationToken}";
        //    message = $@"<p>Please click the below link to verify your email address:</p>
        //                    <p><a href=""{verifyUrl}"">{verifyUrl}</a></p>";
        //}
        //else
        //{
        // origin missing if request sent directly to api (e.g. from Postman)
        // so send instructions to verify directly with api
        message = $@"<p>Please use the below token to verify your email address with the <code>/accounts/verify-email</code> api route:</p>
                            <p><code>{account.VerificationToken}</code></p>";
        //}

        await _emailManager.Send(
             to: account.Email,
             subject: "Sign-up Verification API - Verify Email",
             html: $@"<h4>Verify Email</h4>
                        <p>Thanks for registering!</p>
                        {message}"
         );
    }

    private async Task SendAlreadyRegisteredEmail(string email/*, string origin*/)
    {
        string message;
        //if (!string.IsNullOrEmpty(/*origin*/))
        //    message = $@"<p>If you don't know your password please visit the <a href=""{/*origin*/}/account/forgot-password"">forgot password</a> page.</p>";
        //else
        message = "<p>If you don't know your password you can reset it via the <code>/accounts/forgot-password</code> api route.</p>";

        await _emailManager.Send(
             to: email,
             subject: "Sign-up Verification API - Email Already Registered",
             html: $@"<h4>Email Already Registered</h4>
                        <p>Your email <strong>{email}</strong> is already registered.</p>
                        {message}"
         );
    }

    private async Task SendPasswordResetEmail(Account account/*, string origin*/)
    {
        string message;
        //if (!string.IsNullOrEmpty(/*origin*/))
        //{
        //    var resetUrl = $"{/*origin*/}/account/reset-password?token={account.ResetToken}";
        //    message = $@"<p>Please click the below link to reset your password, the link will be valid for 1 day:</p>
        //                    <p><a href=""{resetUrl}"">{resetUrl}</a></p>";
        //}
        //else
        //{
        message = $@"<p>Please use the below token to reset your password with the <code>/accounts/reset-password</code> api route:</p>
                            <p><code>{account.ResetToken}</code></p>";
        //}

        await _emailManager.Send(
             to: account.Email,
             subject: "Sign-up Verification API - Reset Password",
             html: $@"<h4>Reset Password Email</h4>
                        {message}"
         );
    }

    private async Task ReSendVerificationEmail(Account account/*, string origin*/)
    {
        string message;
        //if (!string.IsNullOrEmpty(origin))
        //{
        //    // origin exists if request sent from browser single page app (e.g. Angular or React)
        //    // so send link to verify via single page app
        //    var verifyUrl = $"{origin}/account/verify-email?token={account.VerificationToken}";
        //    message = $@"<p>Please click the below link to verify your email address:</p>
        //                    <p><a href=""{verifyUrl}"">{verifyUrl}</a></p>";
        //}
        //else
        //{
        // origin missing if request sent directly to api (e.g. from Postman)
        // so send instructions to verify directly with api
        message = $@"<p>Please use the below token to verify your email address with the <code>/accounts/verify-email</code> api route:</p>
                            <p><code>{account.VerificationToken}</code></p>";
        //}
        await _emailManager.Send(
             to: account.Email,
             subject: "Sign-up Verification API - Verify Email",
             html: $@"<h4>Verify Email</h4>
                        <p>Thanks for registering!</p>
                        {message}"
         );
    }

}