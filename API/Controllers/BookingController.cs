using System;
using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Mappers;
using API.DTOs.Booking;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/bookings")]
    [ApiController]
    public class BookingController(DBcontext context) : ControllerBase
    {
        private readonly DBcontext _context = context;

        [HttpGet]
        public async Task<IActionResult> GetBookings()
        {
            var bookings = await _context.Bookings.Include(r => r.Room)
            .ToListAsync();
            var bookingDto = bookings.Select(b => b.ToBookingDto());
            return Ok(bookingDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBooking(int id)
        {
            var booking = await _context.Bookings
            .Include(r => r.Room)
            .FirstOrDefaultAsync(r => r.Id == id);

            if (booking == null)
            {
                return NotFound();
            }
            return Ok(booking.ToBookingDto());
        }

        [HttpPost]
        public async Task<IActionResult> CreateBooking([FromBody] CreateBookingDto bookingDto)
        {
            var createBooking = bookingDto.ToCreateBookingDto();
            await _context.Bookings.AddAsync(createBooking);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBooking), new { id = createBooking.Id }, createBooking.ToBookingDto());
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBooking(int id, [FromBody] UpdateBookingDto updateBooking)
        {
            // if (roomType == null || roomType.Id != id)
            // {
            //     return BadRequest("Room type ID mismatch.");
            // }

            var booking = await _context.Bookings.FirstOrDefaultAsync(b => b.Id == id);
            if (booking == null)
            {
                return NotFound();
            }

            booking.RoomId = updateBooking.RoomId;
            booking.StartDate = updateBooking.StartDate;
            booking.EndDate = updateBooking.EndDate;
            booking.CustomerName = updateBooking.CustomerName;
            booking.CustomerEmail = updateBooking.CustomerEmail;
            booking.CustomerPhone = updateBooking.CustomerPhone;

            await _context.SaveChangesAsync();

            return Ok(booking.ToBookingDto());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBooking(int id)
        {
            var booking = await _context.Bookings.FirstOrDefaultAsync(b => b.Id == id);
            if (booking == null)
            {
                return NotFound();
            }

            _context.Bookings.Remove(booking);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("old_bookings")]
        public async Task<IActionResult> OldBookings()
        {
            var currentDate = DateTime.UtcNow;

            var oldBookings = await _context.Bookings.Where(b => b.EndDate < currentDate)
                .Include(r => r.Room).ToListAsync();

            return Ok(oldBookings.Select(b => b.ToBookingDto()));
        }

        [HttpGet("current_bookings")]
        public async Task<IActionResult> CurrentBookings()
        {
            var currentDate = DateTime.UtcNow;

            var currentBookings = await _context.Bookings.Where(b => b.StartDate <= currentDate && b.EndDate > currentDate)
                .Include(r => r.Room).ToListAsync();

            return Ok(currentBookings.Select(b => b.ToBookingDto()));
        }
        
        [HttpGet("new_bookings")]
        public async Task<IActionResult> NewBookings()
        {
            var currentDate = DateTime.UtcNow;

            var newBookings = await _context.Bookings.Where(b => b.StartDate >= currentDate && b.EndDate > currentDate)
                .Include(r => r.Room).ToListAsync();
            
            return Ok(newBookings.Select(b => b.ToBookingDto()));
        }
    }
}
