using Editme.Entities.Concrete;

namespace Editme.DAL.Interfaces
{
    public interface IUserRepositoryDAL : IGenericDAL<User>
    {
        Task<List<AppRole>> GetRolesByUserName(string userName);
        Task<List<AppRole>> GetRolesByEmail(string email);
    }
}
