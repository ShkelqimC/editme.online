using EditMe.Online.Dtos.AccountDtos;

namespace EditMe.Online.Services.Interface;
public interface IAccountManager
{
    Task<AuthenticateResponse> Authenticate(AuthenticateRequest model, string ipAddress);
    Task<AuthenticateResponse> RefreshToken(string token, string ipAddress);
    Task RevokeToken(string token, string ipAddress);
    Task Register(RegisterRequest model, string origin);
    Task VerifyEmail(string token);
    Task ResendVerifyEmail(ForgotPasswordRequest model, string origin);
    Task ForgotPassword(ForgotPasswordRequest model, string origin);
    Task ValidateResetToken(ValidateResetTokenRequest model);
    Task ResetPassword(ResetPasswordRequest model);
    Task<List<AccountResponse>> GetAll();
    Task<AccountResponse> GetById(int id);
    Task<AccountResponse> Create(CreateRequest model);
    Task<AccountResponse> Update(int id, UpdateRequest model);
    Task Delete(int id);
}
