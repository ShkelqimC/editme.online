using Editme.Entities.Concrete;
namespace Editme.BusinessLayer.Interfaces
{
    public interface IAppRoleService : IGenericService<AppRole>
    {
        Task<AppRole> FindByName(string roleName);
    }
}
