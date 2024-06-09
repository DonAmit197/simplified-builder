using Builder.Api.Cqrs.Infrastructure;
using Builder.Api.Models;
using Builder.Api.Orm.Services;

namespace Builder.Api.Cqrs.Queries;

public record FormsQuery;

public interface IFormsQueryHandler : IQuery<FormsQuery, IQueryable<Form>>;

public class FormsQueryHandler(BuilderDataService dataService) : IFormsQueryHandler
{
    public IQueryable<Form> Execute(FormsQuery query)
    {
        return dataService.Get<Form>();
    }
}
