using Editme.BusinessLayer.Interfaces;
using Editme.DAL.Interfaces;
using Editme.Entities.Interfaces;

namespace Editme.BusinessLayer.Concrete
{
    public class GenericManager<TEntity> : IGenericService<TEntity> where TEntity : class, ITable, new()
    {
        private readonly IGenericDAL<TEntity> _genericDAL;
        public GenericManager(IGenericDAL<TEntity> genericDAL)
        {
            _genericDAL = genericDAL;
        }

        public async Task<List<TEntity>> GetAll()
        {
            return await _genericDAL.GetAll();
        }

        public async Task<TEntity> GetById(int id)
        {
            return await _genericDAL.GetById(id);
        }

        public async Task Delete(TEntity entity)
        {
            await _genericDAL.Delete(entity);
        }

        public async Task Update(TEntity entity)
        {
            await _genericDAL.Update(entity);
        }

        public async Task Add(TEntity entity)
        {
            await _genericDAL.Add(entity);
        }
    }
}
