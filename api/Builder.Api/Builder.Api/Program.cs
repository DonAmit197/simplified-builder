using Builder.Api.Cqrs.Infrastructure;
using Builder.Api.GraphQl.Queries;
using Builder.Api.Orm.Context;
using Builder.Api.Orm.Services;

using Microsoft.EntityFrameworkCore;

using System.Reflection;

var executingAssembly = Assembly.GetExecutingAssembly();

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddDbContext<BuilderContext>(options => { options.UseSqlServer("name=BuilderDb"); })
    .AddScoped<BuilderDataService>()
    .AddCommandsQueries(executingAssembly)
    .AddGraphQLServer()    
    .AddProjections()
    .AddApiTypes();

var app = builder.Build();

app.MapGraphQL();

app.Run();
