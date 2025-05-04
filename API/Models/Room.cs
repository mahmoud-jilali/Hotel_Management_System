using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models;

public class Room
{
    public int Id { get; set; }
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
    public string Description { get; set; } = string.Empty;
    public int? RoomTypeId { get; set; }
    public RoomType? RoomType { get; set; }
    public List<Booking> Bookings { get; set; } = [];
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
