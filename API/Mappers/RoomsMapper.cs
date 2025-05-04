using System;
using API.DTOs.Booking;
using API.DTOs.Room;
using API.Models;
using API.DTOs.RoomType;

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
    public static Room ToCreateRoomDto(this CreateRoomDto creatrRoomDto)
    {
        return new Room
        {
            RoomTypeId = creatrRoomDto.RoomTypeId,
            Price = creatrRoomDto.Price,
            Description = creatrRoomDto.Description,
            CreatedAt = creatrRoomDto.CreatedAt,
            UpdatedAt = creatrRoomDto.UpdatedAt
        };
    }
    public static Room ToUpdateRoomDto(this UpdateRoomDto updateRoomDto)
    {
        return new Room
        {
            RoomTypeId = updateRoomDto.RoomTypeId,
            Price = updateRoomDto.Price,
            Description = updateRoomDto.Description,
            CreatedAt = updateRoomDto.CreatedAt,
            UpdatedAt = updateRoomDto.UpdatedAt
        };
    }
}
