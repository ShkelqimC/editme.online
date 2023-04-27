using EditMe.Online.Data;
using EditMe.Online.Helpers;
using EditMe.Online.Helpers.DependenciesContainers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDependencies();
builder.Services.AddControllers().AddJsonOptions(x =>
{
    x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
});
builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


using (var scope = app.Services.CreateScope())
{
    var dataContext = scope.ServiceProvider.GetRequiredService<EditmeDbContext>();
    dataContext.Database.Migrate();
}
app.Run();
