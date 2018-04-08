using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GolfCard.Interfaces
{
    public interface IGolfRound
    {
        int Id { get; set; }
        string GolferName { get; set; }
        string CourseName { get; set; }
        int HolePar { get; set; }
        int HoleScore { get; set; }
        int RoundPar { get; set; }
        int RoundScore { get; set; }
        int RoundCalculatedScore { get; set; }

        decimal GetRoundTotal();
        decimal CalculateRoundScore();        
    }
}
