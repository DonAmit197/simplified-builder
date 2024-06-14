using Builder.Api.Cqrs.Infrastructure;
using Builder.Api.Models;
using Builder.Api.Orm.Services;
using Microsoft.Extensions.Internal;

namespace Builder.Api.Cqrs.Queries;

public record FormsQuery(int CategoryId, string SearchText);

public interface IFormsQueryHandler : IQuery<FormsQuery, IQueryable<Form>>;

public class FormsQueryHandler(BuilderDataService dataService, ISystemClock clock) : IFormsQueryHandler
{
    public IQueryable<Form> Execute(FormsQuery query)
    {
        // FKB: Uncomment this once we get out of the 'mock data' phase
        // return dataService.Get<Form>();

        var now = clock.UtcNow.UtcDateTime;

        var forms = MockData.GetForms(now);

        return forms
            .Where(f => query.CategoryId == -1 || f.FormSettings.FormCategory.Id == query.CategoryId)
            .Where(f => string.IsNullOrEmpty(query.SearchText) || f.FormSettings.Title.Contains(query.SearchText, StringComparison.CurrentCultureIgnoreCase))
            .OrderByDescending(f => f.UpdatedAt)
            .AsQueryable();
    }
}
