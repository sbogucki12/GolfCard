using GolfCard.Interfaces;
using GolfCard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GolfCard.Api
{
    public class RoundsController : ApiController
    {
        private GolfCardDbContext _context;        

        public RoundsController()
        {
            _context = new GolfCardDbContext();
        }

        // GET Current Golf Round
        [HttpGet]
        [Route("api/rounds/{roundName}")]
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
        public GolfRound GetCurrentRound(string roundName)
        {
            GolfRound currentRound = _context.GolfRounds.FirstOrDefault(g => g.RoundName == roundName);

            return currentRound; 
        }

        // POST 
        // Player starts round by submitting par for the course
        // A PUT action (AddHole) will take in hole by hole details        
        [Route("api/rounds/startround")]
        public IHttpActionResult StartRound([FromBody]GolfRound golfRound)
        {
            GolfRound submittedGolfRound = new GolfRound
            {
                GolferName = golfRound.GolferName,
                CourseName = golfRound.CourseName,
                RoundName = golfRound.RoundName,
                RoundPar = golfRound.RoundPar
            };

            _context.GolfRounds.Add(submittedGolfRound);
            _context.SaveChanges();
            return Ok("Round Initiated");
        }

        // PUT 
        // Player starts round by submitting par for the course
        // Another POST action will take in hole by hole details
        [HttpPut]
        [Route("api/rounds/addhole")]
        public IHttpActionResult AddHole([FromBody]GolfRound golfRound)
        {

            GolfRound currentRound = _context.GolfRounds.FirstOrDefault(g => g.RoundName == golfRound.RoundName);

            currentRound.Hole1Par = golfRound.Hole1Par;
            currentRound.Hole1Score = golfRound.Hole1Score;
            currentRound.Hole2Par = golfRound.Hole2Par;
            currentRound.Hole2Score = golfRound.Hole2Score;
            currentRound.Hole3Par = golfRound.Hole3Par;
            currentRound.Hole3Score = golfRound.Hole3Score;
            currentRound.Hole4Par = golfRound.Hole4Par;
            currentRound.Hole4Score = golfRound.Hole4Score;
            currentRound.Hole5Par = golfRound.Hole5Par;
            currentRound.Hole5Score = golfRound.Hole5Score;
            currentRound.Hole6Par = golfRound.Hole6Par;
            currentRound.Hole6Score = golfRound.Hole6Score;
            currentRound.Hole7Par = golfRound.Hole7Par;
            currentRound.Hole7Score = golfRound.Hole7Score;
            currentRound.Hole8Par = golfRound.Hole8Par;
            currentRound.Hole8Score = golfRound.Hole8Score;
            currentRound.Hole9Par = golfRound.Hole9Par;
            currentRound.Hole9Score = golfRound.Hole9Score;
            currentRound.Hole10Par = golfRound.Hole10Par;
            currentRound.Hole10Score = golfRound.Hole10Score;
            currentRound.Hole11Par = golfRound.Hole11Par;
            currentRound.Hole11Score = golfRound.Hole11Score;
            currentRound.Hole12Par = golfRound.Hole12Par;
            currentRound.Hole12Score = golfRound.Hole12Score;
            currentRound.Hole13Par = golfRound.Hole13Par;
            currentRound.Hole13Score = golfRound.Hole13Score;
            currentRound.Hole14Par = golfRound.Hole14Par;
            currentRound.Hole14Score = golfRound.Hole14Score;
            currentRound.Hole15Par = golfRound.Hole15Par;
            currentRound.Hole15Score = golfRound.Hole15Score;
            currentRound.Hole16Par = golfRound.Hole16Par;
            currentRound.Hole16Score = golfRound.Hole16Score;
            currentRound.Hole17Par = golfRound.Hole17Par;
            currentRound.Hole17Score = golfRound.Hole17Score;
            currentRound.Hole18Par = golfRound.Hole18Par;
            currentRound.Hole18Score = golfRound.Hole18Score;

            _context.SaveChanges();
            return Ok("Info for Hole Submitted"); 
        }
        
    }
}