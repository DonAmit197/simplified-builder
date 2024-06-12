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
        // FKB: Uncomment this once we get out of the 'mock data' phase
        return dataService.Get<Form>();

        /*var forms = new List<Form>
        {
            new Form
            {
                Id = 1,
                UserId = 1,
                IsDeleted = false,
                IsActive = true,

            }
        }*/
    }
}
