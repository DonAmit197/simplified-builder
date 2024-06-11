using Builder.Api.Orm.Context;

namespace Builder.Api.Orm.Services;

public class BuilderDataService : DataService
{
    // for unit testing
    public BuilderDataService() { }

    public BuilderDataService(BuilderContext dbContext) : base(dbContext) { }

}
