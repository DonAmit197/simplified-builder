using Builder.Api.Cqrs.Commands;
using Builder.Api.Models;

namespace Builder.Api.GraphQl.Mutations;

[MutationType]
public class UserMutations
{
    [UseProjection]
    public async Task<ValidationResult> CreateUser(UserCommand input, [Service] IUserCommandHandler commandHandler)
    {
        return await commandHandler.Execute(input);
    }
}
