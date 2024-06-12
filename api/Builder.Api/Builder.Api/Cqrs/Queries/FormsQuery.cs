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
        
        var forms = new List<Form>
        {
            new()
            {
                Id = 1,
                IsActive = true,
                UpdatedAt = now.AddDays(-5),
                FormSettings = new FormSettings
                {
                    Title = "Advance notice of arrival",
                    FormCategory = category
                }
            },
            new()
            {
                Id = 2,
                IsActive = true,
                UpdatedAt = now.AddDays(-20),
                FormSettings = new FormSettings
                {
                    Title = "Deferred Payment Account",
                    FormCategory = category
                }
            },
            new()
            {
                Id = 3,
                IsActive = true,
                UpdatedAt = now.AddDays(-17),
                FormSettings = new FormSettings
                {
                    Title = "Secure Export Scheme",
                    FormCategory = category
                }
            },
            new()
            {
                Id = 5,
                IsActive = true,
                UpdatedAt = now.AddDays(-8),
                FormSettings = new FormSettings
                {
                    Title = "Transport operators",
                    FormCategory = category
                }
            },
            new()
            {
                Id = 2,
                IsActive = true,
                UpdatedAt = now.AddDays(-20),
                FormSettings = new FormSettings
                {
                    Title = "Deferred Payment Account",
                    FormCategory = category
                }
            }
        };

        return forms.AsQueryable();
    }
}
