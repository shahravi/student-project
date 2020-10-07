var x = 100;
var y = 100;
var r = 25;

drawCanvas(500, 500);

function assignment4() {
  window.setInterval(draw, 100);

  function draw() {
    drawCircle(r, x, y);
    x = x + 50;
  }
}

function assignment5() {
  window.setInterval(draw, 100);

  function draw() {
    clearCanvas();
    drawCircle(r, x, y);
    x = x + 50;
  }
}

function assignment6() {
  window.setInterval(draw, 100);

  function draw() {
    clearCanvas();
    drawCircle(r, x, y);
    move = goLeft;
    move();
  }
}

function assignment7() {
  window.setInterval(draw, 100);

  function draw() {
    clearCanvas();
    drawCircle(r, x, y);
    move = goDownwards;
    move();
  }
}

//Additional assignments to create functions for movement

//Go back to starting position upon hitting the wall
function assignment10() {
  window.setInterval(draw, 10);

  function draw() {
    clearCanvas();
    drawCircle(r, x, y);
    move = goRight;

    if (x == 500) {
      x = 100;
    }
    move();
  }
}

//Bounce off the wall
function assignment11() {
  window.setInterval(draw, 10);
  move = goRight;
  var direction = 1;

  function draw() {
    clearCanvas();
    drawCircle(r, x, y);

    if (x == 500) {
      move = goLeft;
    }

    if (x == 0) {
      move = goRight;
    }

    if (y == 0) {
      move = goDownwards;
    }

    if (y == 1000) {
      move = goUpwards;
    }

    move();
  }
}

function assignment12() {
  var x = 225;
  var y = 480;
  var width = 50;
  var height = 100;

  window.setInterval(draw, 1);

  function draw() {
    clearCanvas();
    drawRectangle(x, y, width, height);

    if (isKeyPressed(keyRight)) {
      goRight();
    }
    if (isKeyPressed(keyLeft)) {
      goLeft();
    }
  }
}

function stayPut() {
  x = x;
}

function goLeft() {
  x = x - 1;
}

function goRight() {
  x = x + 1;
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
