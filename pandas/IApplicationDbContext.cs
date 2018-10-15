using System.Data.Entity;
using static pandas.Models.ApplicationDbContext;

namespace pandas
{
	public interface IApplicationDbContext
	{
		DbSet<City> Cities { get; set; }
		DbSet<State> States { get; set; }
	}
}