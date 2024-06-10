using Builder.Api.Cqrs.Infrastructure;
using Builder.Api.Orm.Context;
using Builder.Api.Orm.Services;

using Microsoft.EntityFrameworkCore;

using System.Reflection;
using Builder.Api.GraphQl.Infrastructure;

var executingAssembly = Assembly.GetExecutingAssembly();

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddDbContext<BuilderContext>(options => { options.UseSqlServer("name=BuilderDb"); })
    .AddCommandsQueries(executingAssembly)
    .AddGraphQl()
    .AddScoped<BuilderDataService>()
    .AddScoped<HashService>()
    .AddCors(options =>
    {
        options.AddDefaultPolicy(
            policy =>
            {
                policy.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            });
    });

var app = builder.Build();

app.UseCors();

app.MapGraphQL();

app.Run();
