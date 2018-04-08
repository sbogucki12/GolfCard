using GolfCard.Interfaces;
using GolfCard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GolfCard.Api
{
    public class RoundsController : ApiController
    {
        private GolfCardDbContext _context;        

        public RoundsController()
        {
            _context = new GolfCardDbContext();
        }


        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST 
        // Player starts round by submitting par for the course
        // A PUT action (AddHole) will take in hole by hole details
        [HttpPost]
        [Route("api/rounds/startround")]
        public IHttpActionResult StartNewRound([FromBody]GolfRound golfRound)
        {

            GolfRound currentRound = _context.GolfRounds.FirstOrDefault(g => g.RoundName == golfRound.RoundName);

           

            GolfRound submittedGolfRound = new GolfRound
            {
                GolferName = golfRound.GolferName,
                CourseName = golfRound.CourseName,
                RoundPar = golfRound.RoundPar
            };

            _context.GolfRounds.Add(submittedGolfRound);
            _context.SaveChanges();
            return Ok("Info for Hole Submitted"); 

        }

        // PUT 
        // Player starts round by submitting par for the course
        // Another POST action will take in hole by hole details
        [Route("api/rounds/addhole/{")]
        public IHttpActionResult AddHole([FromBody]GolfRound golfRound)
        {
            GolfRound submittedGolfRound = new GolfRound
            {
                GolferName = golfRound.GolferName,
                CourseName = golfRound.CourseName,
                RoundPar = golfRound.RoundPar
            };

            _context.GolfRounds.Add(submittedGolfRound);
            _context.SaveChanges();
            return Ok("Round Initiated");

        }


        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }

        public decimal GetRoundTotal()
        {
            throw new NotImplementedException();
        }

        public decimal CalculateRoundScore()
        {
            throw new NotImplementedException();
        }
    }
}