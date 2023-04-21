using Editme.DAL.Concrete.EntityFrameworkCore.Mapping;
using Editme.Entities;
using Editme.Entities.Concrete;

namespace Editme.DAL.Concrete.EntityFrameworkCore.DataContext
{
    public class EditmeDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=(localdb)\\mssqllocaldb;database=EditmeOnline");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserMap());
            modelBuilder.ApplyConfiguration(new AppRoleMap());
            modelBuilder.ApplyConfiguration(new AppUserRoleMap());
        }
        public DbSet<User> Users { get; set; }
        public DbSet<AppRole> AppRoles { get; set; }
        public DbSet<AppUserRole> AppUserRoles { get; set; }

    }
}
