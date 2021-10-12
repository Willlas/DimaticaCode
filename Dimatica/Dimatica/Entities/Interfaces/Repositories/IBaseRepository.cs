
using Dimatica.Entities.DTOs;
using System.Collections.Generic;

namespace Dimatica.Entities.Interfaces.Repositories
{
    public interface IBaseRepository<T> where T : class
    {
        public T Create(T entity);

        public List<T> Retrieve(PaginationDTO pagination);

        public T Update(T entity);

        public bool Delete(T entity);
    }
}
