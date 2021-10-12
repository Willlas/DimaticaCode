

using System.Collections.Generic;

namespace Dimatica.Entities.DTOs
{
    public class PaginationDTO : BaseDTO
    {
        public int StartAt { get; set; }
        public int Get { get; set; }
        public ConditionDTO Conditions { get; set; }
    }
}
