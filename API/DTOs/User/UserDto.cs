using System;

namespace API.DTOs.User;

public class UserDto
{
    public int Id { get; set; }
    public required string FirstName { get; set; } 
    public required string LastName { get; set; } 
    public required string UserName { get; set; }
    public string PhoneNumber { get; set; } = string.Empty;
    public required string Email { get; set; } 
    public required string Password { get; set; } 
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
