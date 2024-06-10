using Builder.Api.Models;

using Microsoft.EntityFrameworkCore;

namespace Builder.Api.Orm.Context;

public class BuilderContext(DbContextOptions<BuilderContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; set; }
    public DbSet<Form> Forms { get; set; }
    public DbSet<FormSettings> FormSettings { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Form>().ToTable("Form", f => f.IsTemporal());
        modelBuilder.Entity<Form>().Property(f => f.Url).IsRequired(false);
        
        modelBuilder.Entity<FormSettings>().Property(f => f.DataEmailAddresses).IsRequired(false);
    }
}
