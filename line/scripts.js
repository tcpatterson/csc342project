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
			var string = "<tr><td>" + element.JobTitle + "</td><td class='barCount'>" + element.Count + "</td></tr>";
			$( "table" ).append(string);

		}
	});
});

$( "#clear" ).click(function() {
	$("table").empty();
	$("#graph").empty();
  	$("#ghost").empty();
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
  var scale = 400/max;
  $( "#graph" ).append( "<div id='yaxis' style='width: 20px; height: 400px'></div>" );
  var piece = max / 5;
  for (var q = 5; q >= 0; q--){
    $("#yaxis").append("<div id='y' style='width: 20px; height: 80px'>" + q*piece + "</div>");
  }
  var width;
  var intervalID2 = setInterval(function() {
    width = ((400 - 20)/data2.length) - 2;
    var height = data[index].Count * scale;
    var top = 400 - height;
    $( "#ghost" ).append( "<div class='lines' style='width: 2 px; margin-top: -180px;  background-color:#BDBDBD; border:1px solid black'></div>" );  
   
    $( "#graph" ).append( "<div class='bar' style='width:"+width+"px; margin-top:"+top+"px; background-color:#BDBDBD; border:1px solid black'>" + data2[index].JobTitle2 + "</div>" );
    $(".bar:nth-child("+(index+2)+")").animate({ height: "" + height + "px"}, 800);
     $("tr:nth-child("+(index+2)+") .barCount").css('font-weight', 'bold');
    
     $("tr:nth-child("+(index+1)+") .barCount").css('font-weight', '');
    if(index >= data.length) {
        console.log("exiting loop");
       
		clearInterval(intervalID2);
	}
    index++;
  }, 800);
});
