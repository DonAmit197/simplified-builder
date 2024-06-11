using Builder.Api.Cqrs.Queries;
using Builder.Api.Models;

namespace Builder.Api.GraphQl.Queries;

[QueryType]
public class FormQueries
{
    [UseProjection]
    public IQueryable<Form> GetForms([Service] IFormsQueryHandler queryHandler)
    {
        return queryHandler.Execute(default!);
    }
}
