namespace EditMe.Online.Dtos.AccountDtos;
public class ForgotPasswordRequest
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }
}