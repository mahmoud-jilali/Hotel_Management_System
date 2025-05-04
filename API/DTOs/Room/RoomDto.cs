using System;
using API.DTOs.Booking;
using API.DTOs.RoomType;
using API.Models;

namespace API.DTOs.Room;

public class RoomDto
{
    public int Id { get; set; }
    public int? RoomTypeId { get; set; }
    public RoomTypeDto? RoomType { get; set; }
    public decimal Price { get; set; }
    public string Description { get; set; } = string.Empty;
    public BookingsDto? Bookings { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
