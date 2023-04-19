using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Editme.BusinessLayer.Utilities.StringInfo
{
    public class JwtInfo
    {
        public const string Issuer = "http://localhost:5106";
        public const string Audience = "http://localhost:5106";
        public const string SecurityKey = "EditMe.Online.JWTokenKey.2023";
        public const double TokenExpration = 30;
    }
}
