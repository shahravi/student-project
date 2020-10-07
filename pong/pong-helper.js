var ctx; //= $("#canvas")[0].getContext('2d');
var paddleSpeed = 10;
var ballSpeed;
var ballSpeedEasy = 15;
var ballSpeedMedium = 13;
var ballSpeedHard = 9;
var timer; // = window.setInterval(draw, ballSpeedEasy);
var canvasWidth, canvasHeight;
var centerX = 300;
var centerY = 200;
var iX = true;
var iY = true;
var paddleHeight = 50;
var leftPaddleY = 175;
var rightPaddleY = 175;
var keyUp, keyDown, keyLeft, keyRight;

function start() {
  timer = window.setInterval(draw, ballSpeed);
}

function draw() {
  if (ctx) {
    //Draw code here
    drawBackground();
    drawLeftPaddle(leftPaddleY);
    drawRightPaddle(rightPaddleY);
    drawBall(centerX, centerY);
  } else {
    alert("This browser is not compatible.");
  }
}

function drawBall(x = centerX, y = centerY) {
  ctx.beginPath();
  ctx.fillStyle = "rgb(200, 0, 0)";
  ctx.arc(x, y, 8, 0, 2 * Math.PI, 0);
  ctx.fill();

  if (didBallHitWallY()) {
    bounce();
  }

  if (didBallHitWallX()) {
    if (didBallHitRightPaddle() || didBallHitLeftPaddle()) {
      bounce();
    } else {
      sendNewBall();
    }
  }
  moveBall();
}

function didBallHitWallX(x = centerX, y = centerY) {
  if (x == 0 || x == canvasWidth) {
    // || in english is or
    return true;
  } else {
    return false;
  }
}

function didBallHitWallY(x = centerX, y = centerY) {
  if (y == 0 || y == canvasHeight) {
    // || in english is or
    return true;
  } else {
    return false;
  }
}

function didBallHitRightPaddle(x = centerX, y = centerY) {
  if (x == canvasWidth && y > rightPaddleY && y < rightPaddleY + paddleHeight) {
    return true;
  } else {
    return false;
  }
}

function didBallHitLeftPaddle(x = centerX, y = centerY) {
  if (x == 0 && y > leftPaddleY && y < leftPaddleY + paddleHeight) {
    return true;
  } else {
    return false;
  }
}

function bounce(x = centerX, y = centerY) {
  if (x == canvasWidth) {
    iX = false;
  }

  if (x == 0) {
    iX = true;
  }

  if (y == canvasHeight) {
    iY = false;
  }

  if (y == 0) {
    iY = true;
  }
}

function moveBall() {
  if (iX == true) {
    centerX++;
  } else {
    centerX--;
  }

  if (iY == true) {
    centerY++;
  } else {
    centerY--;
  }
}

function drawPaddles(ctx) {}

function drawBackground() {
  ctx.fillStyle = "rgb(0, 200, 0)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function moveLeftPaddleUp() {
  for (i = 0; i < paddleSpeed; i++) {
    drawLeftPaddle(ctx, leftPaddleY--);
  }
}
function moveLeftPaddleDown() {
  for (i = 0; i < paddleSpeed; i++) {
    drawLeftPaddle(ctx, leftPaddleY++);
  }
}

function moveRightPaddleUp() {
  for (i = 0; i < paddleSpeed; i++) {
    drawRightPaddle(ctx, rightPaddleY--);
  }
}
function moveRightPaddleDown() {
  for (i = 0; i < paddleSpeed; i++) {
    drawRightPaddle(ctx, rightPaddleY++);
  }
}

function drawLeftPaddle(y = leftPaddleY) {
  ctx.fillStyle = "rgb(200, 0, 0)";
  ctx.fillRect(0, y, 7, paddleHeight);
}

function drawRightPaddle(y = rightPaddleY) {
  ctx.fillStyle = "rgb(200, 0, 0)";
  ctx.fillRect(canvasWidth, y, -7, paddleHeight);
}

function setBallSpeedEasy() {
  window.clearInterval(timer);
  ballSpeed = ballSpeedEasy;
  start();
}

function setBallSpeedMedium() {
  window.clearInterval(timer);
  ballSpeed = ballSpeedMedium;
  start();
}

function setBallSpeedHard() {
  window.clearInterval(timer);
  ballSpeed = ballSpeedHard;
  start();
}

function setBallSpeed(speed) {
  window.clearInterval(timer);
  ballSpeed = speed;
}

$(document).keydown(function (e) {
  if (e.which == 40) {
    // Arrow Down
    // moveRightPaddleDown();
    keyDown();
    return false;
  }
  if (e.which == 38) {
    // Arrow Up
    // moveRightPaddleUp();
    keyUp();
    return false;
  }
  if (e.which == 39) {
    // Left Arrow
    // moveLeftPaddleUp();
    keyLeft();
    return false;
  }
  if (e.which == 37) {
    // Right Arrow
    // moveLeftPaddleDown();
    keyRight();
    return false;
  }
});

function keyPressed() {}

function sendNewBall() {
  centerX = canvasWidth / 2;
  centerY = canvasHeight / 2;
}

function drawCanvas(width, height) {
  canvasWidth = width;
  canvasHeight = height;
  sendNewBall();
  paddleHeight = height * 0.2;
  leftPaddleY = centerY - paddleHeight / 2;
  rightPaddleY = centerY - paddleHeight / 2;

  $("#pong-area").append(
    '<canvas id="pong-canvas" width="' +
      width +
      '" height="' +
      height +
      '" class="game"></canvas>'
  );
  ctx = $("#pong-canvas")[0].getContext("2d");
}

function printText(text) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.font = "48px serif";
  ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);
}

var text1 = "";
var text2 = "";
var text3 = "";
function printSeries(text) {
  text1 = text2;
  text2 = text3;
  text3 = text;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.font = "48px serif";
  ctx.fillText(text3, canvasWidth / 2, canvasHeight / 2);

  ctx.font = "24px serif";
  ctx.fillText(text2, canvasWidth / 2, canvasHeight / 2);
  ctx.fillText(", ", canvasWidth / 2, canvasHeight / 2);
  ctx.fillText(text1, canvasWidth / 2, canvasHeight / 2);
}

$("#easy").click(setBallSpeedEasy);
$("#medium").click(setBallSpeedMedium);
$("#hard").click(setBallSpeedHard);
