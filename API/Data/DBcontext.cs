using System;
using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Data;

public class DBcontext(DbContextOptions<DBcontext> options) : DbContext(options)
{
    public DbSet<Room> Rooms { get; set; } = null!;
    public DbSet<RoomType> RoomTypes { get; set; } = null!;
    public DbSet<Booking> Bookings { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Room>().ToTable("Rooms");
        modelBuilder.Entity<RoomType>().ToTable("RoomTypes");
        modelBuilder.Entity<Booking>().ToTable("Bookings");

        modelBuilder.Entity<Room>()
            .HasOne(r => r.RoomType)
            .WithMany(rt => rt.Rooms)
            .HasForeignKey(r => r.RoomTypeId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Booking>()
            .HasOne(b => b.Room)
            .WithMany(r => r.Bookings)
            .HasForeignKey(b => b.RoomId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}