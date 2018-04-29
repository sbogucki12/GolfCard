using System.Data.Entity;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Owin;

namespace GolfCard.Models
{
    public class GolfCardDbContext : IdentityDbContext<User>
    {
        public DbSet<GolfRound> GolfRounds { get; set; }
    }
}