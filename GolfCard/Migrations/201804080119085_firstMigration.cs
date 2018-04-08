namespace GolfCard.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class firstMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.GolfRounds",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        GolferName = c.String(maxLength: 125),
                        CourseName = c.String(maxLength: 125),
                        HolePar = c.Int(),
                        HoleScore = c.Int(),
                        RoundPar = c.Int(),
                        RoundScore = c.Int(),
                        RoundCalculatedScore = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.GolfRounds");
        }
    }
}
