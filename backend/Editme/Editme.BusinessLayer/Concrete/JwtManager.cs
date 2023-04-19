using Editme.BusinessLayer.Interfaces;
using Editme.BusinessLayer.Utilities.StringInfo;
using Editme.Entities;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace Editme.BusinessLayer.Concrete
{
    public class JwtManager : IJwtService
    {
        public string GenerateJwtToken(User user)
        {
            var symmetricSecurityKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(JwtInfo.SecurityKey));

            var signinCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

            var jwtSecurityToken = new JwtSecurityToken(issuer: JwtInfo.Issuer, audience: JwtInfo.Audience,
                notBefore: DateTime.Now, expires: DateTime.Now.AddMinutes(JwtInfo.TokenExpration),
                signingCredentials: signinCredentials, claims: null);

            var handler = new JwtSecurityTokenHandler(); //IdentityModel.Tokens.Jwt Nuget Package

            return handler.WriteToken(jwtSecurityToken);
        }

        //claims must be added with roles
    }
}
