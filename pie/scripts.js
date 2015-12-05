$( "#weHaveAWinner" ).click(function() {
  alert( "Money falling from the sky." );
});

var data = [{"JobTitle":"Monday I","Count":12},
{"JobTitle":"Tuesday","Count":6},
{"JobTitle":"Wednesday","Count":8},
{"JobTitle":"Thursday","Count":9},
{"JobTitle":"Friday","Count":6},
{"JobTitle":"Saturday","Count":11},
{"JobTitle":"Sunday","Count":9}];

$( "#read" ).click(function() {
	$("table").empty();
	$( "table" ).append( "<th>Number of inches of rain per day</th>" );
	$( "table" ).append( "<tr><td>" + "<u>Day</u>" + "</td><td>" + "<u>Inches</u>" + "</td></tr>" );
  data.forEach( function(element, index, array) {
		//if(index == 1){alert(element.JobTitle)};
		if(index <= 17){
			var string = "<tr><td>" + element.JobTitle + "</td><td class='barCount'>" + element.Count + "</td></tr>";
			$( "table" ).append(string);

		};
	});
});

$( "#clear" ).click(function() {
	$("table").empty();
	$("#graph").empty();
  clear();
  setup();
});
  
$( "#moveData" ).click(function() {
	loop();
});
