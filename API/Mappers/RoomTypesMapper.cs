using System;
using API.DTOs.RoomType;
using API.DTOs.Room;
using API.Models;

namespace API.Mappers;

public static class RoomTypesMapper
{
    public static RoomTypeDto ToRoomTypeDto(this RoomType roomType)
    {
        return new RoomTypeDto
        {
            Id = roomType.Id,
            Name = roomType.Name,
            Description = roomType.Description,
            Rooms = roomType.Rooms.Select(r => new RoomDto
            {
                Id = r.Id,
                Price = r.Price,
                Description = r.Description,
                CreatedAt = r.CreatedAt,
                UpdatedAt = r.UpdatedAt
            }).ToList(),
            CreatedAt = roomType.CreatedAt,
            UpdatedAt = roomType.UpdatedAt
        };
    }
    public static RoomType ToCreateRoomTypeDto(this CreateRoomTypeDto roomTypeDto)
    {
        return new RoomType
        {
            Name = roomTypeDto.Name,
            Description = roomTypeDto.Description,
            CreatedAt = roomTypeDto.CreatedAt,
            UpdatedAt = roomTypeDto.UpdatedAt
        };
    }
}
