using Editme.Entities.Dtos.UserDtos;
using FluentValidation;

namespace Editme.BusinessLayer.Utilities.ValidationRules
{
    public class UserAddDtoValidator : AbstractValidator<UserAddDto>
    {
        public UserAddDtoValidator()
        {
            RuleFor(x => x.Email).NotEmpty().WithMessage("Email must be filled");
            RuleFor(x => x.Password).NotEmpty().WithMessage("Password must be filled");
            RuleFor(x => x.Name).MaximumLength(100);
            RuleFor(x => x.Surname).MaximumLength(100);
        }
    }
}
