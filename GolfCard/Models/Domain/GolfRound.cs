using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GolfCard.Models.Domain
{
    public class GolfRound
    {
        public int Id { get; set; }
        public string RoundName { get; set; }
        public string CourseName { get; set; }
        public string RoundId { get; set; }
        public string GolferName { get; set; }

        public int Hole1Par { get; set; }
        public int Hole1Score { get; set; }

        public int Hole2Par { get; set; }
        public int Hole2Score { get; set; }

        public int Hole3Par { get; set; }
        public int Hole3Score { get; set; }

        public int Hole4Par { get; set; }
        public int Hole4Score { get; set; }

        public int Hole5Par { get; set; }
        public int Hole5Score { get; set; }

        public int Hole6Par { get; set; }
        public int Hole6Score { get; set; }

        public int Hole7Par { get; set; }
        public int Hole7Score { get; set; }

        public int Hole8Par { get; set; }
        public int Hole8Score { get; set; }

        public int Hole9Par { get; set; }
        public int Hole9Score { get; set; }

        public int Hole10Par { get; set; }
        public int Hole10Score { get; set; }

        public int Hole11Par { get; set; }
        public int Hole11Score { get; set; }

        public int Hole12Par { get; set; }
        public int Hole12Score { get; set; }

        public int Hole13Par { get; set; }
        public int Hole13Score { get; set; }

        public int Hole14Par { get; set; }
        public int Hole14Score { get; set; }

        public int Hole15Par { get; set; }
        public int Hole15Score { get; set; }

        public int Hole16Par { get; set; }
        public int Hole16Score { get; set; }

        public int Hole17Par { get; set; }
        public int Hole17Score { get; set; }

        public int Hole18Par { get; set; }
        public int Hole18Score { get; set; }

        public int CoursePar { get; set; }
        public int RoundScore { get; set; }

        public int ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }
}
