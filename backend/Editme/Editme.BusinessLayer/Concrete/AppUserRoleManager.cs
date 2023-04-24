using Editme.BusinessLayer.Interfaces;
using Editme.DAL.Interfaces;
using Editme.Entities.Concrete;

namespace Editme.BusinessLayer.Concrete
{
    public class AppUserRoleManager : GenericManager<AppUserRole>, IAppUserRoleService
    {
        public AppUserRoleManager(IGenericDAL<AppUserRole> genericDal) : base(genericDal)
        {

        }
    }
}