$( "#weHaveAWinner" ).click(function() {
  alert( "Money falling from the sky." );
});

var data = [{"JobTitle":"Programmer I","Count":196},
{"JobTitle":"Civil Engineer","Count":216},
{"JobTitle":"Software Engineer IV","Count":300},
{"JobTitle":"Web Designer III","Count":132},
{"JobTitle":"Human Resources Manager","Count":88},
{"JobTitle":"Help Desk Technician","Count":252},
{"JobTitle":"Database Administrator III","Count":181},
{"JobTitle":"Statistician I","Count":212},
{"JobTitle":"Speech Pathologist","Count":265},
{"JobTitle":"Developer IV","Count":201},
{"JobTitle":"Marketing Assistant","Count":48},
{"JobTitle":"Human Resources Assistant IV","Count":137},
{"JobTitle":"Research Associate","Count":240},
{"JobTitle":"Accounting Assistant II","Count":250},
{"JobTitle":"Tax Accountant","Count":36},
{"JobTitle":"Clinical Specialist","Count":159},
{"JobTitle":"Health Coach IV","Count":167},
{"JobTitle":"Project Manager","Count":81},
{"JobTitle":"Analog Circuit Design manager","Count":29},
{"JobTitle":"Compensation Analyst","Count":31}];

$( "#read" ).click(function() {
	$("table").empty();
  data.forEach( function(element, index, array) {
		//if(index == 1){alert(element.JobTitle)};
		if(index <= 17){
			var string = "<tr><td>" + element.JobTitle + "</td><td>" + element.Count + "</td></tr>"
			$( "table" ).append(string);
		};
	});
});

$( "#clear" ).click(function() {
	$("table").empty();
});
