using Builder.Api.Cqrs.Infrastructure;
using Builder.Api.Models;
using Builder.Api.Orm.Services;
using Microsoft.Extensions.Internal;

namespace Builder.Api.Cqrs.Queries;

public record FormsQuery;

public interface IFormsQueryHandler : IQuery<FormsQuery, IQueryable<Form>>;

public class FormsQueryHandler(BuilderDataService dataService, ISystemClock clock) : IFormsQueryHandler
{
    public IQueryable<Form> Execute(FormsQuery query)
    {
        // FKB: Uncomment this once we get out of the 'mock data' phase
        // return dataService.Get<Form>();

        var now = clock.UtcNow.UtcDateTime;

        var category = new FormCategory
        {
            Id = 1,
            Name = "All Forms"
        };

        var forms = MockData.GetForms(now);
        
        return forms.OrderByDescending(f => f.UpdatedAt).AsQueryable();
    }
}
