$( "#weHaveAWinner" ).click(function() {
  alert( "Money falling from the sky." );
});

var data = [{"JobTitle":"Monday","Count":12},
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
});
  
$( "#moveData" ).click(function() {
	$("#graph").empty();
  var multiplier = 400/12;
  var index = 0;
  var width = parseInt($("#graph").css("width"), 10)/data.length;
  var leftmargin = 2*(width-7)/3;
  var rightmargin = (width -7)/3;
  data.forEach( function(element, index, array) {
    $( "#graph" ).append( "<div class='dots' style='margin-left:"+leftmargin+"px;margin-right:"+rightmargin+"px;width:5px;height:5px;background-color:black;border:1px solid gray; top:394px;'>&nbsp;&nbsp;" + element.JobTitle.substring(0, 2) + "</div>" );
  });
  
  var max = data[0].Count;
  for (var i = 0; i < data.length; i++){
    if (data[i].Count > max) max = data[i].Count;
  }
  var scale = 400/max;
  $( "#graph" ).append( "<div id='yaxis' style='width: 20px; height: 400px'></div>" );
  var piece = max / 5;
  for (var q = 5; q >= 0; q--){
    $("#yaxis").append("<div id='y' style='width: 20px; height: 80px'>" + (q*piece).toFixed(2) + "</div>");
  }
  var intervalID2 = setInterval(function() {
    var top = 400 - (data[index].Count * (multiplier-1));
    $(".dots:nth-child("+(index+1)+")").animate({
      "top": top
    },{duration:1000,
      start: function() {
        console.log('start', index);
        $("tr:nth-child("+(index+2)+") .barCount").css('font-weight', 'bold');
      },
      done: function(){
        console.log('end', index);
        if(index == data.length) {
          drawLines();
        }
        $("tr:nth-child("+(index+0)+") .barCount").css('font-weight', '');
      }
    });
    console.log(index, data.length);
    if(index == data.length-1) {
      console.log("cleared");
			clearInterval(intervalID2);
		}
    index++;
  }, 800);
});

function drawLines(){
  var index2 = 0;
  var width = parseInt($("#graph").css("width"), 10)/data.length;
  var leftmargin = 2*(width-7)/3;
  var rightmargin = (width-7)/3;
  var intervalID3 = setInterval(function() {
    var dotStart = $(".dots:nth-child("+(index2+1)+")");
    var positionStart = dotStart.position();
    var dotEnd = $(".dots:nth-child("+(index2)+")");
    var positionEnd = dotEnd.position();
    console.log(positionStart);
    console.log(positionEnd);
    if(index2 > 0){
      createLine(positionStart.left+leftmargin+2, positionStart.top, positionEnd.left+leftmargin+2, positionEnd.top);
    }
    if(index2 == data.length-1) {
      console.log("cleared");
      clearInterval(intervalID3);
    }
    index2++;
  }, 200);
}

//http://www.monkeyandcrow.com/blog/drawing_lines_with_css3/
function createLine(x1,y1, x2,y2){
  var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
  console.log(length);
  var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  console.log(angle);
  var transform = 'rotate('+angle+'deg)';
  var line = $('<div>')
    .appendTo('#graph')
    .addClass('line')
    .css({
      'position': 'absolute',
      'transform': transform
    })
    .width(length)
    .offset({left: x1, top: y1});
  return line;
}
$("#changeWidth").click(function() {
  var newWidth = parseInt($("#width").val(), 10);
  console.log($("#width").val());
  if (newWidth > 10 && newWidth < 10000) {
    $("#graph").empty();
    $("#graph").css("width", newWidth + "px");
    $(".charts").css("width", (newWidth + 460) + "px");
  }
});
