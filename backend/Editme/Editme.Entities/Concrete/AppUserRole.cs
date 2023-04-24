using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Editme.Entities.Concrete
{
    public class AppUserRole : ITable
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int AppRoleId { get; set; }
        public AppRole AppRole { get; set; }
    }
}
