using Editme.DAL.Concrete.EntityFrameworkCore.DataContext;
using Editme.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Editme.DAL.Concrete.EntityFrameworkCore.Repositories
{
    public class EfUserRepository : EfGenericRepository<User>, IUserRepositoryDAL
    {
        public async Task<List<AppRole>> GetRolesByEmail(string email)
        {
            await using var context = new EditmeDbContext();
            return await context.Users
                .Join(context.AppUserRoles, entryPoint => entryPoint.Id, ur => ur.UserId, (user, userRole) => new { user, userRole }
                )
                .Join(context.AppRoles, combinedTwoTable => combinedTwoTable.userRole.AppRoleId, roleTable => roleTable.Id, (twoTable, role) => new
                { twoTable.user, role, twoTable.userRole })
                .Where(x => x.user.Email == email)
                .Select(x => new AppRole
                {
                    Id = x.role.Id,
                    Name = x.role.Name
                })
                .ToListAsync();
        }

        public async Task<List<AppRole>> GetRolesByUserName(string userName)
        {
            await using var context = new EditmeDbContext();
            return await context.Users
                .Join(context.AppUserRoles, entryPoint => entryPoint.Id, ur => ur.UserId, (user, userRole) => new { user, userRole }
                )
                .Join(context.AppRoles, combinedTwoTable => combinedTwoTable.userRole.AppRoleId, roleTable => roleTable.Id, (twoTable, role) => new
                { twoTable.user, role, twoTable.userRole })
                .Where(x => x.user.UserName == userName)
                .Select(x => new AppRole
                {
                    Id = x.role.Id,
                    Name = x.role.Name
                })
                .ToListAsync();
        }
    }
}
