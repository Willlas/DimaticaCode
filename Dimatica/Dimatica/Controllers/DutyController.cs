using System.Collections.Generic;
using Dimatica.Entities.DTOs;
using Dimatica.Entities.DTOs.Duties;
using Dimatica.Entities.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace Dimatica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DutyController : ControllerBase
    {
        private IDutyService _dutyService;
        public DutyController(
            IDutyService dutyService
        ) {
            _dutyService = dutyService;
        }
        // GET: api/Duty
        [HttpGet]
        public List<DutyDTO> Get()
        {
            var dto = new PaginationDTO() { Entity = "duty"};
            return _dutyService.Retrieve(dto);
        }

        // GET: api/Duty/5
        [HttpGet("{id}", Name = "Get")]
        public List<DutyDTO> Get(int id)
        {
            var dto = new PaginationDTO();
            return _dutyService.Retrieve(dto);
        }

        // POST: api/Duty
        [HttpPost]
        public DutyDTO Post([FromBody] DutyDTO dto)
        {
            return _dutyService.Create(dto);
        }

        // PUT: api/Duty/5
        [HttpPut("{id}")]
        public DutyDTO Put([FromBody] DutyDTO dto)
        {
            return _dutyService.Update(dto);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public bool Delete([FromBody] DutyDTO dto)
        {
            return _dutyService.Delete(dto);
        }

    }
}
