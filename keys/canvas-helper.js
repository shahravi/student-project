//Drawing helper
var canvasWidth, canvasHeight;
var ctx; //= $("#canvas")[0].getContext('2d');
var cursorX = 0;
var cursorY = 0;
var currentAngle = 0;

function drawCanvas(width, height) {
  canvasWidth = width;
  canvasHeight = height;
  //id = "#" + areaId;
  $("#canvas-area").append(
    '<canvas id="canvas" width="' +
      width +
      '" height="' +
      height +
      '" class="bg-warning"></canvas>'
  );
  ctx = $("#canvas")[0].getContext("2d");

  //Move the cursor to 10% from left and top
  moveTo(50, 50);

  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function drawBackground() {
  ctx.fillStyle = "rgb(0, 100, 255)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function moveTo(x, y) {
  // ctx.beginPath();
  ctx.moveTo(x, y);
  //ctx.closePath();
  cursorX = x;
  cursorY = y;
}

function lineTo(x, y) {
  ctx.beginPath();
  moveTo(cursorX, cursorY);
  ctx.lineTo(x, y);
  ctx.stroke();
  moveTo(x, y);
}

function jumpForward(length, degrees = currentAngle) {
  radians = degrees * (Math.PI / 180);
  moveTo(
    cursorX + length * Math.cos(radians),
    cursorY + length * Math.sin(radians)
  );
}

function drawLine(length = 1, degrees = currentAngle) {
  radians = degrees * (Math.PI / 180);
  lineTo(
    cursorX + length * Math.cos(radians),
    cursorY + length * Math.sin(radians)
  );
}

function resetAngle() {
  currentAngle = 0;
}
function turn(degrees) {
  currentAngle += degrees;
}

function turnRight(degrees) {
  currentAngle += degrees;
}

function turnLeft(degrees) {
  currentAngle -= degrees;
}

function printText(text) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.font = "48px serif";
  ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);
}

function printTextAtXY(text) {
  ctx.font = "48px serif";
  ctx.fillText(text, cursorX, cursorY);
}

function getNewColor() {
  red = Math.floor(Math.random() * 100 + 1);
  green = Math.floor(Math.random() * 100 + 1);
  blue = Math.floor(Math.random() * 100 + 1);

  return "rgb(" + red + "," + green + "," + blue + " )";
}

function changeFillColor() {
  ctx.fillStyle = getNewColor();
}

function changeStrokeColor() {
  ctx.strokeStyle = getNewColor();
}

function drawTriangle() {
  moveTo(cursorX - size / 2, cursorY - size / 2);
  for (var i = 0; i < 4; i++) {
    drawLine(size);
    turnRight(120);
  }
}

function drawSquare(size = 25) {
  moveTo(cursorX - size / 2, cursorY - size / 2);
  for (var i = 0; i < 4; i++) {
    drawLine(size);
    turnRight(90);
  }
}

function drawCircle(radius = (0.25 * 180) / Math.PI, x = cursorX, y = cursorY) {
  moveTo(x, y - radius);
  for (var i = 0; i < 360; i++) {
    drawLine((Math.PI * radius) / 180);
    turnRight(1);
  }
  moveTo(x, y);
}

function drawRectangle(x, y, width, height) {
  ctx.strokeRect(x, y, width, height);
}

function drawFilledRectangle(x, y, width, height) {
  ctx.fillRect(x, y, width, height);
}

//Keys Helper

var keyUp = 38;
var keyDown = 40;
var keyLeft = 37;
var keyRight = 39;
var onKeyUp, onKeyDown, onKeyLeft, onKeyRight;

var pressedKeys = {};
window.onkeyup = function (e) {
  pressedKeys[e.keyCode] = false;
};
window.onkeydown = function (e) {
  //alert(e.keyCode);
  pressedKeys[e.keyCode] = true;
};

function isKeyPressed(key) {
  return pressedKeys[key];
}

$(document).keydown(function (e) {
  if (e.which == 40) {
    // Arrow Down
    // moveRightPaddleDown();
    onKeyDown();
    return false;
  }
  if (e.which == 38) {
    // Arrow Up
    // moveRightPaddleUp();
    onKeyUp();
    return false;
  }
  if (e.which == 39) {
    // Left Arrow
    // moveLeftPaddleUp();
    onKeyRight();
    return false;
  }
  if (e.which == 37) {
    // Right Arrow
    // moveLeftPaddleDown();
    onKeyLeft();
    return false;
  }
});
