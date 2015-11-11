$( "#weHaveAWinner" ).click(function() {
  alert( "Money falling from the sky." );
});

var data = [{"JobTitle":"Programmer I","Count":196},
{"JobTitle":"Civil Engineer","Count":216},
{"JobTitle":"Software Engineer IV","Count":400},
{"JobTitle":"Web Designer III","Count":132},
{"JobTitle":"Human Resources Manager","Count":88},
{"JobTitle":"Help Desk Technician","Count":252}];

$( "#read" ).click(function() {
	$("table").empty();
	$( "table" ).append( "<th>Number of workers in certian job fields</th>" );
	$( "table" ).append( "<tr><td>" + "<u>Job Title</u>" + "</td><td>" + "<u>Count</u>" + "</td></tr>" );
  data.forEach( function(element, index, array) {
		//if(index == 1){alert(element.JobTitle)};
		if(index <= 17){
			var string = "<tr><td>" + element.JobTitle + "</td><td>" + element.Count + "</td></tr>";
			$( "table" ).append(string);
		};
	});
});

$( "#clear" ).click(function() {
	$("table").empty();
	$("#graph").empty();
});

// Enter data for x-axis of bar graph
var data2 = [{"JobTitle2":"Prog I"},
             {"JobTitle2":"CE"},
             {"JobTitle2":"SE IV"},
             {"JobTitle2":"WD III"},
             {"JobTitle2":"HRM"},
             {"JobTitle2":"HDT"}];

$( "#moveData" ).click(function() {
	$("#graph").empty();
		var index = 0;
        var max = data[0].Count;
        for (var i = 0; i < data2.length; i++){
          if (data[i].Count > max) max = data[i].Count;
        }
        $( "#graph" ).append( "<canvas id=xaxis width='20' height='400'></canvas>" );
		//start
        var c=document.getElementById("xaxis");
		var ctx=c.getContext("2d");
        ctx.textAlign = "center";   
        ctx.font= 'bold 10px Arial';
        var piece = max / 5;
        for (var q = 0; q < 6; q++){
            ctx.fillText("" + q*piece, 10, (325*(5 - q)/5) + 25);
        }
        
        ctx.textAlign="center";
		ctx.stroke();
        //end
		var intervalID = setInterval(function() {
			console.log(index);
			var id = "canvas" + index + "";
			var width = 380/data.length;
			$( "#graph" ).append( "<canvas id=" + id + " width='" + width + "'' height='400'></canvas>" );
			var c=document.getElementById(id);
			var ctx=c.getContext("2d");
            ctx.rect(2,400-(data[index].Count/max*375),width - 3,(data[index].Count/max*375) - 50);
			//ctx.strokeText(data2[index].JobTitle2, 400/(2*data2.length), 375);
            ctx.textAlign = "center";   
            ctx.font= 'bold 15px Arial';
            ctx.fillText(data2[index].JobTitle2, 400/(2*data2.length), 375); 
            ctx.textAlign="center";
			ctx.stroke();
			index++;
			if(index == data.length) {
				clearInterval(intervalID);
			}
		}, 500);
        // Start inserting x-axis data
        data2.forEach( function(element, index, array) {
		//if(index == 1){alert(element.JobTitle)};
		if(index <= 17){
			var string = "<tr><td>" + element.JobTitle + "</td><td>" + element.Count + "</td></tr>";
			$( "graph" ).append(string);
		}
	});
});
