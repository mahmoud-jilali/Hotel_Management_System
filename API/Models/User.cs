using System;
using Microsoft.AspNetCore.Identity;

namespace API.Models;

public class User : IdentityUser
{
    public required string FirstName { get; set; } 
    public required string LastName { get; set; } 
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

}
