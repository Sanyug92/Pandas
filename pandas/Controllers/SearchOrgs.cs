using Microsoft.AspNetCore.Mvc;
using pandas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pandas.Controllers
{
	[Route("api/[controller]")]
	public class SearchOrgs : Controller
	{
		OrgsDataAccess db = new OrgsDataAccess();

		[HttpGet]
		[Route("api/states")]
		public IEnumerable<States> Index()
		{
			var isTheDataHere = db.GetallStates();
			return db.GetallStates();
		}

		//[HttpPost]
		//[Route("api/Employee/Create")]
		//public int Create(TblEmployee employee)
		//{
		//	return objemployee.AddEmployee(employee);
		//}
	}
}
