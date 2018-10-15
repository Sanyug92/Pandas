using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using pandas.Models;


namespace pandas.Controllers
{
	[Route("api/[controller]")]
	public class Search : Controller
	{
		OrgsDataAccess db = new OrgsDataAccess();

		[HttpGet("[action]")]
		public IEnumerable<States> GetStates()
		{
			return db.GetallStates();
		}

	}
}
