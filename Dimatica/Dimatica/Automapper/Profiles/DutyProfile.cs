using AutoMapper;
using Dimatica.Entities.DTOs.Duties;
using Dimatica.Entities.Entities.Duties;

namespace Dimatica.Automapper.Profiles
{
    public class DutyProfile: Profile
    {
        public DutyProfile()
        {
            CreateMap<Duties, DutyDTO>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Name, opts => opts.MapFrom(src => src.Name));

            CreateMap<DutyDTO,Duties>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Name, opts => opts.MapFrom(src => src.Name));
        }
    }
}
