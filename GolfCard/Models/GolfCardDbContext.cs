using System.Data.Entity;

namespace GolfCard.Models
{
    public class GolfCardDbContext : DbContext
    {
        public DbSet<GolfRound> GolfRounds { get; set; }
    }
}