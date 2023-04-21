using Editme.Entities;
using Editme.Entities.Concrete;
using Editme.Entities.Dtos.UserDtos;

namespace Editme.BusinessLayer.Interfaces
{
    public interface IUserService : IGenericService<User>
    {
        Task<UserDto> GetUserByEmail(string email);
        Task<UserDto> FindUserByName(string name);
        Task<bool> CheckPassword(UserLoginDto model);
        Task<User> FindByUserName(string username);
        Task<List<AppRole>> GetRolesByUserName(string userName);
    }
}
