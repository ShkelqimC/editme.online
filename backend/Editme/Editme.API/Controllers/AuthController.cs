using AutoMapper;
using Editme.BusinessLayer.Interfaces;
using Editme.BusinessLayer.Utilities.StringInfo;
using Editme.Entities;
using Editme.Entities.Concrete;
using Editme.Entities.Dtos.UserDtos;
using Editme.Entities.Token;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Editme.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IJwtService _jwtService;
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public AuthController(IJwtService jwtService, IUserService appUserService, IMapper mapper)
        {
            _jwtService = jwtService;
            _userService = appUserService;
            _mapper = mapper;
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> SignIn(UserLoginDto model)
        {
            var appUser = await _userService.FindByUserName(model.UserName);
            if (appUser == null) return BadRequest("Username or Password is wrong!");
            if (!await _userService.CheckPassword(model)) return BadRequest("Username or Password is wrong!");

            var roles = await _userService.GetRolesByUserName(model.UserName);
            if (roles == null) return BadRequest("User roles are empty!");

            var token = _jwtService.GenerateJwtToken(appUser, roles);

            var jwtToken = new JwtToken
            {
                Token = token
            };

            return Created("", jwtToken);
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> Register(UserAddDto model, [FromServices] IAppUserRoleService appUserRoleService, [FromServices] IAppRoleService appRoleService)
        {
            var user = await _userService.FindByUserName(model.UserName);
            if (user != null) return BadRequest($"{user.UserName} is already taken!");

            await _userService.Add(_mapper.Map<User>(model));

            var createdUser = await _userService.FindByUserName(model.UserName);
            var role = await appRoleService.FindByName(RoleInfo.Member);

            await appUserRoleService.Add(new AppUserRole
            {
                AppRoleId = role.Id,
                UserId = createdUser.Id
            });

            return Created("", model);
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<IActionResult> ActiveUser()
        {
            var user = await _userService.FindByUserName(User.Identity.Name);
            var roles = await _userService.GetRolesByUserName(User.Identity.Name);
            var userDto = new UserDto()
            {
                Email = user.Email,
                UserName = user.UserName,
                Roles = roles.Select(x => x.Name).ToList()
            };
            return Ok(userDto);
        }
    }
}
