using Editme.BusinessLayer.Interfaces;
using Editme.BusinessLayer.Utilities.CustomExceptions;
using Editme.DAL.Interfaces;
using Editme.Entities;
using Editme.Entities.Dtos.UserDtos;

namespace Editme.BusinessLayer.Concrete
{
    public class UserManager : GenericManager<User>, IUserService
    {
        private readonly IUserRepositoryDAL _userRepositoryDAL;
        public UserManager(IGenericDAL<User> genericDAL, IUserRepositoryDAL userRepositoryDAL) : base(genericDAL)
        {
            _userRepositoryDAL = userRepositoryDAL;
        }
        public async Task<User> GetUserByEmail(string email)
        {
            return await _userRepositoryDAL.GetByFilter(x => x.Email == email);
        }
    }
}
