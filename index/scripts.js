$( "#toggler" ).on('click', toggleSidebar);
$( "#read" ).on('click', readBarData);
$( "#clear" ).on('click', clearBar);
$( "#genChart" ).on('click', genBarChart);
$( "#changeWidth" ).on('click', resizeBar);
$("#bar").click(function(){
  $("#currentChartTitle").text("Bar Chart")
  $('#changeWidthSpan').removeClass('hide');
  unbindAll();
  $( "#changeWidth" ).unbind();
  $( "#changeWidth" ).on('click', resizeBar);
  $( "#read" ).on('click', readBarData);
  $( "#clear" ).on('click', clearBar);
  $( "#genChart" ).on('click', genBarChart);
  toggleSidebar();
  clearBar();
  undoResize();
})
$("#line").click(function(){
  $("#currentChartTitle").text("Line Chart")
  $('#changeWidthSpan').removeClass('hide');
  unbindAll();
  $( "#changeWidth" ).unbind();
  $( "#changeWidth" ).on('click', resizeLine);
  $( "#read" ).on('click', readLineData);
  $( "#clear" ).on('click', clearLine);
  $( "#genChart" ).on('click', genLineChart);
  toggleSidebar();
  clearBar();
  undoResize();
})
$("#pie").click(function(){
  $("#currentChartTitle").text("Pie Chart")
  $('#changeWidthSpan').addClass('hide');
  unbindAll();
  $( "#read" ).on('click', readPieData);
  $( "#clear" ).on('click', clearPie);
  $( "#genChart" ).on('click', genPieChart);
  toggleSidebar();
  clearBar();
  undoResize();
})
$("#donut").click(function(){
  $("#currentChartTitle").text("Donut Chart")
  $('#changeWidthSpan').addClass('hide');
  unbindAll();
  $( "#read" ).on('click', readDonutData);
  $( "#clear" ).on('click', clearDonut);
  $( "#genChart" ).on('click', genDonutChart);
  toggleSidebar();
  clearBar();
  undoResize();
})

function undoResize() {
  $("#graph").animate({'width' : 400}, 1000, function(){});
  $(".charts").animate({'width' : 860}, 1000, function(){});
}

function unbindAll() {
  $( "#read" ).unbind();
  $( "#clear" ).unbind();
  $( "#genChart" ).unbind();
}

function toggleSidebar() {
  var currentLeft = $("#sidebar").css( "left" );
  if(currentLeft == "-150px") {
    $("#sidebar").animate({ left: "0px"}, 500);
    $("#toggler").removeClass("pushRight");
    $("#toggler").addClass("pushLeft");
  } else {
    $("#sidebar").animate({ left: "-150px"}, 500);
    $("#toggler").removeClass("pushLeft");
    $("#toggler").addClass("pushRight");
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
{"Key":"Web Designer 3","Value":132}];


var lineData = [{"Key":"Monday","Value":12},
{"Key":"Tuesday","Value":6},
{"Key":"Wednesday","Value":8},
{"Key":"Thursday","Value":9},
{"Key":"Friday","Value":6},
{"Key":"Saturday","Value":11},
{"Key":"Sunday","Value":9}];

var pieData = [{"Key":"Monday","Value":12},
{"Key":"Tuesday","Value":6},
{"Key":"Wednesday","Value":8},
{"Key":"Thursday","Value":9},
{"Key":"Friday","Value":6},
{"Key":"Saturday","Value":11},
{"Key":"Sunday","Value":9}];

var donutData = [{"Key":"A's","Value":20},
{"Key":"B's","Value":24},
{"Key":"C's","Value":37},
{"Key":"D's","Value":13},
{"Key":"F's","Value":8}];

var index = 0;
var ready;
var pieTotal = 0;
pieData.forEach(function(element, index, array) {
  pieTotal = pieTotal + element.Value;
});
var piePercentages = [];
pieData.forEach(function(element, index, array) {
  piePercentages.push(element.Value/pieTotal);
});
var pieAngles = [];
pieData.forEach(function(element, index, array) {
  pieAngles.push(piePercentages[index]*360);
});
var i;
var lastAngle = 0;
var timeoutID;

var donutTotal = 0;
donutData.forEach(function(element, index, array) {
  donutTotal = donutTotal + element.Value;
});
var donutPercentages = [];
donutData.forEach(function(element, index, array) {
  donutPercentages.push(element.Value/donutTotal);
});
var donutAngles = [];
donutData.forEach(function(element, index, array) {
  donutAngles.push(donutPercentages[index]*360);
});

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
  undoResize();
}

