namespace EditMe.Online.Dtos.AccountDtos;
public class VerifyEmailRequest
{
    [Required]
    public string Token { get; set; }
}