using AutoMapper;
using Dimatica.Entities.DTOs;
using Dimatica.Entities.DTOs.Duties;
using Dimatica.Entities.Entities.Duties;
using Dimatica.Entities.Interfaces.Repositories;
using Dimatica.Entities.Interfaces.Services;
using System.Collections.Generic;

namespace Dimatica.Services
{
    public class DutyService: IDutyService
    {
        private readonly IDutyRepository _dutyRepository;
        private readonly IMapper _mapper;
        public DutyService(
            IDutyRepository dutyRepository,
            IMapper mapper
        ) 
        {
            _mapper = mapper;
            _dutyRepository = dutyRepository;
        }

        public DutyDTO Create(DutyDTO dto)
        {
            var dutie = _mapper.Map<Duties>(dto);
            return _mapper.Map<DutyDTO>(_dutyRepository.Create(dutie));
        }

        public bool Delete(DutyDTO dto)
        {

            var dutie = _mapper.Map<Duties>(dto);
            return _dutyRepository.Delete(dutie);
        }

        public List<DutyDTO> Retrieve(PaginationDTO dto)
        {
            return _mapper.Map<List<DutyDTO>>(_dutyRepository.Retrieve(dto));
        }

        public DutyDTO Update(DutyDTO dto)
        {
            var dutie = _mapper.Map<Duties>(dto);
            return _mapper.Map<DutyDTO>(_dutyRepository.Update(dutie));
        }
    }
}
