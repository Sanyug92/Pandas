using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace pandas.Models
{
	public class ApplicationDbContext : DbContext
	{

	public class State
	{
		[Key]
		public int StateID { get; set; }
		public string StateName { get; set; }
        public string Abbr { get; set; }

	    public virtual List<City> Cities { get; set; }
	}

	public class City
	{
		public int CityId { get; set; }
		public string CityName { get; set; }

		public int StateId { get; set; }
		public virtual State State { get; set; }

	}

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)

				: base(options)

		{ }

		public DbSet<State> States { get; set; }
		public DbSet<City> Cities { get; set; }
	}
}
