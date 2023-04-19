using Editme.DAL.Concrete.EntityFrameworkCore.DataContext;

namespace Editme.DAL.Concrete.EntityFrameworkCore.Repositories
{
    public class EfGenericRepository<TEntity> : IGenericDAL<TEntity> where TEntity : class, ITable, new()
    {
        public async Task<List<TEntity>> GetAll()
        {
            await using var _context = new EditmeDbContext();
            return await _context.Set<TEntity>().ToListAsync();
        }
        public async Task<List<TEntity>> GetAllByFilter(Expression<Func<TEntity, bool>> filter)
        {
            await using var _context = new EditmeDbContext();
            return await _context.Set<TEntity>().Where(filter).ToListAsync();
        }
        public async Task<TEntity> GetByFilter(Expression<Func<TEntity, bool>> filter)
        {
            await using var _context = new EditmeDbContext();
            return await _context.Set<TEntity>().FirstOrDefaultAsync(filter);
        }
        public async Task<TEntity> GetById(int id)
        {
            await using var _context = new EditmeDbContext();
            return await _context.Set<TEntity>().FindAsync(id);
        }
        public async Task Add(TEntity entity)
        {
            await using var _context = new EditmeDbContext();
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
        }
        public async Task Delete(TEntity entity)
        {
            await using var _context = new EditmeDbContext();
            _context.Remove(entity);
            await _context.SaveChangesAsync();
        }
        public async Task Update(TEntity entity)
        {
            await using var _context = new EditmeDbContext();
            _context.Update(entity);
            await _context.SaveChangesAsync();
        }
    }
}
