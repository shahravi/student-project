var paddleX = 225;
var paddleY = 480;
var width = 50;
var height = 100;

var ballX = 50;
var ballY = 0;
drawCanvas(500, 500);

function assignment1() {
  window.setInterval(draw, 1);

  function draw() {
    clearCanvas();

    drawRectangle(paddleX, paddleY, width, height);
    if (isKeyPressed(keyRight)) {
      paddleGoRight();
    }
    if (isKeyPressed(keyLeft)) {
      paddleGoLeft();
    }
  }
}

function assignment2() {
  window.setInterval(draw, 1);
  var move = createNewBall;

  function draw() {
    clearCanvas();

    drawRectangle(paddleX, paddleY, width, height);
    drawCircle(20, ballX, ballY);

    if (isKeyPressed(keyRight)) {
      paddleGoRight();
    }
    if (isKeyPressed(keyLeft)) {
      paddleGoLeft();
    }

    if (ballY == 0) {
      move = ballGoDown;
    }

    if (ballY == 500) {
      if (ballX > paddleX && ballX < paddleX + 50) {
        move = ballGoUp;
      } else {
        createNewBall();
      }
    }
    move();
  }
}

function createNewBall() {
  ballX = Math.random() * 500;
  ballY = 0;
}

function paddleGoLeft() {
  paddleX = paddleX - 1;
}

function paddleGoRight() {
  paddleX = paddleX + 1;
}

function ballStayPut() {
  ballX = ballX;
  ballY = ballY;
}

function ballGoLeft() {
  ballX = ballX - 1;
}

function ballGoRight() {
  ballX = ballX + 1;
}

function ballGoUp() {
  ballY = ballY - 1;
}

function ballGoDown() {
  ballY = ballY + 1;
}

function ballGoDiagonal() {
  ballX = ballX + 1;
  ballY = ballY + 1;
}
