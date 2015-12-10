var ready;
function setup() {
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent('graph');
  noStroke();
  ready = 0;
  noLoop();
}

var data = [{"Key":"A's","Value":20},
{"Key":"B's","Value":24},
{"Key":"C's","Value":37},
{"Key":"D's","Value":13},
{"Key":"F's","Value":8}];

//var angles = [ 30, 10, 45, 35, 60, 38, 75, 67 ];
var index = 0;
var total = 0;
data.forEach(function(element, index, array) {
	total = total + element.Value;
});
var percentages = [];
data.forEach(function(element, index, array) {
	percentages.push(element.Value/total);
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
 
  fill(gray + 120, gray, 50);
  
  
  
  
  arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
  
  
  console.log( lastAngle+radians(angles[i]));
  
 
  
  console.log('\n');
  var adjustx;
  var adjusty;
  if (lastAngle+radians(angles[i]) > (Math.PI/2) && lastAngle+radians(angles[i]) < (3*Math.PI/2)) {
    adjustx = sin((lastAngle+radians(angles[i]))/2) * 50;
  } else if (lastAngle+radians(angles[i]) > (3*Math.PI/2) && lastAngle+radians(angles[i]) < (2*Math.PI)) {
    adjustx = -1 * cos((lastAngle+radians(angles[i]))) * 20;
  } else {
    adjustx = 0
  }
  if (lastAngle+radians(angles[i]) > (Math.PI) && lastAngle+radians(angles[i]) < (2*Math.PI)) {
    adjusty = sin((lastAngle+radians(angles[i]))) * 50;
  } else {
    adjusty = 0;
  }
  fill(0);
  text(data[i].Key + ", " + (angles[i]/360*100).toFixed(2) + "%", width/2 + cos ((lastAngle+.5*radians(angles[i])) )* (diameter / 2) - adjustx, height/2 +(sin (lastAngle+.5*radians(angles[i]))) * (diameter / 2) + adjusty, 50 , 50);
  lastAngle += radians(angles[i]); 
  index++;
  if(index==data.length){
    clearInterval(timeoutID);
  }
  
  fill(255);
  ellipse(width/2, height/2, diameter / 2, diameter / 2);
}
