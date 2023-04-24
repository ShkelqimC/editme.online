using Editme.Entities.Dtos.UserDtos;
using FluentValidation;

namespace Editme.BusinessLayer.Utilities.ValidationRules
{
    public class UserLoginDtoValidator : AbstractValidator<UserLoginDto>
    {
        public UserLoginDtoValidator()
        {
            RuleFor(x => x.Email).NotEmpty().WithMessage("Email must be filled!");
            RuleFor(x => x.Password).NotEmpty().WithMessage("Password must be filled!");
        }
    }
}