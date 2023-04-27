using EditMe.Online.Data;
using EditMe.Online.Helpers;
using EditMe.Online.Services.Interface;
using Microsoft.Extensions.Options;

namespace EditMe.Online.Authorization;

public class JwtMiddleware
{
    private readonly RequestDelegate _next;

    public JwtMiddleware(RequestDelegate next, IOptions<AppSettings> appSettings)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context, EditmeDbContext dataContext, IJwtManager jwtManager)
    {
        var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
        var accountId = jwtManager.ValidateJwtToken(token);
        if (accountId != null)
        {
            // attach account to context on successful jwt validation
            context.Items["Account"] = await dataContext.Accounts.FindAsync(accountId.Value);
        }

        await _next(context);
    }
}
