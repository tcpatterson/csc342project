var ready;
function setup() {
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent('graph');
  noStroke();
  ready = 0;
  noLoop();
}

var data = [{"JobTitle":"Monday I","Count":12},
{"JobTitle":"Tuesday","Count":6},
{"JobTitle":"Wednesday","Count":8},
{"JobTitle":"Thursday","Count":9},
{"JobTitle":"Friday","Count":6},
{"JobTitle":"Saturday","Count":11},
{"JobTitle":"Sunday","Count":9}];

//var angles = [ 30, 10, 45, 35, 60, 38, 75, 67 ];
var index = 0;
var total = 0;
data.forEach(function(element, index, array) {
	total = total + element.Count;
});
var percentages = [];
data.forEach(function(element, index, array) {
	percentages.push(element.Count/total);
});
var angles = [];
data.forEach(function(element, index, array) {
	angles.push(percentages[index]*360);
});
var i;
var lastAngle = 0;
var timeoutID;

function draw() {
  if(ready > 0) {
  	drawPieces();
    noLoop();
  } else {
    ready = 1;
  }
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
 
  
  console.log( lastAngle+radians(angles[i]));
  
 
  
  console.log('\n');
  text("hello world", width/2 + cos ((lastAngle+radians(angles[i])) )* (diameter / 2), height/2 +(sin (lastAngle+radians(angles[i]))) * (diameter/2) , 50 , 50);
  lastAngle += radians(angles[i]); 
  index++;
  if(index==data.length){
    clearInterval(timeoutID);
  }
}
