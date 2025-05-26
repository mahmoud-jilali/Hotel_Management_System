using System;
using API.DTOs.Booking;
using API.DTOs.Room;
using API.Models;
using API.DTOs.RoomType;
using API.Data;

namespace API.Mappers;

public static class RoomsMapper
{
    public static RoomDto ToRoomDto(this Room room)
    {
        return new RoomDto
        {
            Id = room.Id,
            Price = room.Price,
            Description = room.Description,
            RoomTypeId = room.RoomTypeId,
            RoomType = room.RoomType != null ? new RoomTypeDto
            {
                Id = room.RoomType.Id,
                Name = room.RoomType.Name,
                Description = room.RoomType.Description,
                CreatedAt = room.RoomType.CreatedAt,
                UpdatedAt = room.RoomType.UpdatedAt
            } : null,
            Bookings = room.Bookings.Select(b => new BookingsDto
            {
                Id = b.Id,
                StartDate = b.StartDate,
                EndDate = b.EndDate,
                CustomerName = b.CustomerName,
                CustomerEmail = b.CustomerEmail,
                CustomerPhone = b.CustomerPhone,
                CreatedAt = b.CreatedAt,
                UpdatedAt = b.UpdatedAt
            }).FirstOrDefault(),
            CreatedAt = room.CreatedAt,
            UpdatedAt = room.UpdatedAt
        };
    }
    public static Room ToCreateRoomDto(this CreateRoomDto createRoomDto, DBcontext context)
    {
        var roomType = context.RoomTypes.FirstOrDefault(rt => rt.Name == createRoomDto.RoomTypeName);
        if (roomType == null)
        {
            throw new ArgumentException($"Room type '{createRoomDto.RoomTypeName}' not found");
        }

        return new Room
        {
            RoomTypeId = roomType.Id,
            Price = createRoomDto.Price,
            Description = createRoomDto.Description,
            CreatedAt = createRoomDto.CreatedAt,
            UpdatedAt = createRoomDto.UpdatedAt
        };
    }
    public static void ToUpdateRoomDto(this Room room, UpdateRoomDto updateRoomDto, DBcontext context)
    {
        var roomType = context.RoomTypes.FirstOrDefault(rt => rt.Name == updateRoomDto.RoomTypeName);
        if (roomType == null)
        {
            throw new ArgumentException($"Room type '{updateRoomDto.RoomTypeName}' not found");
        }

        room.RoomTypeId = roomType.Id;
        room.Price = updateRoomDto.Price;
        room.Description = updateRoomDto.Description;
        room.CreatedAt = updateRoomDto.CreatedAt;
        room.UpdatedAt = updateRoomDto.UpdatedAt;
    }
}
