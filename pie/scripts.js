$( "#weHaveAWinner" ).click(function() {
  alert( "Money falling from the sky." );
});

var data = [{"Key":"Monday","Value":12},
{"Key":"Tuesday","Value":6},
{"Key":"Wednesday","Value":8},
{"Key":"Thursday","Value":9},
{"Key":"Friday","Value":6},
{"Key":"Saturday","Value":11},
{"Key":"Sunday","Value":9}];

$( "#read" ).click(function() {
	$("table").empty();
	$( "table" ).append( "<th>Number of inches of rain per day</th>" );
	$( "table" ).append( "<tr><td>" + "<u>Day</u>" + "</td><td>" + "<u>Inches</u>" + "</td></tr>" );
  data.forEach( function(element, index, array) {
		//if(index == 1){alert(element.Key)};
		if(index <= 17){
			var string = "<tr><td>" + element.Key + "</td><td class='barCount'>" + element.Value + "</td></tr>";
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
