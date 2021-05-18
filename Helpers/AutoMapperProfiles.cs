using AutoMapper;
using BST_Projekt.Dtos;
using BST_Projekt.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BST_Projekt.Models;

namespace BST_Projekt.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
    {
        CreateMap<User, UserForPlanerDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url));
        CreateMap<User, UserForDetailedDto>()
                 .ForMember(dest => dest.PhotoUrl, opt =>
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url)); ;
        CreateMap<Photo, PhotosForDetailedDto>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<PhotoForCreationDto, Photo>();
            CreateMap<UserForRegisterDto, User>();
            CreateMap<MessageForCreationDto, Message>().ReverseMap();
            CreateMap<Message, MessageToReturnDto>()
                 .ForMember(m => m.SenderKnownAs, opt => opt
                    .MapFrom(u => u.Sender.UserName))
                .ForMember(m => m.RecipientKnownAs, opt => opt
                    .MapFrom(u => u.Recipient.UserName))
            .ForMember(m => m.SenderPhotoUrl, opt => opt
                    .MapFrom(u => u.Sender.Photos.FirstOrDefault(p => p.IsMain).Url))
                .ForMember(m => m.RecipientPhotoUrl, opt => opt
                    .MapFrom(u => u.Recipient.Photos.FirstOrDefault(p => p.IsMain).Url));





        }
    }
}
