namespace Builder.Api.Cqrs.Infrastructure;

/// <summary>
///     Interface for queries.
/// </summary>
public interface IQuery<in TQuery, out TResult>
    where TQuery : class
{
    TResult Execute(TQuery query);
}
