using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace EditMe.Online.Data;

public class EditmeDbContext : DbContext
{
    private readonly IConfiguration Configuration;
    public EditmeDbContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(Configuration.GetConnectionString("EditMeDb"));
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new AccountMap());
    }
    public DbSet<Account> Accounts { get; set; }

}

