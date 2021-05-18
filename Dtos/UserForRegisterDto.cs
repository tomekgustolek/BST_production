using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BST_Projekt.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(12, MinimumLength = 6, ErrorMessage = "You must specify password between 6 and 12 characters")]
        public string Password { get; set; }
        [Required]
        public string City { get; set; }
        public DateTime LastActive { get; set; }
        public UserForRegisterDto()
        {
            LastActive = DateTime.Now;
        }
    }
}
