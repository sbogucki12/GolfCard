using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GolfCard.Models
{
    public class GolfRound
    {
        public int Id { get; set; }
        
        [MaxLength(125)]
        public string GolferName { get; set; }

        [MaxLength(125)]
        public string CourseName { get; set; }

        [MaxLength(225)]
        public string RoundName { get; set; }

        [Range(0, 10)]
        public int? HolePar { get; set; }

        [Range(0, 50)]
        public int? HoleScore { get; set; }

        [Range(0, 100)]
        public int? RoundPar { get; set; }

        [Range(0, 300)]
        public int? RoundScore { get; set; }

        [Range(0, 20)]
        public int? Hole1Par { get; set; }

        [Range(0, 20)]
        public int? Hole1Score { get; set; }

        [Range(0, 20)]
        public int? Hole2Par { get; set; }

        [Range(0, 20)]
        public int? Hole2Score { get; set; }

        [Range(0, 20)]
        public int? Hole3Par { get; set; }

        [Range(0, 20)]
        public int? Hole3Score { get; set; }

        [Range(0, 20)]
        public int? Hole4Par { get; set; }

        [Range(0, 20)]
        public int? Hole4Score { get; set; }

        [Range(0, 20)]
        public int? Hole5Par { get; set; }

        [Range(0, 20)]
        public int? Hole5Score { get; set; }

        [Range(0, 20)]
        public int? Hole6Par { get; set; }

        [Range(0, 20)]
        public int? Hole6Score { get; set; }

        [Range(0, 20)]
        public int? Hole7Par { get; set; }

        [Range(0, 20)]
        public int? Hole7Score { get; set; }

        [Range(0, 20)]
        public int? Hole8Par { get; set; }

        [Range(0, 20)]
        public int? Hole8Score { get; set; }

        [Range(0, 20)]
        public int? Hole9Par { get; set; }

        [Range(0, 20)]
        public int? Hole9Score { get; set; }

        [Range(0, 20)]
        public int? Hole10Par { get; set; }

        [Range(0, 20)]
        public int? Hole10Score { get; set; }

        [Range(0, 20)]
        public int? Hole11Par { get; set; }

        [Range(0, 20)]
        public int? Hole11Score { get; set; }

        [Range(0, 20)]
        public int? Hole12Par { get; set; }

        [Range(0, 20)]
        public int? Hole12Score { get; set; }

        [Range(0, 20)]
        public int? Hole13Par { get; set; }

        [Range(0, 20)]
        public int? Hole13Score { get; set; }

        [Range(0, 20)]
        public int? Hole14Par { get; set; }

        [Range(0, 20)]
        public int? Hole14Score { get; set; }

        [Range(0, 20)]
        public int? Hole15Par { get; set; }

        [Range(0, 20)]
        public int? Hole15Score { get; set; }

        [Range(0, 20)]
        public int? Hole16Par { get; set; }

        [Range(0, 20)]
        public int? Hole16Score { get; set; }

        [Range(0, 20)]
        public int? Hole17Par { get; set; }

        [Range(0, 20)]
        public int? Hole17Score { get; set; }

        [Range(0, 20)]
        public int? Hole18Par { get; set; }

        [Range(0, 20)]
        public int? Hole18Score { get; set; }

        [Range(0, 300)]
        public int? RoundCalculatedScore { get; set; }

        //Foreign key for User
        public int UserId { get; set; }
        public User User { get; set; }
    }
}