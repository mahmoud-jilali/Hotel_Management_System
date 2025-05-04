using System;
using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Mappers;
using API.DTOs.RoomType;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/room_types")]
    [ApiController]
    public class RoomTypeController(DBcontext context) : ControllerBase
    {
        private readonly DBcontext _context = context;

        [HttpGet]
        public async Task<IActionResult> GetRoomTypes()
        {
            var roomTypes = await _context.RoomTypes.Include(rt => rt.Rooms)
            .ToListAsync();
            var roomDto = roomTypes.Select(rt => rt.ToRoomTypeDto());
            return Ok(roomTypes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRoomType(int id)
        {
            var roomType = await _context.RoomTypes
            .Include(rt => rt.Rooms)
            .FirstOrDefaultAsync(rt => rt.Id == id);

            if (roomType == null)
            {
                return NotFound();
            }
            return Ok(roomType.ToRoomTypeDto());
        }

        [HttpPost]
        public async Task<IActionResult> CreateRoomType([FromBody] CreateRoomTypeDto roomTypeDto)
        {
            var roomType = roomTypeDto.ToCreateRoomTypeDto();
            await _context.RoomTypes.AddAsync(roomType);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetRoomType), new { id = roomType.Id }, roomType.ToRoomTypeDto());
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRoomType(int id, [FromBody] UpdateRoomTypeDto updateRoomType)
        {
            // if (roomType == null || roomType.Id != id)
            // {
            //     return BadRequest("Room type ID mismatch.");
            // }

            var roomType = await _context.RoomTypes.FirstOrDefaultAsync(rt => rt.Id == id);
            if (roomType == null)
            {
                return NotFound();
            }

            roomType.Name = updateRoomType.Name;
            roomType.Description = updateRoomType.Description;

            await _context.SaveChangesAsync();

            return Ok(roomType.ToRoomTypeDto());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoomType(int id)
        {
            var roomType = await _context.RoomTypes.FirstOrDefaultAsync(rt => rt.Id == id);
            if (roomType == null)
            {
                return NotFound();
            }

            _context.RoomTypes.Remove(roomType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("count")]
        public async Task<IActionResult> roomTypeCount()
        {
            var count = await _context.RoomTypes.CountAsync();
            return Ok(new { count });
        }
    }
    
}