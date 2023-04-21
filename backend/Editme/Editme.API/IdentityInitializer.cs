using Editme.BusinessLayer.Interfaces;
using Editme.BusinessLayer.Utilities.StringInfo;
using Editme.Entities;
using Editme.Entities.Concrete;
using System.IO;

namespace Editme.API
{
    public class IdentityInitializer
    {
        public static async Task Seed(IUserService userService, IAppUserRoleService appUserRoleService, IAppRoleService appRoleService)
        {
            //i have to write my own role create method cause of i didnt use identity package

            var adminRole = await appRoleService.FindByName(RoleInfo.Admin);
            if (adminRole == null)
            {
                await appRoleService.Add(new AppRole
                {
                    Name = RoleInfo.Admin
                });
            }

            var memberRole = await appRoleService.FindByName(RoleInfo.Member);
            if (memberRole == null)
            {
                await appRoleService.Add(new AppRole
                {
                    Name = RoleInfo.Member
                });
            }

            var adminUser = await userService.FindByUserName("admin");
            if (adminUser == null)
            {
                await userService.Add(new User
                {
                    UserName = "admin",
                    Password = "123",
                    Email = "admin@editme.online"
                });


                var role = await appRoleService.FindByName(RoleInfo.Admin);
                var admin = await userService.FindByUserName("admin");
                await appUserRoleService.Add(new AppUserRole
                {
                    UserId = admin.Id,
                    AppRoleId = role.Id
                });
            }
        }
    }
}
