$( "#weHaveAWinner" ).click(function() {
  alert( "Money falling from the sky." );
});

var data = [{"Key":"A's","Value":20},
{"Key":"B's","Value":24},
{"Key":"C's","Value":37},
{"Key":"D's","Value":13},
{"Key":"F's","Value":8}];

$( "#read" ).click(function() {
	$("table").empty();
	$( "table" ).append( "<th>Grade Distribution of Operating Systems</th>" );
	$( "table" ).append( "<tr><td>" + "<u>Day</u>" + "</td><td>" + "<u>Number of Grades</u>" + "</td></tr>" );
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
