using Editme.DAL.Concrete.EntityFrameworkCore.Mapping;
using Editme.Entities;

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
            modelBuilder.Entity<User>().HasData(
                 new User
                 {
                     Id = 1,
                     Email = "info@editme.online",
                     Password = "123",
                     Name = "John",
                     Surname = "Doe",
                 }
             );
        }
        public DbSet<User> Users { get; set; }
    }
}
