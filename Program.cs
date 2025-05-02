using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container

builder.Services.AddControllers();

// Only one DbContext registration is needed
builder.Services.AddDbContext<DataContext>(opt =>
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add Swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors();

var app = builder.Build();

// Enable Swagger UI in development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(); // Optional: pass options here if needed
}

app.UseCors(x => x
    .AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins("http://localhost:4200", "https://localhost:4200"));

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
