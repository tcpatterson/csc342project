$( "#weHaveAWinner" ).click(function() {
  alert( "Money falling from the sky." );
});

var data = [{"Key":"Programmer I","Value":196},
{"Key":"Civil Engineer","Value":216},
{"Key":"Software Engineer IV","Value":400},
{"Key":"Web Designer III","Value":132},
{"Key":"Human Resources Manager","Value":88},
{"Key":"Help Desk Technician","Value":252}];

$( "#read" ).click(function() {
	$("table").empty();
	$( "table" ).append( "<th>Number of workers in certian job fields</th>" );
	$( "table" ).append( "<tr><td>" + "<u>Job Title</u>" + "</td><td>" + "<u>Value</u>" + "</td></tr>" );
  data.forEach( function(element, index, array) {
		//if(index == 1){alert(element.Key)};
		if(index <= 17){
			var string = "<tr><td>" + element.Key + "</td><td class='barValue'>" + element.Value + "</td></tr>";
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
var data2 = [{"Key2":"Prog I"},
             {"Key2":"CE"},
             {"Key2":"SE IV"},
             {"Key2":"WD III"},
             {"Key2":"HRM"},
             {"Key2":"HDT"}];
$( "#moveData" ).click(function() {
  $("#graph").empty();
  var index = 0;
  var max = data[0].Value;
  for (var i = 0; i < data2.length; i++){
    if (data[i].Value > max) max = data[i].Value;
  }
  var scale = 400/max;
  $( "#graph" ).append( "<div id='yaxis' style='width: 20px; height: 400px'></div>" );
  var piece = max / 5;
  for (var q = 5; q >= 0; q--){
    $("#yaxis").append("<div id='y' style='width: 20px; height: 80px'>" + q*piece + "</div>");
  }
  var width;
  var intervalID2 = setInterval(function() {
    width = ((parseInt($("#graph").css("width"), 10) - 20)/data2.length) - 2;
    var height = data[index].Value * scale;
    var top = 400 - height;
    $( "#ghost" ).append( "<div class='lines' style='width: 2 px; margin-top: -180px;  background-color:#BDBDBD; border:1px solid black'></div>" );  
   
    $( "#graph" ).append( "<div class='bar' style='width:"+width+"px; margin-top:"+top+"px; background-color:#BDBDBD; border:1px solid black'>" + data2[index].Key2 + "</div>" );
    $(".bar:nth-child("+(index+2)+")").animate({ height: "" + height + "px"}, 800);
     $("tr:nth-child("+(index+2)+") .barValue").css('font-weight', 'bold');
    
     $("tr:nth-child("+(index+1)+") .barValue").css('font-weight', '');
    if(index >= data.length) {
        console.log("exiting loop");
       
		clearInterval(intervalID2);
	}
    index++;
  }, 800);
});

$("#changeWidth").click(function() {
  var newWidth = parseInt($("#width").val(), 10);
  console.log($("#width").val());
  if (newWidth > 10 && newWidth < 10000) {
    var changeBar =  {'width' : (((newWidth - 20)/data.length) - 2)};
    var changeGraph =  {'width' : newWidth};
    var changeCharts =  {'width' : (newWidth + 460)};
    $(".bar").animate(changeBar, 1000, function(){});
    $("#graph").animate(changeGraph, 1000, function(){});
    $(".charts").animate(changeCharts, 1000, function(){});
    //.delay(2000).css("width", (newWidth + 460) + "px");
  }
});
