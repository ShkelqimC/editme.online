using AutoMapper;
using Editme.BusinessLayer.Interfaces;
using Editme.BusinessLayer.Utilities.CustomExceptions;
using Editme.Entities;
using Editme.Entities.Dtos.UserDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Editme.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public UserController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetUsers()
        {
            try
            {
                return Ok(await _userService.GetAll());
            }
            catch (Exception)
            {
                return BadRequest("Something went wrong");
            }
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetUser(int userId)
        {
            try
            {
                return Ok(await _userService.GetById(userId));
            }
            catch (UserNotFoundException)
            {
                return NotFound("User not found");
            }
            catch (Exception)
            {
                return BadRequest("Something went wrong");
            }
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetUserByName(string name)
        {
            try
            {
                return Ok(await _userService.FindUserByName(name));
            }
            catch (UserNotFoundException)
            {
                return NotFound("User not found");
            }
            catch (Exception)
            {
                return BadRequest("Something went wrong");
            }
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> AddUser(UserAddDto userToAddDTO)
        {
            try
            {
                var user = _mapper.Map<User>(userToAddDTO);
                await _userService.Add(user);
                return Ok(user);
            }
            catch (Exception)
            {
                return BadRequest("Something went wrong");
            }
        }

        [HttpPut("[action]")]
        public async Task<IActionResult> UpdateUser(UserUpdateDto userToUpdateDTO)
        {
            try
            {
                var user = _mapper.Map<User>(userToUpdateDTO);
                await _userService.Update(user);
                return Ok(user);
            }
            catch (UserNotFoundException)
            {
                return NotFound("User not found");
            }
            catch (Exception)
            {
                return BadRequest("Something went wrong");
            }
        }

        [HttpDelete("[action]")]
        public async Task<IActionResult> DeleteUser(int userId)
        {
            try
            {
                var userExists = await _userService.GetById(userId);
                if (userExists == null) return NotFound("User not found");
                await _userService.Delete(userExists);
                return NoContent();
            }
            catch (UserNotFoundException)
            {
                return NotFound("User not found");
            }
            catch (Exception)
            {
                return BadRequest("Something went wrong");
            }
        }
    }
}
