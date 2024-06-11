namespace Builder.Api.GraphQl.Infrastructure;

public static class GraphQlServiceCollectionExtensions
{
    public static IServiceCollection AddGraphQl(this IServiceCollection services)
    {
        services
            .AddGraphQLServer()    
            .AddProjections()
            .AddApiTypes();

        return services;
    }
}
