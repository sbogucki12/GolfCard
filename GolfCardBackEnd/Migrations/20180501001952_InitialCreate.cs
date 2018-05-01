using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GolfCardBackEnd.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Players",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PlayerId = table.Column<int>(nullable: true),
                    PlayerName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Players", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Players_Players_PlayerId",
                        column: x => x.PlayerId,
                        principalTable: "Players",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "GolfRounds",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CourseName = table.Column<string>(nullable: true),
                    Hole10Par = table.Column<int>(nullable: false),
                    Hole10Score = table.Column<int>(nullable: false),
                    Hole11Par = table.Column<int>(nullable: false),
                    Hole11Score = table.Column<int>(nullable: false),
                    Hole12Par = table.Column<int>(nullable: false),
                    Hole12Score = table.Column<int>(nullable: false),
                    Hole13Par = table.Column<int>(nullable: false),
                    Hole13Score = table.Column<int>(nullable: false),
                    Hole14Par = table.Column<int>(nullable: false),
                    Hole14Score = table.Column<int>(nullable: false),
                    Hole15Par = table.Column<int>(nullable: false),
                    Hole15Score = table.Column<int>(nullable: false),
                    Hole16Par = table.Column<int>(nullable: false),
                    Hole16Score = table.Column<int>(nullable: false),
                    Hole17Par = table.Column<int>(nullable: false),
                    Hole17Score = table.Column<int>(nullable: false),
                    Hole18Par = table.Column<int>(nullable: false),
                    Hole18Score = table.Column<int>(nullable: false),
                    Hole1Par = table.Column<int>(nullable: false),
                    Hole1Score = table.Column<int>(nullable: false),
                    Hole2Par = table.Column<int>(nullable: false),
                    Hole2Score = table.Column<int>(nullable: false),
                    Hole3Par = table.Column<int>(nullable: false),
                    Hole3Score = table.Column<int>(nullable: false),
                    Hole4Par = table.Column<int>(nullable: false),
                    Hole4Score = table.Column<int>(nullable: false),
                    Hole5Par = table.Column<int>(nullable: false),
                    Hole5Score = table.Column<int>(nullable: false),
                    Hole6Par = table.Column<int>(nullable: false),
                    Hole6Score = table.Column<int>(nullable: false),
                    Hole7Par = table.Column<int>(nullable: false),
                    Hole7Score = table.Column<int>(nullable: false),
                    Hole8Par = table.Column<int>(nullable: false),
                    Hole8Score = table.Column<int>(nullable: false),
                    Hole9Par = table.Column<int>(nullable: false),
                    Hole9Score = table.Column<int>(nullable: false),
                    PlayerId = table.Column<int>(nullable: false),
                    PlayerName = table.Column<string>(nullable: true),
                    RoundName = table.Column<string>(nullable: true),
                    RoundTotalPar = table.Column<int>(nullable: false),
                    RoundTotalScore = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GolfRounds", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GolfRounds_Players_PlayerId",
                        column: x => x.PlayerId,
                        principalTable: "Players",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GolfRounds_PlayerId",
                table: "GolfRounds",
                column: "PlayerId");

            migrationBuilder.CreateIndex(
                name: "IX_Players_PlayerId",
                table: "Players",
                column: "PlayerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GolfRounds");

            migrationBuilder.DropTable(
                name: "Players");
        }
    }
}
