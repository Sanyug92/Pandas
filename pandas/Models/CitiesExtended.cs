using System;
using System.Collections.Generic;

namespace pandas.Models
{
    public partial class CitiesExtended
    {
        public string City { get; set; }
        public string StateId { get; set; }
        public short? Zip { get; set; }
        public decimal? Latitude { get; set; }
        public string Longitude { get; set; }
        public string County { get; set; }

        public States State { get; set; }
    }
}
