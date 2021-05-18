using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BST_Projekt.Models
{
    public class Like
    {
        public int LikerId { get; set; }
        public int LikeeId { get; set; }
        public User Liker { get; set; }
        public User Likee { get; set; }
        public bool LikerDeleted { get; set; }
        public bool LikeeDeleted { get; set; }
    }
}
