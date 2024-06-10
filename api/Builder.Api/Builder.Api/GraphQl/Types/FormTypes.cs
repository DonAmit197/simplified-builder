using Builder.Api.Models;

namespace Builder.Api.GraphQl.Types;

public class FormType: ObjectType<Form>
{
}

public class UserType: ObjectType<User>
{
    protected override void Configure(IObjectTypeDescriptor<User> descriptor)
    {
        descriptor.Ignore(d => d.PasswordHash);
        descriptor.Ignore(d => d.Forms);
    }
}
