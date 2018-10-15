using System;
using System.Collections.Generic;

namespace pandas.Models
{
    public partial class States
    {
        public States()
        {
            CitiesExtended = new HashSet<CitiesExtended>();
        }

        public string StateId { get; set; }
        public string StateName { get; set; }

        public ICollection<CitiesExtended> CitiesExtended { get; set; }
    }
}
