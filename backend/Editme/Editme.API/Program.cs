
using Editme.Api.Mapping.AutoMapperProfile;
using Editme.API;
using Editme.BusinessLayer.Interfaces;
using Editme.BusinessLayer.Utilities.DependenciesContainers;
using Editme.BusinessLayer.Utilities.StringInfo;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
//using FluentValidation;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;//HTTPS false
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidIssuer = JwtInfo.Issuer,
        ValidAudience = JwtInfo.Audience,
        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(JwtInfo.SecurityKey)),
        ValidateIssuerSigningKey = true,
        ValidateLifetime = true,
        ClockSkew = TimeSpan.Zero //if server works another timeline it makes zero it
    };
});
builder.Services.AddControllers(); //.AddFluentValidation();  //Fluent Validation will be added here

builder.Services.AddDependencies();
builder.Services.AddAutoMapper(typeof(MapProfile));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseExceptionHandler("/Error");

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();


using (var scope = app.Services.CreateScope())
{
    var appUserService = scope.ServiceProvider.GetRequiredService<IUserService>();
    var appRoleUserService = scope.ServiceProvider.GetRequiredService<IAppUserRoleService>();
    var appRoleService = scope.ServiceProvider.GetRequiredService<IAppRoleService>();

    IdentityInitializer.Seed(appUserService, appRoleUserService, appRoleService).Wait();
}

app.Run();
