namespace GolfCard.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class createdGolfRoundUserRelationship : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.GolfRounds", "UserId", c => c.Int(nullable: false));
            AddColumn("dbo.GolfRounds", "User_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.GolfRounds", "User_Id");
            AddForeignKey("dbo.GolfRounds", "User_Id", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.GolfRounds", "User_Id", "dbo.AspNetUsers");
            DropIndex("dbo.GolfRounds", new[] { "User_Id" });
            DropColumn("dbo.GolfRounds", "User_Id");
            DropColumn("dbo.GolfRounds", "UserId");
        }
    }
}
