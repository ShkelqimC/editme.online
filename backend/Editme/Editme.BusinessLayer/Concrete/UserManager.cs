using AutoMapper;
using Editme.BusinessLayer.Interfaces;
using Editme.BusinessLayer.Utilities.CustomExceptions;
using Editme.DAL.Concrete.EntityFrameworkCore.Repositories;
using Editme.DAL.Interfaces;
using Editme.Entities;
using Editme.Entities.Dtos.UserDtos;

namespace Editme.BusinessLayer.Concrete
{
    public class UserManager : GenericManager<User>, IUserService
    {
        private readonly IUserRepositoryDAL _userRepositoryDAL;
        private readonly IMapper _mapper;

        public UserManager(IGenericDAL<User> genericDAL, IUserRepositoryDAL userRepositoryDAL, IMapper mapper) : base(genericDAL)
        {
            _userRepositoryDAL = userRepositoryDAL;
            _mapper = mapper;
        }

        public async Task<User> GetUserByEmail(string email)
        {
            return await _userRepositoryDAL.GetByFilter(x => x.Email == email);
        }
        public async Task<User> FindUserByName(string name)
        {
            return await _userRepositoryDAL.GetByFilter(x => x.Email == name);
        }
    }
}
