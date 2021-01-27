using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DallinFirstASPWebApp.Models
{
    public class Grade
    {
        [Required]
        [Range(1, 100)]
        public float assignments { set; get; }
        [Range(1, 100)]
        public float groupProjects { set; get; }
        [Range(1, 100)]
        public float quizzes { set; get; }
        [Range(1, 100)]
        public float exams { set; get; }
        [Range(1, 100)]
        public float intex { set; get; }

    }
}
