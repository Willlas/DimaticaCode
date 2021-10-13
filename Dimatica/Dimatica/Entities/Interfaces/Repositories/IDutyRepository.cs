using Dimatica.Entities.Entities.Duties;

namespace Dimatica.Entities.Interfaces.Repositories
{
    public interface IDutyRepository : IBaseRepository<Duties>
    {
        public bool Delete(string id);
    }
}
