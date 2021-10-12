using Dimatica.Entities.DTOs;
using Dimatica.Entities.DTOs.Duties;
using System.Collections.Generic;

namespace Dimatica.Entities.Interfaces.Services
{
    public interface IDutyService
    {
        public DutyDTO Create(DutyDTO dto);
        public List<DutyDTO> Retrieve(PaginationDTO dto);
        public DutyDTO Update(DutyDTO dto);
        public bool Delete(DutyDTO dto);
    }
}
