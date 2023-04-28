using EditMe.Online.Data;
using EditMe.Online.Services.Concrete;
using EditMe.Online.Services.Interface;
using Microsoft.AspNetCore.Identity;

namespace EditMe.Online.Helpers.DependenciesContainers;

public static class CustomExtension
{
    public static IServiceCollection AddDependencies(this IServiceCollection services)
    {
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
       
        services.AddDbContext<EditmeDbContext>();

        services.AddScoped<IAccountManager, AccountManager>();
        
        services.AddScoped<IJwtManager, JwtManager>();

        services.AddScoped<IEmailManager, EmailManager>();

        return services;
    }
}