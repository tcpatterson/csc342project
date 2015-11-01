$( "#weHaveAWinner" ).click(function() {
  alert( "Money falling from the sky." );
});

var data = [{"JobTitle":"Programmer I","Count":196},
{"JobTitle":"Civil Engineer","Count":216},
{"JobTitle":"Software Engineer IV","Count":300},
{"JobTitle":"Web Designer III","Count":132},
{"JobTitle":"Human Resources Manager","Count":88},
{"JobTitle":"Help Desk Technician","Count":252}];

$( "#read" ).click(function() {
	$("table").empty();
	$( "table" ).append( "<th>Number of workers in certian job fields</th>" );
	$( "table" ).append( "<tr><td>" + "Job Title" + "</td><td>" + "Count" + "</td></tr>" );
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
	$("#graph").empty();
});

$( "#moveData" ).click(function() {
	$("#graph").empty();
		var index = 0;
		var intervalID = setInterval(function() {
			console.log(index);
			var id = "canvas" + index + "";
			var width = 400/data.length;
			$( "#graph" ).append( "<canvas id=" + id + " width='" + width + "'' height='400'></canvas>" );
			var c=document.getElementById(id);
			var ctx=c.getContext("2d");
			ctx.rect(2,400-data[index].Count,width - 3,data[index].Count);
			ctx.stroke();
			index++;
			if(index == data.length) {
				clearInterval(intervalID);
			}
		}, 500);
	// data.forEach( setTimeout(function(element, index, array) {
	// 	var id = "canvas" + index + "";
	// 	var width = 400/array.length;
	// 	$( "#graph" ).append( "<canvas id=" + id + " width='" + width + "'' height='400'></canvas>" );
	// 	var c=document.getElementById(id);
	// 	var ctx=c.getContext("2d");
	// 	ctx.rect(2,400-element.Count,width - 3,element.Count);
	// 	ctx.stroke();
	// }, 500));
});


