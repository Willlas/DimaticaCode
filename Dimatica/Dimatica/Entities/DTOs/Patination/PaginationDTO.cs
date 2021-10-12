

using System.Collections.Generic;

namespace Dimatica.Entities.DTOs
{
    public class PaginationDTO : BaseDTO
    {
        public string Entity { get; set; }
        public int StartAt { get; set; }
        public int Get { get; set; }
        public List<ConditionDTO> Conditions { get; set; }
    }
}
