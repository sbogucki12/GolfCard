using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GolfCardBackEnd.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string PlayerName { get; set; }

        public ICollection<Player> Players { get; set; }
    }
}