function resizeLine() {
  var newWidth = parseInt($("#width").val(), 10);
  console.log($("#width").val());
  if (newWidth > 10 && newWidth <= 10000) {
    $("#graph").empty();
    $("#graph").css("width", newWidth + "px");
    $(".charts").css("width", (newWidth + 460) + "px");
  }
  genLineChart();
}
function resizeBar() {
  var data = barData;
  var newWidth = parseInt($("#width").val(), 10);
  console.log($("#width").val());
  if (newWidth > 10 && newWidth <= 10000) {
    var changeBar =  {'width' : (((newWidth - 20)/data.length) - 2)};
    var changeGraph =  {'width' : newWidth};
    var changeCharts =  {'width' : (newWidth + 460)};
    $(".bar").animate(changeBar, 1000, function(){});
    $("#graph").animate(changeGraph, 1000, function(){});
    $(".charts").animate(changeCharts, 1000, function(){});
    //.delay(2000).css("width", (newWidth + 460) + "px");
  }
}

function genBarChart() {
  var intervalLength = 800;
  var data = barData;
  var data2 = barData;
  $("#graph").empty();
  var index = 0;
  if(index > 5 || index < 13) {
    intervalLength = 600;
  } else {
    intervalLength = 800;
  }
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
    var title = data[index].Key.replace(" ", "_");
    var split = data[index].Key.split(" ");
    for (var q = 0; q < split.length; q++) {
      abbreviation += split[q].charAt(0);
    }
    $( "#ghost" ).append( "<div class='lines' style='width: 2 px; margin-top: -180px;  background-color:#BDBDBD; border:1px solid black'></div>" );  
   
    $( "#graph" ).append( "<div class='bar' style='width:"+width+"px; margin-top:"+top+"px; background-color:#BDBDBD; border:1px solid black' title="+title+">" + abbreviation + "</div>" );
    $(".bar:nth-child("+(index+2)+")").animate({ height: "" + height + "px"}, 800);
     $("tr:nth-child("+(index+2)+") .barCount").css('font-weight', 'bold');
    
     $("tr:nth-child("+(index+1)+") .barCount").css('font-weight', '');
    index++;
    if(index >= data.length) {
        console.log("exiting loop");
       
		clearInterval(intervalID2);
	}
    
  }, intervalLength);
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
  undoResize();
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
    //if(index == 1){alert(element.Key)};
    if(index <= 17){
      var string = "<tr><td>" + element.Key + "</td><td class='barCount'>" + element.Value + "</td></tr>";
      $( "table" ).append(string);

    };
  });
}

function clearPie() {
  index = 0;
  lastAngle = 0;
  $("table").empty();
  $("#graph").empty();
}

function genPieChart() {
  $("#graph").empty();
  index = 0;
  lastAngle = 0;
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent('graph');
  noStroke();
  drawPiePieces();
}

function setup() {
  noLoop();
}

function draw() {
  
}

