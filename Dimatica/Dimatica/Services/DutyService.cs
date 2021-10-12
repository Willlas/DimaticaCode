using Dimatica.Entities.DTOs;
using Dimatica.Entities.DTOs.Duties;
using Dimatica.Entities.Interfaces.Repositories;
using Dimatica.Entities.Interfaces.Services;
using System.Collections.Generic;

namespace Dimatica.Services
{
    public class DutyService: IDutyService
    {
        private readonly IDutyRepository _dutyRepository;
        public DutyService(
            IDutyRepository dutyRepository
        ) 
        {
            _dutyRepository = dutyRepository;
        }

        public DutyDTO Create(DutyDTO dto)
        {
            _dutyRepository.Create(dto);
        }

        public bool Delete(DutyDTO dto)
        {
            throw new System.NotImplementedException();
        }

        public List<DutyDTO> Retrieve(PaginationDTO dto)
        {
            throw new System.NotImplementedException();
        }

        public DutyDTO Update(DutyDTO dto)
        {
            throw new System.NotImplementedException();
        }
    }
}
