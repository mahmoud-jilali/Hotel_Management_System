using System;
using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Mappers;
using API.DTOs.Room;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/rooms")]
    [ApiController]
    public class RoomController(DBcontext context) : ControllerBase
    {
        private readonly DBcontext _context = context;

        [HttpGet]
        public async Task<IActionResult> GetRooms()
        {
            var rooms = await _context.Rooms.Include(b => b.Bookings)
            .Include(rt => rt.RoomType).ToListAsync();
            var roomDto = rooms.Select(rt => rt.ToRoomDto());
            return Ok(roomDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRoom(int id)
        {
            var room = await _context.Rooms
            .Include(b => b.Bookings).Include(rt => rt.RoomType)
            .FirstOrDefaultAsync(b => b.Id == id);

            if (room == null)
            {
                return NotFound();
            }
            return Ok(room.ToRoomDto());
        }

        [HttpPost]
        public async Task<IActionResult> CreateRoom([FromBody] CreateRoomDto roomDto)
        {
            try
            {
                var createRoom = roomDto.ToCreateRoomDto(_context);
                await _context.Rooms.AddAsync(createRoom);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetRoom), new { id = createRoom.Id }, createRoom.ToRoomDto());
            } catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRoom(int id, [FromBody] UpdateRoomDto updateRoom)
        {
            var room = await _context.Rooms.FirstOrDefaultAsync(r => r.Id == id);
            if (room == null)
            {
                return NotFound();
            }

            try
            {
                room.ToUpdateRoomDto(updateRoom, _context);
                await _context.SaveChangesAsync();
                return Ok(room.ToRoomDto());
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoom(int id)
        {
            var room = await _context.Rooms.FirstOrDefaultAsync(r => r.Id == id);
            if (room == null)
            {
                return NotFound();
            }

            _context.Rooms.Remove(room);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        
        [HttpGet("count")]
        public async Task<IActionResult> CountRooms()
        {
            var count = await _context.Rooms.CountAsync();
            return Ok(new { count });
        }

        [HttpGet("count_available_rooms")]
        public async Task<IActionResult> CountAvailableRooms()
        {
            var currentDate = DateTime.UtcNow;
            
            var countAvailableRooms = await _context.Rooms
                .Where(r => !r.Bookings.Any(b => 
                    (currentDate >= b.StartDate && currentDate <= b.EndDate)))
                .CountAsync();
            
            return Ok(new { count = countAvailableRooms });
        }
    }
}
