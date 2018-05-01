using GolfCardBackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace GolfCardBackEnd.Data
{
    public class GolfCardDbContext : DbContext
    {
        public GolfCardDbContext(DbContextOptions<GolfCardDbContext> options) : base (options)
        {

        }

        public DbSet<GolfRound> GolfRounds { get; set; }
        public DbSet<Player> Players { get; set; }
    }
}
