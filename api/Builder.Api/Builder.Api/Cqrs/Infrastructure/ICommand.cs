namespace Builder.Api.Cqrs.Infrastructure;

/// <summary>
///     Interface for commands returning results
/// </summary>
public interface ICommand<in TCommand, out TResult>
    where TCommand : class
{
    TResult Execute(TCommand command);
}

/// <summary>
///     Interface for commands returning results
/// </summary>
public interface ICommandAsync<in TCommand, TResult>
    where TCommand : class
{
    Task<TResult> Execute(TCommand command);
}

public interface ICommandAsync<in TCommand>
    where TCommand : class
{
    Task Execute(TCommand command);
}
