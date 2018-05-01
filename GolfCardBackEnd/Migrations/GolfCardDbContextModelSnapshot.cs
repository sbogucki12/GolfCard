﻿// <auto-generated />
using GolfCardBackEnd.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace GolfCardBackEnd.Migrations
{
    [DbContext(typeof(GolfCardDbContext))]
    partial class GolfCardDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("GolfCardBackEnd.Models.GolfRound", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CourseName");

                    b.Property<int>("Hole10Par");

                    b.Property<int>("Hole10Score");

                    b.Property<int>("Hole11Par");

                    b.Property<int>("Hole11Score");

                    b.Property<int>("Hole12Par");

                    b.Property<int>("Hole12Score");

                    b.Property<int>("Hole13Par");

                    b.Property<int>("Hole13Score");

                    b.Property<int>("Hole14Par");

                    b.Property<int>("Hole14Score");

                    b.Property<int>("Hole15Par");

                    b.Property<int>("Hole15Score");

                    b.Property<int>("Hole16Par");

                    b.Property<int>("Hole16Score");

                    b.Property<int>("Hole17Par");

                    b.Property<int>("Hole17Score");

                    b.Property<int>("Hole18Par");

                    b.Property<int>("Hole18Score");

                    b.Property<int>("Hole1Par");

                    b.Property<int>("Hole1Score");

                    b.Property<int>("Hole2Par");

                    b.Property<int>("Hole2Score");

                    b.Property<int>("Hole3Par");

                    b.Property<int>("Hole3Score");

                    b.Property<int>("Hole4Par");

                    b.Property<int>("Hole4Score");

                    b.Property<int>("Hole5Par");

                    b.Property<int>("Hole5Score");

                    b.Property<int>("Hole6Par");

                    b.Property<int>("Hole6Score");

                    b.Property<int>("Hole7Par");

                    b.Property<int>("Hole7Score");

                    b.Property<int>("Hole8Par");

                    b.Property<int>("Hole8Score");

                    b.Property<int>("Hole9Par");

                    b.Property<int>("Hole9Score");

                    b.Property<int>("PlayerId");

                    b.Property<string>("PlayerName");

                    b.Property<string>("RoundName");

                    b.Property<int>("RoundTotalPar");

                    b.Property<int>("RoundTotalScore");

                    b.HasKey("Id");

                    b.HasIndex("PlayerId");

                    b.ToTable("GolfRounds");
                });

            modelBuilder.Entity("GolfCardBackEnd.Models.Player", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("PlayerId");

                    b.Property<string>("PlayerName");

                    b.HasKey("Id");

                    b.HasIndex("PlayerId");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("GolfCardBackEnd.Models.GolfRound", b =>
                {
                    b.HasOne("GolfCardBackEnd.Models.Player", "Player")
                        .WithMany()
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GolfCardBackEnd.Models.Player", b =>
                {
                    b.HasOne("GolfCardBackEnd.Models.Player")
                        .WithMany("Players")
                        .HasForeignKey("PlayerId");
                });
#pragma warning restore 612, 618
        }
    }
}