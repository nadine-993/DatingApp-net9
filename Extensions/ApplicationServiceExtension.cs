using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;


public static class ApplicationServiceExtension
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
       services.AddControllers();

        // Only one DbContext registration is needed
       services.AddDbContext<DataContext>(opt =>
            opt.UseSqlite(config.GetConnectionString("DefaultConnection")));

        // Add Swagger services
       services.AddEndpointsApiExplorer();
       services.AddSwaggerGen();

       services.AddCors();
       services.AddScoped<ITokenService, TokenService>();
       return services;

    }
}