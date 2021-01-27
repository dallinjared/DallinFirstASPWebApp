//add submit listener

$('#submitButton').click(function () {
	//store variables
	var assignments = parseFloat($("#assignments").val());
	var groupProjects = parseFloat($("#groupProjects").val());
	var quizzes = parseFloat($("#quizzes").val());
	var exams = parseFloat($("#exams").val());
	var intex = parseFloat($("#intex").val());

	// calculate the weight of overall grade
	var assignmentPointWeight = assignments * .5;
	var groupProjectPointWeight = groupProjects * .1;
	var quizzesPointWeight = quizzes * .1;
	var examsPointWeight = exams * .2;
	var intextPointWeight = intex * .1;

	//calcluate final grade

	var finalGrade = parseFloat(assignmentPointWeight + groupProjectPointWeight + quizzesPointWeight + examsPointWeight + intextPointWeight);
	finalGrade = finalGrade.toFixed(1);
	
	// Select letter grade!

	if (finalGrade >= 93) {
		letterGrade = "A";
	}
	else if (93 > finalGrade && finalGrade >= 90) {
		letterGrade = "A-";
	}
	else if (90 > finalGrade && finalGrade >= 87) {
		letterGrade = "B+";
	}
	else if (87 > finalGrade && finalGrade >= 83) {
		letterGrade = "B";
	}
	else if (83 > finalGrade && finalGrade >= 80) {
		letterGrade = "B-";
	}
	else if (80 > finalGrade && finalGrade >= 77) {
		letterGrade = "C+";
	}
	else if (77 > finalGrade && finalGrade >= 73) {
		letterGrade = "C";
	}
	else if (73 > finalGrade && finalGrade >= 70) {
		letterGrade = "C-";
	}
	else if (70 > finalGrade && finalGrade >= 67) {
		letterGrade = "D+";
	}
	else if (67 > finalGrade && finalGrade >= 63) {
		letterGrade = "D";
	}
	else if (63 > finalGrade && finalGrade >= 60) {
		letterGrade = "D-";
	}
	else {
		letterGrade = "E";
	}
	$('#letter').innerHTML = letterGrade;
	$('#percent').innerHTML = finalGrade + '%';
	alert(finalGrade + '%, ' + letterGrade)
});