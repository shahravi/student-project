var x = 225;
var y = 480;
var width = 50;
var height = 100;
drawCanvas(500, 500);

function assignment1() {
  window.setInterval(draw, 1);

  function draw() {
    clearCanvas();

    drawRectangle(x, y, width, height);
    if (isKeyPressed(keyRight)) {
      paddleGoRight();
    }
    if (isKeyPressed(keyLeft)) {
      paddleGoLeft();
    }
  }
}

function paddleGoLeft() {
  x = x - 1;
}

function paddleGoRight() {
  x = x + 1;
}

function stayPut() {
  x = x;
}

function goUpwards() {
  y = y - 1;
}

function goDownwards() {
  y = y + 1;
}

function goDiagonal() {
  x = x + 1;
  y = y + 1;
}
