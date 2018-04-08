namespace GolfCard.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedHolesToModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.GolfRounds", "Hole1Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole1Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole2Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole2Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole3Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole3Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole4Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole4Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole5Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole5Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole6Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole6Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole7Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole7Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole8Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole8Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole9Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole9Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole10Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole10Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole11Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole11Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole12Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole12Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole13Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole13Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole14Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole14Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole15Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole15Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole16Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole16Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole17Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole17Score", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole18Par", c => c.Int());
            AddColumn("dbo.GolfRounds", "Hole18Score", c => c.Int());
        }
        
        public override void Down()
        {
            DropColumn("dbo.GolfRounds", "Hole18Score");
            DropColumn("dbo.GolfRounds", "Hole18Par");
            DropColumn("dbo.GolfRounds", "Hole17Score");
            DropColumn("dbo.GolfRounds", "Hole17Par");
            DropColumn("dbo.GolfRounds", "Hole16Score");
            DropColumn("dbo.GolfRounds", "Hole16Par");
            DropColumn("dbo.GolfRounds", "Hole15Score");
            DropColumn("dbo.GolfRounds", "Hole15Par");
            DropColumn("dbo.GolfRounds", "Hole14Score");
            DropColumn("dbo.GolfRounds", "Hole14Par");
            DropColumn("dbo.GolfRounds", "Hole13Score");
            DropColumn("dbo.GolfRounds", "Hole13Par");
            DropColumn("dbo.GolfRounds", "Hole12Score");
            DropColumn("dbo.GolfRounds", "Hole12Par");
            DropColumn("dbo.GolfRounds", "Hole11Score");
            DropColumn("dbo.GolfRounds", "Hole11Par");
            DropColumn("dbo.GolfRounds", "Hole10Score");
            DropColumn("dbo.GolfRounds", "Hole10Par");
            DropColumn("dbo.GolfRounds", "Hole9Score");
            DropColumn("dbo.GolfRounds", "Hole9Par");
            DropColumn("dbo.GolfRounds", "Hole8Score");
            DropColumn("dbo.GolfRounds", "Hole8Par");
            DropColumn("dbo.GolfRounds", "Hole7Score");
            DropColumn("dbo.GolfRounds", "Hole7Par");
            DropColumn("dbo.GolfRounds", "Hole6Score");
            DropColumn("dbo.GolfRounds", "Hole6Par");
            DropColumn("dbo.GolfRounds", "Hole5Score");
            DropColumn("dbo.GolfRounds", "Hole5Par");
            DropColumn("dbo.GolfRounds", "Hole4Score");
            DropColumn("dbo.GolfRounds", "Hole4Par");
            DropColumn("dbo.GolfRounds", "Hole3Score");
            DropColumn("dbo.GolfRounds", "Hole3Par");
            DropColumn("dbo.GolfRounds", "Hole2Score");
            DropColumn("dbo.GolfRounds", "Hole2Par");
            DropColumn("dbo.GolfRounds", "Hole1Score");
            DropColumn("dbo.GolfRounds", "Hole1Par");
        }
    }
}
