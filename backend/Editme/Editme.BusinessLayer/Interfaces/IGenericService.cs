﻿using Editme.Entities.Interfaces;

namespace Editme.BusinessLayer.Interfaces
{
    public interface IGenericService<TEntity> where TEntity : class, ITable, new()
    {
        Task<List<TEntity>> GetAll();
        Task<TEntity> GetById(int id);
        Task Delete(TEntity entity);
        Task Update(TEntity entity);
        Task Add(TEntity entity);
    }
}
