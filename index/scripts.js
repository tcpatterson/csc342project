$( "#weHaveAWinner" ).on('click', toggleSidebar);
$( "#read" ).on('click', readLineData);
$( "#clear" ).on('click', clearLine);
$( "#genChart" ).on('click', genLineChart);
$("#bar").click(function(){
  $( "#read" ).unbind();
  $( "#clear" ).unbind();
  $( "#genChart" ).unbind();
  $( "#read" ).on('click', readBarData);
  $( "#clear" ).on('click', clearBar);
  $( "#genChart" ).on('click', genBarChart);
})
$("#line").click(function(){
  $( "#read" ).unbind();
  $( "#clear" ).unbind();
  $( "#genChart" ).unbind();
  $( "#read" ).on('click', readLineData);
  $( "#clear" ).on('click', clearLine);
  $( "#genChart" ).on('click', genLineChart);
})
$("#pie").click(function(){
  $( "#read" ).unbind();
  $( "#clear" ).unbind();
  $( "#genChart" ).unbind();
  $( "#read" ).on('click', readPieData);
  $( "#clear" ).on('click', clearPie);
  $( "#genChart" ).on('click', genPieChart);
})

function toggleSidebar() {
  var currentLeft = $("#sidebar").css( "left" );
  if(currentLeft == "-150px") {
    $("#sidebar").animate({ left: "0px"}, 500);
  } else {
    $("#sidebar").animate({ left: "-150px"}, 500);
  }
}

var barData = [{"Key":"Programmer 1","Value":196},
{"Key":"Civil Engineer","Value":216},
{"Key":"Software Engineer 4","Value":400},
{"Key":"Web Designer 3","Value":132},
{"Key":"Human Resources Manager","Value":88},
{"Key":"Help Desk Technician","Value":252},
{"Key":"Programmer 1","Value":196},
{"Key":"Civil Engineer","Value":216},
{"Key":"Software Engineer 4","Value":400},
{"Key":"Web Designer 3","Value":132},
{"Key":"Human Resources Manager","Value":88},
{"Key":"Help Desk Technician","Value":252},
{"Key":"Programmer 1","Value":196},
{"Key":"Civil Engineer","Value":216},
{"Key":"Software Engineer IV","Value":400},
{"Key":"Web Designer 3","Value":132},
{"Key":"Human Resources Manager","Value":88},
{"Key":"Help Desk Technician","Value":252},
{"Key":"Programmer 1","Value":196},
{"Key":"Civil Engineer","Value":216},
{"Key":"Software Engineer 4","Value":400},
{"Key":"Web Designer 3","Value":132},
{"Key":"Human Resources Manager","Value":88},
{"Key":"Help Desk Technician","Value":252}];


var lineData = [{"Key":"Monday","Value":12},
{"Key":"Tuesday","Value":6},
{"Key":"Wednesday","Value":8},
{"Key":"Thursday","Value":9},
{"Key":"Friday","Value":6},
{"Key":"Saturday","Value":11},
{"Key":"Sunday","Value":9}];

var pieData = [{"JobTitle":"Monday I","Count":12},
            {"JobTitle":"Tuesday","Count":6},
            {"JobTitle":"Wednesday","Count":8},
            {"JobTitle":"Thursday","Count":9},
            {"JobTitle":"Friday","Count":6},
            {"JobTitle":"Saturday","Count":11},
            {"JobTitle":"Sunday","Count":9}];

var index = 0;
var total = 0;
var ready=0;
pieData.forEach(function(element, index, array) {
  total = total + element.Count;
});
var percentages = [];
pieData.forEach(function(element, index, array) {
  percentages.push(element.Count/total);
});
var angles = [];
pieData.forEach(function(element, index, array) {
  angles.push(percentages[index]*360);
});
var i;
var lastAngle = 0;
var timeoutID;

function readBarData() {
  var data = barData;
  $("table").empty();
  $( "table" ).append( "<th>Number of workers in certian job fields</th>" );
  $( "table" ).append( "<tr><td>" + "<u>Job Title</u>" + "</td><td>" + "<u>Count</u>" + "</td></tr>" );
  data.forEach( function(element, index, array) {
    //if(index == 1){alert(element.JobTitle)};
    if(index <= 17){
      var string = "<tr><td>" + element.Key + "</td><td class='barCount'>" + element.Value + "</td></tr>";
      $( "table" ).append(string);

    }
  });
}

function clearBar() {
  $("table").empty();
  $("#graph").empty();
  $("#ghost").empty();
}

function genBarChart() {
  var data = barData;
  var data2 = barData2;
  $("#graph").empty();
  var index = 0;
  var max = data[0].Value;
  for (var i = 0; i < data.length; i++){
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
    width = ((parseInt($("#graph").css("width"), 10) - 20)/data.length) - 2;
    var height = data[index].Value * scale;
    var top = 400 - height;
    var abbreviation = "";
    var split = data[index].Key.split(" ");
    for (var q = 0; q < split.length; q++) abbreviation += split[q].charAt(0);
    $( "#ghost" ).append( "<div class='lines' style='width: 2 px; margin-top: -180px;  background-color:#BDBDBD; border:1px solid black'></div>" );  
   
    $( "#graph" ).append( "<div class='bar' style='width:"+width+"px; margin-top:"+top+"px; background-color:#BDBDBD; border:1px solid black'>" + abbreviation + "</div>" );
    $(".bar:nth-child("+(index+2)+")").animate({ height: "" + height + "px"}, 800);
     $("tr:nth-child("+(index+2)+") .barCount").css('font-weight', 'bold');
    
     $("tr:nth-child("+(index+1)+") .barCount").css('font-weight', '');
    if(index >= data.length) {
        console.log("exiting loop");
       
		clearInterval(intervalID2);
	}
    index++;
  }, 800);
}

