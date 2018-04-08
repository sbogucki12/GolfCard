namespace GolfCard.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedRoundNameToModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.GolfRounds", "RoundName", c => c.String(maxLength: 225));
        }
        
        public override void Down()
        {
            DropColumn("dbo.GolfRounds", "RoundName");
        }
    }
}
