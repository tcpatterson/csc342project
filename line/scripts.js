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
	var randColor;

    var intervalID2 = setInterval(function() {
        var width = (400/data2.length) - 2;
		var height = data[index].Count;
		var top = 400 - height;

      $( "table" ).append( "<div class='lines' style='width: 2 px; margin-top: -180px;  background-color:#BDBDBD; border:1px solid black'></div>" );  
      
      $(".lines:nth-child("+(index+3)+")").animate({
            left: '421px',
            opacity: '0.5',
            width: width ,
            "margin-top": top - 177,
            height: height
            
        }, 800);
  
      $( "#graph" ).append( "<div class='bar' style='width:"+width+"px; margin-top:"+top+"px; background-color:#BDBDBD; border:1px solid black'></div>" );

       $(".bar:nth-child("+(index+1)+")").animate({ height: "" + height + "px"}, 800);

        if(index == data.length) {
				clearInterval(intervalID2);
			}
      
        index++;
      
      }, 800);
     
		
	});
