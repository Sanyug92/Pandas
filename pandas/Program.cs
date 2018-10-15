using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Text;
using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace pandas
{
	public class Program
	{
		public static void Main(string[] args)
		{
			CreateWebHostBuilder(args).Build().Run();
		}

		public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
			WebHost.CreateDefaultBuilder(args)
				.UseStartup<Startup>();

	}

	//public class ApplicationDbContext : DbContext
	//{
	//	public ApplicationDbContext()
	//		: base("ApplicationServices")
	//	{
	//	}

	//	public DbSet<State> States { get; set; }
	//	public DbSet<City> Cities { get; set; }

	//}
}