function drawLines(){
  var data = lineData;
  var index2 = 0;
  var width = parseInt($("#graph").css("width"), 10)/data.length;
  var leftmargin = 2*(width-7)/3;
  var rightmargin = (width-7)/3;
  var intervalID3 = setInterval(function() {
    var dotStart = $(".dots:nth-child("+(index2+1)+")");
    var positionStart = dotStart.position();
    var dotEnd = $(".dots:nth-child("+(index2)+")");
    var positionEnd = dotEnd.position();
    console.log("ind2", index2);
    console.log("start", positionStart);
    console.log("end", positionEnd);
    console.log("lm", leftmargin);
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

function drawPiePieces() {
  timeoutID = window.setInterval(drawPiePiece, 500);
}

function drawPiePiece() {
  var data = pieData;
  $('tr:nth-child('+(index+1)+') .barCount').css('font-weight', '');
  $('tr:nth-child('+(index+2)+') .barCount').css('font-weight', 'bold');
  diameter = 300;
  i = index;
  var rand = Math.random();
  var color = rand*255;
  var gray = map(i, 0, pieAngles.length, 0, 255);
  //fill(gray);
  fill(gray, gray, 100);
  arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(pieAngles[i]));
  console.log( lastAngle+radians(pieAngles[i]));
  var adjustx;
  var adjusty;
  if (lastAngle+radians(pieAngles[i]) > (Math.PI/2) && lastAngle+radians(pieAngles[i]) < (3*Math.PI/2)) {
    adjustx = sin((lastAngle+radians(pieAngles[i]))/2) * 50;
  } else if (lastAngle+radians(pieAngles[i]) > (3*Math.PI/2) && lastAngle+radians(pieAngles[i]) < (2*Math.PI)) {
    adjustx = -1 * cos((lastAngle+radians(pieAngles[i]))) * 20;
  } else {
    adjustx = 0
  }
  if (lastAngle+radians(pieAngles[i]) > (Math.PI) && lastAngle+radians(pieAngles[i]) < (2*Math.PI)) {
    adjusty = sin((lastAngle+radians(pieAngles[i]))) * 50;
  } else {
    adjusty = 0;
  }
  text(data[i].Key + ", " + (pieAngles[i]/360*100).toFixed(2) + "%", width/2 + cos ((lastAngle+.5*radians(pieAngles[i])) )* (diameter / 2) - adjustx, height/2 +(sin (lastAngle+.5*radians(pieAngles[i]))) * (diameter / 2) + adjusty, 50 , 50);
  lastAngle += radians(pieAngles[i]); 
  index++;
  if(index==data.length){
    clearInterval(timeoutID);
  }
}

function readDonutData() {
  var data = donutData;
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
}

function genDonutChart() {
  $("#graph").empty();
  index = 0;
  lastAngle = 0;
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent('graph');
  noStroke();
  drawDonutPieces();
}

function drawDonutPieces() {
  timeoutID = window.setInterval(drawDonutPiece, 500);
}

function drawDonutPiece() {
  var data = donutData;
  $('tr:nth-child('+(index+1)+') .barCount').css('font-weight', '');
  $('tr:nth-child('+(index+2)+') .barCount').css('font-weight', 'bold');
  diameter = 300;
  i = index;
  var rand = Math.random();
  var color = rand*255;
  var gray = map(i, 0, donutAngles.length, 0, 255);
  //fill(gray);
  fill(gray + 120, gray, 50);
  arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(donutAngles[i]));
  var adjustx;
  var adjusty;
  if (lastAngle+radians(donutAngles[i]) > (Math.PI/2) && lastAngle+radians(donutAngles[i]) < (3*Math.PI/2)) {
    adjustx = sin((lastAngle+radians(donutAngles[i]))/2) * 50;
  } else if (lastAngle+radians(donutAngles[i]) > (3*Math.PI/2) && lastAngle+radians(donutAngles[i]) < (2*Math.PI)) {
    adjustx = -1 * cos((lastAngle+radians(donutAngles[i]))) * 20;
  } else {
    adjustx = 0
  }
  if (lastAngle+radians(donutAngles[i]) > (Math.PI) && lastAngle+radians(donutAngles[i]) < (2*Math.PI)) {
    adjusty = sin((lastAngle+radians(donutAngles[i]))) * 50;
  } else {
    adjusty = 0;
  }
  fill(0);
  text(data[i].Key + ", " + (donutAngles[i]/360*100).toFixed(2) + "%", width/2 + cos ((lastAngle+.5*radians(donutAngles[i])) )* (diameter / 2) - adjustx, height/2 +(sin (lastAngle+.5*radians(donutAngles[i]))) * (diameter / 2) + adjusty, 50 , 50);
  lastAngle += radians(donutAngles[i]); 
  index++;
  if(index==data.length){
    clearInterval(timeoutID);
  }
  fill(255);
  ellipse(width/2, height/2, diameter / 2, diameter / 2);
}

function clearDonut() {
  index = 0;
  lastAngle = 0;
  $("table").empty();
  $("#graph").empty();
}
