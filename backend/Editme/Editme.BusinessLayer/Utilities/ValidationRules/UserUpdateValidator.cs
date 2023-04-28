using Editme.Entities.Dtos.UserDtos;
using FluentValidation;

namespace Editme.BusinessLayer.Utilities.ValidationRules
{
    public class UserUpdateValidator : AbstractValidator<UserUpdateDto>
    {
        public UserUpdateValidator()
        {
            RuleFor(x => x.Email).NotEmpty().WithMessage("Email must be filled!");
            RuleFor(x => x.Password).NotEmpty().WithMessage("Password must be filled!");
        }
    }
}