using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace Builder.Api.Orm.Services;

public interface IDataService
{
    IQueryable<T> Get<T>() where T : class;

    T Add<T>(T entity) where T : class;

    void AddRange<T>(IEnumerable<T> entities) where T : class;

    T Update<T>(T entity) where T : class;

    void UpdateRange<T>(IEnumerable<T> entities) where T : class;

    void Remove<T>(T entity) where T : class;

    void RemoveRange<T>(IEnumerable<T> entities) where T : class;

    void Detach<T>(T entity) where T : class;

    void DetachRange<T>(IEnumerable<T> entities) where T : class;

    Task<int> SaveChangesAsync();
}

public class DataService : IDataService
{
    private readonly DbContext _db = null!;

    public DataService()
    {
    }

    public DataService(DbContext db)
    {
        _db = db;
    }

    public virtual IQueryable<T> Get<T>() where T : class
    {
        return _db.Set<T>();
    }

    public virtual T Add<T>(T entity) where T : class
    {
        return _db.Set<T>().Add(entity).Entity;
    }

    public virtual void AddRange<T>(IEnumerable<T> entities) where T : class
    {
        _db.Set<T>().AddRange(entities);
    }

    public virtual void UpdateRange<T>(IEnumerable<T> entities) where T : class
    {
        _db.Set<T>().UpdateRange(entities);
    }

    public virtual T Update<T>(T entity) where T : class
    {
        return _db.Set<T>().Update(entity).Entity;
    }

    public virtual void Remove<T>(T entity) where T : class
    {
        _db.Set<T>().Remove(entity);
    }

    public virtual void RemoveRange<T>(IEnumerable<T> entities) where T : class
    {
        _db.Set<T>().RemoveRange(entities);
    }

    public virtual void Detach<T>(T entity) where T : class
    {
        _db.Entry(entity).State = EntityState.Detached;
    }

    public virtual void DetachRange<T>(IEnumerable<T>? entities) where T : class
    {
        if (entities == null) return;

        foreach (var entity in entities) _db.Entry(entity).State = EntityState.Detached;
    }

    public virtual Task<int> SaveChangesAsync()
    {
        return _db.SaveChangesAsync();
    }

    public virtual void Attach<T>(T entity) where T : class
    {
        _db.Attach(entity);
    }

    public virtual Task<IDbContextTransaction> BeginTransAsync()
    {
        return _db.Database.BeginTransactionAsync();
    }
}
