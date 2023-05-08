namespace EditMe.Online.Services.Interface
{
    public interface IJwtManager
    {
        public string GenerateJwtToken(Account user);
        public int? ValidateJwtToken(string token);
        public Task<RefreshToken> GenerateRefreshToken(string ipAddress);
    }
}
