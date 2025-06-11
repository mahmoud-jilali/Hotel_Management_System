using System;
using API.Data;
using API.DTOs.User;
using API.Models;
using API.Service;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly TokenService _tokenService;
        private readonly SignInManager<User> _signInManager;
        public AuthController(UserManager<User> userManager, TokenService tokenService, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _signInManager = signInManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);
                var user = new User
                {
                    FirstName = registerDto.FirstName,
                    LastName = registerDto.LastName,
                    UserName = registerDto.UserName,
                    PhoneNumber = registerDto.PhoneNumber,
                    Email = registerDto.Email,
                };
                var createdUser = await _userManager.CreateAsync(user, registerDto.Password);

                if (createdUser.Succeeded)
                {
                    var roleResulte = await _userManager.AddToRoleAsync(user, "User");
                    if (roleResulte.Succeeded)
                    {
                        return Ok(
                            new NewUserDto
                            {
                                UserName = user.UserName,
                                Email = user.Email,
                                Token = _tokenService.GenerateToken(user)
                            }
                        );
                    }
                    else
                    {
                        return StatusCode(500, roleResulte.Errors);
                    }
                }
                else
                {
                    return StatusCode(500, createdUser.Errors);
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.UserName == loginDto.UserName.ToLower() ||
                u.Email == loginDto.Email.ToLower());
            if (user == null)
                return Unauthorized("Invalid username or email");

            var resault = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);
            if (!resault.Succeeded)
                return Unauthorized("Invalid username or email or password");

            return Ok(
                new NewUserDto
                { 
                    UserName = user.UserName,
                    Email = user.Email,
                    Token = _tokenService.GenerateToken(user)
                }
            );
        }
    }
}