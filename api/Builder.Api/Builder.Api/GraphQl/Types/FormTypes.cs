using Builder.Api.Models;

namespace Builder.Api.GraphQl.Types;

public class FormType : ObjectType<Form>
{
    protected override void Configure(IObjectTypeDescriptor<Form> descriptor)
    {
        descriptor.Field("updatedLocal").Resolve(x => x.Parent<Form>().UpdatedAt.ToLocalTime());
    }
}

public class UserType : ObjectType<User>
{
    protected override void Configure(IObjectTypeDescriptor<User> descriptor)
    {
        descriptor.Ignore(d => d.PasswordHash);
        descriptor.Ignore(d => d.Forms);

        descriptor.Field("createdLocal").Resolve(x => x.Parent<User>().CreatedAt.ToLocalTime());
        descriptor.Field("updatedLocal").Resolve(x => x.Parent<User>().UpdatedAt.ToLocalTime());
    }
}

public class FormCategoryType : ObjectType<FormCategory>
{
}
