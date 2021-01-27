using DallinFirstASPWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DallinFirstASPWebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("CalculateGrade")]
        public IActionResult calculateGrade()
        {
            return View();
        }

        [HttpPost("CalculateGrade")]
        public IActionResult calculateGrade(Grade model)
        {
            return View();
        }
    }
}