function readLineData() {
  var data = lineData;
  $("table").empty();
  $( "table" ).append( "<th>Number of inches of rain per day</th>" );
  $( "table" ).append( "<tr><td>" + "<u>Day</u>" + "</td><td>" + "<u>Inches</u>" + "</td></tr>" );
  data.forEach( function(element, index, array) {
    //if(index == 1){alert(element.JobTitle)};
    if(index <= 17){
      var string = "<tr><td>" + element.Key + "</td><td class='barCount'>" + element.Value + "</td></tr>";
      $( "table" ).append(string);
    };
  });
}

function clearLine() {
  $("table").empty();
  $("#graph").empty();
}

function genLineChart() {
  var data = lineData;
  $("#graph").empty();
  var multiplier = 400/12;
  var index = 0;
  var width = parseInt($("#graph").css("width"), 10)/data.length;
  var leftmargin = 2*(width-7)/3;
  var rightmargin = (width -7)/3;
  data.forEach( function(element, index, array) {
    $( "#graph" ).append( "<div class='dots' style='margin-left:"+leftmargin+"px;margin-right:"+rightmargin+"px;width:5px;height:5px;background-color:black;border:1px solid gray; top:394px;'>&nbsp;&nbsp;" + element.Key.substring(0, 2) + "</div>" );
  });
  
  var max = data[0].Value;
  for (var i = 0; i < data.length; i++){
    if (data[i].Value > max) max = data[i].Value;
  }
  var scale = 400/max;
  $( "#graph" ).append( "<div id='yaxis' style='width: 20px; height: 400px'></div>" );
  var piece = max / 5;
  for (var q = 5; q >= 0; q--){
    $("#yaxis").append("<div id='y' style='width: 20px; height: 80px'>" + (q*piece).toFixed(2) + "</div>");
  }
  var intervalID2 = setInterval(function() {
    var top = 400 - (data[index].Value * (multiplier-1));
    $(".dots:nth-child("+(index+1)+")").animate({
      "top": top
    },{duration:1000,
      start: function() {
        console.log('start', index);
        $("tr:nth-child("+(index+2)+") .barValue").css('font-weight', 'bold');
      },
      done: function(){
        console.log('end', index);
        if(index == data.length) {
          drawLines();
        }
        $("tr:nth-child("+(index+0)+") .barValue").css('font-weight', '');
      }
    });
    console.log(index, data.length);
    if(index == data.length-1) {
      console.log("cleared");
			clearInterval(intervalID2);
		}
    index++;
  }, 800);
}

function readPieData() {
  var data = pieData;
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
}

function clearPie() {
  $("table").empty();
  $("#graph").empty();
  //clear();
  //setup();
}

function genPieChart() {
  loop();
}

function setup() {
  noLoop();
}

function draw() {
  if(ready > 0) {
    drawPieces();
    noLoop();
  } else {
    var myCanvas = createCanvas(400, 400);
    myCanvas.parent('graph');
    noStroke();
    ready = 1;
  }
}

function drawLines(){
  var data = lineData;
  var index2 = 0;
  var width = 400/data.length;
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

function drawPieces() {
  timeoutID = window.setInterval(drawPiece, 500);
}

function drawPiece() {
  $('tr:nth-child('+(index+1)+') .barCount').css('font-weight', '');
  $('tr:nth-child('+(index+2)+') .barCount').css('font-weight', 'bold');
  diameter = 300;
  i = index;
  var rand = Math.random();
  var color = rand*255;
  var gray = map(i, 0, angles.length, 0, 255);
  //fill(gray);
  fill(gray, gray, 100);
  arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
  console.log(lastAngle);
  if(lastAngle > 0 && lastAngle < 1.57) {
    var xmult = 1;
    var ymult = -1;
  }
  if(lastAngle > 1.57 && lastAngle < 3.14) {
    var xmult = -1;
    var ymult = -1;
  }
  if(lastAngle > 3.14 && lastAngle < 4.71) {
    var xmult = -1;
    var ymult = 1;
  }
  if(lastAngle > 4.73 && lastAngle < 6.28) {
    var xmult = 1;
    var ymult = 1;
  }
  var ang = angles[i];
  var xoff = Math.cos(ang)*(diameter/1.8);
  var yoff = Math.sin(ang)*(diameter/1.8);
  text("fweewf",(width/2)+(xoff*xmult), (height/2)+(yoff*ymult));
  lastAngle += radians(angles[i]);
  index++;
  if(index==pieData.length){
    clearInterval(timeoutID);
  }
}
