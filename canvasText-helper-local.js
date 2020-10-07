var canvasWidth, canvasHeight;
var ctx; //= $("#canvas")[0].getContext('2d');
var cursorX = 5;
var cursorY = 50;

function drawCanvas(width, height) {
  canvasWidth = width;
  canvasHeight = height;
  //id = "#" + areaId;
  $("#text-area").append("<canvas id=\"canvas\" width=\"" + width + "\" height=\"" + height + "\" class=\"game\"></canvas>");
  ctx = $("#canvas")[0].getContext('2d');
  ctx.font = '48px serif';
}

function drawBackground() {
  ctx.fillStyle = 'rgb(0, 200, 0)';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function writeText(text) {
  ctx.fillText(text, cursorX, cursorY);
  cursorY += 55;
}

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.arc(x, y, 8, 0, 2*Math.PI, 0);
  ctx.fill();
}

function drawRectangle(x, y, width, height) {
  ctx.strokeRect(x, y, width, height);
}

function drawFilledRectangle(x, y, width, height) {
  ctx.fillRect(x, y, width, height);
}

export { drawCanvas, drawBackground, writeText, drawRectangle, drawFilledRectangle };
