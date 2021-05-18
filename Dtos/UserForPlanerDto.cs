using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BST_Projekt.Dtos
{
    public class UserForPlanerDto
    {
        public int Id { get; set; }
        public string Username { get; set; }      
        public DateTime LastActive { get; set; }    
        public string City { get; set; }
        public string PhotoUrl{ get; set; }

    }
}
