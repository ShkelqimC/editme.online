using Editme.BusinessLayer.Concrete;
using Editme.BusinessLayer.Interfaces;
using Editme.DAL.Concrete.EntityFrameworkCore.Repositories;
using Editme.DAL.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using FluentValidation;
using Editme.Entities.Dtos.UserDtos;
using Editme.BusinessLayer.Utilities.ValidationRules;

namespace Editme.BusinessLayer.Utilities.DependenciesContainers
{
    public static class CustomExtension
    {
        public static IServiceCollection AddDependencies(this IServiceCollection services)
        {          

            services.AddScoped(typeof(IGenericService<>), typeof(GenericManager<>));
            services.AddScoped(typeof(IGenericDAL<>), typeof(EfGenericRepository<>));

            services.AddScoped<IUserRepositoryDAL, EfUserRepository>();
            services.AddScoped<IUserService, UserManager>();

            services.AddScoped<IJwtService, JwtManager>();

            services.AddTransient<IValidator<UserLoginDto>, UserLoginDtoValidator>();
            services.AddTransient<IValidator<UserAddDto>, UserAddDtoValidator>();
            services.AddTransient<IValidator<UserUpdateDto>, UserUpdateValidator>();

            return services;
        }
    }
}
