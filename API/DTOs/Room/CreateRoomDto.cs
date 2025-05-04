using System;

namespace API.DTOs.Room;

public class CreateRoomDto
{
    public int RoomTypeId { get; set; }
    public decimal Price { get; set; }
    public string Description { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
