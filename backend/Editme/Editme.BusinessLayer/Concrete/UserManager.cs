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

        public async Task<UserDto> GetUserByEmail(string email)
        {
            var getUser = await _userRepositoryDAL.GetByFilter(x => x.Email == email);

            return _mapper.Map<UserDto>(getUser);
        }
        public async Task<UserDto> FindUserByName(string name)
        {
            var getUser = await _userRepositoryDAL.GetByFilter(x => x.Name == name);
            var userDto= _mapper.Map<UserDto>(getUser);
            return userDto;
        }
    }
}
