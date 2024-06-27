using Builder.Api.Cqrs.Infrastructure;
using Builder.Api.Models;
using Builder.Api.Orm.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Internal;

namespace Builder.Api.Cqrs.Queries;

public record FormCategoryCountsQuery;

public interface IFormCategoryCountsQueryHandler : IQuery<FormCategoryCountsQuery, IQueryable<FormCategoryCount>>;

public class FormCategoryCountsQueryHandler(BuilderDataService dataService) : IFormCategoryCountsQueryHandler
{
    public IQueryable<FormCategoryCount> Execute(FormCategoryCountsQuery query)
    {
        var categories = MockData.GetFormCategories();
        var counts = categories.Select(c => new FormCategoryCount
        {
            FormCategory = c,
            FormCount = c.Id == -1 ? 6 : c.Id == 1 ? 3 : c.Id == 2 ? 2 : 1
        }).ToList();

        return counts.AsQueryable();
    }
}
