using Builder.Api.Cqrs.Queries;
using Builder.Api.Models;

namespace Builder.Api.GraphQl.Queries;

[QueryType]
public class FormCategoryQueries
{
    [UseProjection]
    public IQueryable<FormCategory> GetFormCategories([Service] IFormCategoriesQueryHandler queryHandler)
    {
        return queryHandler.Execute(default!);
    }
    
    [UseProjection]
    public IQueryable<FormCategoryCount> GetFormCategoryCounts([Service] IFormCategoryCountsQueryHandler queryHandler)
    {
        return queryHandler.Execute(default!);
    }
}
