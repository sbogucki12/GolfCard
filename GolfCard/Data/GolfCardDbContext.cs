using GolfCard.Models;
using GolfCard.Models.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace GolfCard.Data
{
    public class GolfCardDbContext : DbContext
    {

        public DbSet<GolfRound> GolfRounds { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }



        public GolfCardDbContext()
           : base("DefaultConnection")
        {

        }

        public static GolfCardDbContext Create()
        {
            return new GolfCardDbContext();
        }
    }
}
