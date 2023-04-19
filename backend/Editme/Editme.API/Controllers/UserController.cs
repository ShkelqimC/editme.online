using Editme.Entities.Dtos.UserDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Editme.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        [HttpGet("[action]")]
        public IActionResult Get()
        {
            var user = new UserDto()
            {
                Name = "John",
                Surname = "Doe",
                Email = "test"
            };
            return Ok(user);
        }
    }
}
