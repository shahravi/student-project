drawCanvas(400, 300);
drawBackground();
drawBall();
drawLeftPaddle();
drawRightPaddle();

keyUp = moveRightPaddleUp;
keyDown = moveRightPaddleDown;
keyLeft = moveLeftPaddleUp;
keyRight = moveLeftPaddleDown;

setBallSpeed(25);

// start();

function drawBackground() {
  // var ctx = $("#pong-canvas")[0].getContext('2d’);
  //ctx = $("#pong-canvas")[0].getContext('2d');
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function drawBackground() {
  if (count == 0) {
    ctx.fillStyle = "red";
  }
  if (count == 1) {
    ctx.fillStyle = "green";
  }
  if (count == 2) {
    ctx.fillStyle = "blue";
    count = 0;
  }
  count++;

  // ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  // ctx.font = '48px serif';
  // ctx.fillText(count, 100, 100);
  // drawBall();
  drawLeftPaddle();
  drawRightPaddle();
}

function getNewColor() {
  red = Math.floor(Math.random() * 100 + 1);
  green = Math.floor(Math.random() * 100 + 1);
  blue = Math.floor(Math.random() * 100 + 1);

  return "rgb(" + red + "," + green + "," + blue + " )";
}
