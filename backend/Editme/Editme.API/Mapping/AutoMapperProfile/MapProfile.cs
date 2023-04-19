using AutoMapper;
using Editme.Entities;
using Editme.Entities.Dtos.UserDtos;

namespace Editme.API.Mapping.AutoMapperProfile
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();

        }
    }
}
