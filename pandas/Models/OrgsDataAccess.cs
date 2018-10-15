using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pandas.Models
{
	public class OrgsDataAccess
	{

		masterContext db = new masterContext();

		public IEnumerable<States> GetallStates()
		{
			try
			{
				return db.States.ToList();
			}
			catch
			{
				throw;
			}
		}

		public IEnumerable<CitiesExtended> GetCities()
		{
			try
			{
				return db.CitiesExtended.ToList();
			}
			catch
			{
				throw;
			}
		}
	}
}
