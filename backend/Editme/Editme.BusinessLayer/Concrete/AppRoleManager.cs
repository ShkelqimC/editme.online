using Editme.BusinessLayer.Interfaces;
using Editme.DAL.Interfaces;
using Editme.Entities.Concrete;

namespace Editme.BusinessLayer.Concrete
{
    public class AppRoleManager : GenericManager<AppRole>, IAppRoleService
    {
        private readonly IGenericDAL<AppRole> _genericDal;

        public AppRoleManager(IGenericDAL<AppRole> genericDal) : base(genericDal)
        {
            _genericDal = genericDal;
        }

        public async Task<AppRole> FindByName(string roleName)
        {
            return await _genericDal.GetByFilter(x => x.Name == roleName);
        }
    }
}
