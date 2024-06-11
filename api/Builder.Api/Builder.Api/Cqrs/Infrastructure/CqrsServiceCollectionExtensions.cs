using System.Reflection;

namespace Builder.Api.Cqrs.Infrastructure;

public static class CqrsServiceCollectionExtensions
{
    public static IServiceCollection AddCommandsQueries(this IServiceCollection services,
        Assembly assembly)
    {
        assembly
            .GetTypes()
            .Where(a => a.GetInterfaces().Any(
                y => y.IsGenericType &&
                     (
                         y.GetGenericTypeDefinition() == typeof(ICommandAsync<>) ||
                         y.GetGenericTypeDefinition() == typeof(ICommand<,>) ||
                         y.GetGenericTypeDefinition() == typeof(ICommandAsync<,>) ||
                         y.GetGenericTypeDefinition() == typeof(IQuery<,>))
                     && a is { IsAbstract: false, IsInterface: false }))
            .Select(a => new { assignedType = a, serviceTypes = a.GetInterfaces().ToList() })
            .ToList()
            .ForEach(typesToRegister =>
            {
                typesToRegister.serviceTypes.ForEach(typeToRegister =>
                    services.AddScoped(typeToRegister, typesToRegister.assignedType));
            });

        return services;
    }
}
