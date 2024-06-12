using Builder.Api.Cqrs.Infrastructure;
using Builder.Api.Models;
using Builder.Api.Orm.Services;
using Microsoft.Extensions.Internal;

namespace Builder.Api.Cqrs.Commands;

public record UserCommand(string Name, string Email, string Password);

public interface IUserCommandHandler : ICommandAsync<UserCommand, ValidationResult>;

public class UserCommandHandler(BuilderDataService dataService, HashService hashService, ISystemClock clock) : IUserCommandHandler
{
    public async Task<ValidationResult> Execute(UserCommand command)
    {
        var now = clock.UtcNow.UtcDateTime;
        
        if (string.IsNullOrEmpty(command.Email) || string.IsNullOrEmpty(command.Password))
        {
            return new ValidationResult { Success = false, ErrorMessage = "Email and password are required" };
        }

        var user = new User
        {
            Name = command.Name,
            EmailAddress = command.Email,
            PasswordHash = hashService.HashString(command.Password),
            CreatedAt = now,
            UpdatedAt = now
        };

        dataService.Add(user);

        try
        {
            await dataService.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            return new ValidationResult { Success = false, ErrorMessage = ex.Message };
        }

        return new ValidationResult { Success = true };
    }
}
