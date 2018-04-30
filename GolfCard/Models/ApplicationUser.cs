using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GolfCard.Models.Domain;
using Microsoft.AspNetCore.Identity;

namespace GolfCard.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public ICollection<GolfRound> GolfRounds { get; set; }
    }
}
