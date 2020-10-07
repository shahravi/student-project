var ctx; //= $("#canvas")[0].getContext('2d');
var canvasWidth, canvasHeight;
var centerX = 300;
var centerY = 200;
var keyUp, keyDown, keyLeft, keyRight;

function drawCanvas(width, height) {
  canvasWidth = width;
  canvasHeight = height;

  $("#counter-area").append("<canvas id=\"pong-canvas\" width=\"" + width + "\" height=\"" + height + "\" class=\"game\"></canvas>");
  ctx = $("#pong-canvas")[0].getContext('2d');
}

function printText(text) {
  ctx.clearRect(0,0, canvasWidth, canvasHeight);
  ctx.font = '48px serif';
  ctx.fillText(text, canvasWidth/2, canvasHeight/2);
}

var text1 = "";
var text2 = "";
var text3 = "";
function printSeries(text) {
  text1 = text2;
  text2 = text3;
  text3 = text;
  ctx.clearRect(0,0, canvasWidth, canvasHeight);
  ctx.font = '48px serif';
  ctx.fillText(text3, canvasWidth/2, canvasHeight/2);

  ctx.font = '24px serif';
  ctx.fillText(text2, canvasWidth/2, canvasHeight/2 + 50);
  // ctx.fillText(", ", canvasWidth/2, canvasHeight/2 + 50);
  ctx.fillText(text1, canvasWidth/2, canvasHeight/2 + 100);
}
