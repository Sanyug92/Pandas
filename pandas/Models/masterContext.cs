using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace pandas.Models
{
    public partial class masterContext : DbContext
    {
        public masterContext()
        {
        }

        public masterContext(DbContextOptions<masterContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CitiesExtended> CitiesExtended { get; set; }
        public virtual DbSet<States> States { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=master;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CitiesExtended>(entity =>
            {
                entity.HasKey(e => e.City);

                entity.ToTable("cities_extended");

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(10)
                    .ValueGeneratedNever();

                entity.Property(e => e.County)
                    .HasColumnName("county")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Latitude)
                    .HasColumnName("latitude")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Longitude)
                    .HasColumnName("longitude")
                    .HasMaxLength(10);

                entity.Property(e => e.StateId)
                    .IsRequired()
                    .HasColumnName("StateID")
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.Zip).HasColumnName("zip");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.CitiesExtended)
                    .HasForeignKey(d => d.StateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_cities_extended_States");
            });

            modelBuilder.Entity<States>(entity =>
            {
                entity.HasKey(e => e.StateId);

                entity.Property(e => e.StateId)
                    .HasColumnName("StateID")
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .ValueGeneratedNever();
            });
        }
    }
}
