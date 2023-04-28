using EditMe.Online.Authorization;
using EditMe.Online.Dtos.AccountDtos;
using EditMe.Online.Services.Interface;

namespace EditMe.Online.Controllers;
[Authorize]
[Route("api/[controller]")]
[ApiController]
public class AccountController : BaseController
{
    private readonly IAccountManager _accountManager;

    public AccountController(IAccountManager accountManager)
    {
        _accountManager = accountManager;
    }

    [AllowAnonymous]
    [HttpPost("authenticate")]
    public async Task<ActionResult<AuthenticateResponse>> Authenticate(AuthenticateRequest model)
    {
        var response = await _accountManager.Authenticate(model/*, IpAddress()*/);
        SetTokenCookie(response.RefreshToken);
        return Ok(response);
    }

    [AllowAnonymous]
    [HttpPost("refresh-token")]
    public async Task<ActionResult<AuthenticateResponse>> RefreshToken()
    {
        var refreshToken = Request.Cookies["refreshToken"];
        var response = await _accountManager.RefreshToken(refreshToken/*, IpAddress()*/);
        SetTokenCookie(response.RefreshToken);
        return Ok(response);
    }

    [HttpPost("revoke-token")]
    public async Task<IActionResult> RevokeToken(RevokeTokenRequest model)
    {
        // accept token from request body or cookie
        var token = model.Token ?? Request.Cookies["refreshToken"];

        if (string.IsNullOrEmpty(token))
            return BadRequest(new { message = "Token is required" });

        // users can revoke their own tokens and admins can revoke any tokens
        if (!Account.OwnsToken(token) && Account.Role != Role.Admin)
            return Unauthorized(new { message = "Unauthorized" });

        await  _accountManager.RevokeToken(token/*, IpAddress()*/);
        return Ok(new { message = "Token revoked" });
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest model)
    {
        await _accountManager.Register(model/*, Request.Headers["origin"]*/);
        return Ok(new { message = "Registration successful, please check your email for verification instructions" });
    }

    [AllowAnonymous]
    [HttpPost("verify-email")]
    public async Task<IActionResult> VerifyEmail(VerifyEmailRequest model)
    {
        await  _accountManager.VerifyEmail(model.Token);
        return Ok(new { message = "Verification successful, you can now login" });
    }
    [AllowAnonymous]
    [HttpPost("resend-verify-email")]
    public async Task<IActionResult> ResendVerifyEmailAsync(ForgotPasswordRequest model)
    {
        await _accountManager.ResendVerifyEmail(model/*, Request.Headers["origin"]*/);
        return Ok(new { message = "Verify Email sended again, please check your email for verification instructions" });
    }
    [AllowAnonymous]
    [HttpPost("forgot-password")]
    public async Task<IActionResult> ForgotPassword(ForgotPasswordRequest model)
    {
        await _accountManager.ForgotPassword(model/*, Request.Headers["origin"]*/);
        return Ok(new { message = "Please check your email for password reset instructions" });
    }

    [AllowAnonymous]
    [HttpPost("validate-reset-token")]
    public async Task<IActionResult> ValidateResetToken(ValidateResetTokenRequest model)
    {
        await _accountManager.ValidateResetToken(model);
        return Ok(new { message = "Token is valid" });
    }

    [AllowAnonymous]
    [HttpPost("reset-password")]
    public async Task<IActionResult> ResetPassword(ResetPasswordRequest model)
    {
        await _accountManager.ResetPassword(model);
        return Ok(new { message = "Password reset successful, you can now login" });
    }

    [Authorize(Role.Admin)]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AccountResponse>>> GetAll()
    {
        var accounts = await _accountManager.GetAll();
        return Ok(accounts);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<AccountResponse>> GetById(int id)
    {
        if (id != Account.Id && Account.Role != Role.Admin)
            return Unauthorized(new { message = "Unauthorized" });

        var account = await _accountManager.GetById(id);
        return Ok(account);
    }

    [Authorize(Role.Admin)]
    [HttpPost]
    public async Task<ActionResult<AccountResponse>> Create(CreateRequest model)
    {
        var account = await _accountManager.Create(model);
        return Ok(account);
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult<AccountResponse>> Update(int id, UpdateRequest model)
    {
        // users can update their own account and admins can update any account
        if (id != Account.Id && Account.Role != Role.Admin)
            return Unauthorized(new { message = "Unauthorized" });

        // only admins can update role
        if (Account.Role != Role.Admin)
            model.Role = null;

        var account = await _accountManager.Update(id, model);
        return Ok(account);
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        // users can delete their own account and admins can delete any account
        if (id != Account.Id && Account.Role != Role.Admin)
            return Unauthorized(new { message = "Unauthorized" });

        await _accountManager.Delete(id);
        return Ok(new { message = "Account deleted successfully" });
    }

    // helper methods

    private void SetTokenCookie(string token)
    {
        var cookieOptions = new CookieOptions
        {
            HttpOnly = true,
            Expires = DateTime.UtcNow.AddDays(7)
        };
        Response.Cookies.Append("refreshToken", token, cookieOptions);
    }

    //private string IpAddress()
    //{
    //    if (Request.Headers.ContainsKey("X-Forwarded-For"))
    //        return Request.Headers["X-Forwarded-For"];
    //    else
    //        return HttpContext.Connection.RemoteIpAddress.MapToIPv4().ToString();
    //}
}
