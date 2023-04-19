using Editme.Entities;
using Editme.Entities.Dtos.UserDtos;

namespace Editme.BusinessLayer.Interfaces
{
    public interface IUserService : IGenericService<User>
    {
        Task<User> GetUserByEmail(string email);
    }
}
