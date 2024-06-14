using Builder.Api.Cqrs.Infrastructure;
using Builder.Api.Models;
using Builder.Api.Orm.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Internal;

namespace Builder.Api.Cqrs.Queries;

public record FormCategoriesQuery;

public interface IFormCategoriesQueryHandler : IQuery<FormCategoriesQuery, IQueryable<FormCategory>>;

public class FormCategoriesQueryHandler(BuilderDataService dataService) : IFormCategoriesQueryHandler
{
    public IQueryable<FormCategory> Execute(FormCategoriesQuery query)
    {
        // FKB: Uncomment this once we get out of the 'mock data' phase
        // return dataService.Get<FormCategory>().Include(f => f.Forms);

        return MockData.GetFormCategories().AsQueryable();
    }
}
