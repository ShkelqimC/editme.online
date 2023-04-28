namespace EditMe.Online.Dtos.AccountDtos;

public class ValidateResetTokenRequest
{
    [Required]
    public string Token { get; set; }
}