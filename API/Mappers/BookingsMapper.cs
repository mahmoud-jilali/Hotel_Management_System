using System;
using API.Models;
using API.DTOs.Booking;
using API.DTOs.Room;

namespace API.Mappers;

public static class BookingsMapper
{
    public static BookingsDto ToBookingDto(this Booking booking)
    {
        return new BookingsDto
        {
            Id = booking.Id,
            RoomId = booking.RoomId,
            Room = booking.Room != null ? new RoomDto
            {
                Id = booking.Room.Id,
                Price = booking.Room.Price,
                Description = booking.Room.Description,
                Bookings = null,
                RoomTypeId = booking.Room.RoomTypeId,
                CreatedAt = booking.Room.CreatedAt,
                UpdatedAt = booking.Room.UpdatedAt
            } : null,
            StartDate = booking.StartDate,
            EndDate = booking.EndDate,
            CustomerName = booking.CustomerName,
            CustomerEmail = booking.CustomerEmail,
            CustomerPhone = booking.CustomerPhone,
            CreatedAt = booking.CreatedAt,
            UpdatedAt = booking.UpdatedAt
        };
    }
    public static Booking ToCreateBookingDto(this CreateBookingDto createBookingDto)
    {
        return new Booking
        {
            RoomId = createBookingDto.RoomId,
            StartDate = createBookingDto.StartDate,
            EndDate = createBookingDto.EndDate,
            CustomerName = createBookingDto.CustomerName,
            CustomerEmail = createBookingDto.CustomerEmail,
            CustomerPhone = createBookingDto.CustomerPhone,
            CreatedAt = createBookingDto.CreatedAt,
            UpdatedAt = createBookingDto.UpdatedAt
        };
    }
    public static Booking ToUpdateBookingDto(this UpdateBookingDto updateBookingDto)
    {
        return new Booking
        {
            RoomId = updateBookingDto.RoomId,
            StartDate = updateBookingDto.StartDate,
            EndDate = updateBookingDto.EndDate,
            CustomerName = updateBookingDto.CustomerName,
            CustomerEmail = updateBookingDto.CustomerEmail,
            CustomerPhone = updateBookingDto.CustomerPhone,
            CreatedAt = updateBookingDto.CreatedAt,
            UpdatedAt = updateBookingDto.UpdatedAt
        };
    }
}
