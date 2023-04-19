using Editme.BusinessLayer.Interfaces;
using Editme.Entities;
using System.IO;

namespace Editme.API
{
    public class IdentityInitializer
    {
        public static async Task Seed(IUserService userService)
        {           
            var adminUser = await userService.FindUserByName("admin");
            if (adminUser == null)
            {
                await userService.Add(new User
                {
                    Name = "admin",
                    Email = "test@editme.online",
                    Password = "123",
                });                            
            }
        }
    }
}
