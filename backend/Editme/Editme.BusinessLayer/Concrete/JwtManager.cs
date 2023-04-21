using Editme.BusinessLayer.Interfaces;
using Editme.BusinessLayer.Utilities.StringInfo;
using Editme.Entities;
using Editme.Entities.Concrete;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace Editme.BusinessLayer.Concrete
{
    public class JwtManager : IJwtService
    {
        public string GenerateJwtToken(User user, List<AppRole> roles)
        {
            var symmetricSecurityKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(JwtInfo.SecurityKey));

            var signinCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

            var jwtSecurityToken = new JwtSecurityToken(issuer: JwtInfo.Issuer, audience: JwtInfo.Audience,
                notBefore: DateTime.Now, expires: DateTime.Now.AddMinutes(JwtInfo.TokenExpration),
                signingCredentials: signinCredentials, claims: GetClaims(user, roles));

            var handler = new JwtSecurityTokenHandler(); 

            return handler.WriteToken(jwtSecurityToken);
        }

        private List<Claim> GetClaims(User user, List<AppRole> roles)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
            };

            if (roles == null)
            {
                return null;
            }
            if (roles.Count > 0)
            {
                foreach (var role in roles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, role.Name));
                }
            }
            return claims;
        }
    }
}
