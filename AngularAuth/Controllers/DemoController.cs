using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAuth.Controllers
{
    [Authorize]
    [Route("demo")]
    [ApiController]
    public class DemoController : ControllerBase
    {
        [HttpGet]
        public Object test()
        {
            return new { name = "Fred", id = 10 };
        }
    }
}
