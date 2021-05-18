
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;


namespace BST_Projekt.Models
{
    public class User : IdentityUser<int>
    {

        public DateTime LastActive { get; set; }
        public string Introduction { get; set; }
        public string City { get; set; }
        public virtual ICollection<Photo> Photos { get; set; }
        public virtual ICollection<Like> Likers { get; set; }
        public virtual ICollection<Like> Likees { get; set; }
        public virtual ICollection<Message> MessagesSent { get; set; }
        public virtual ICollection<Message> MessagesReceived { get; set; }
        public virtual ICollection<UserRole> UserRoles { get; set; }


    }
}
