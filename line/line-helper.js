var canvasWidth, canvasHeight;
var ctx; //= $("#canvas")[0].getContext('2d');
var cursorX = 0;
var cursorY = 0;
var currentAngle = 0;

function drawCanvas(width, height) {
  canvasWidth = width;
  canvasHeight = height;
  //id = "#" + areaId;
  $("#line-area").append(
    '<canvas id="line" width="' +
      width +
      '" height="' +
      height +
      '" class="bg-warning"></canvas>'
  );
  ctx = $("#line")[0].getContext("2d");

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
var currentLength = 0;
var desiredLength = 0;

function drawLine(length = 1, degrees = currentAngle) {
  radians = degrees * (Math.PI / 180);
  lineTo(
    cursorX + length * Math.cos(radians),
    cursorY + length * Math.sin(radians)
  );
  // desiredLength = length;
  // drawLineAnimated();
}

function drawLineAnimated() {
  lineTo(cursorX + Math.cos(radians), cursorY + Math.sin(radians));
  currentLength++;
  if (currentLength < desiredLength) {
    window.requestAnimationFrame(drawLineAnimated);
  } else {
    //reset the lengths now that the drawing is done
    currentLength = 0;
    desiredLength = 0;
  }
}

function resetAngle() {
  currentAngle = 0;
}
function turn(degrees) {
  currentAngle += degrees;
  // ctx.rotate(degrees * (Math.PI/180));
}

function turnRight(degrees) {
  currentAngle += degrees;
  // ctx.rotate(degrees * (Math.PI/180));
}

function turnLeft(degrees) {
  currentAngle -= degrees;
  // ctx.rotate(degrees * (Math.PI/180));
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
  // ctx.fillRect
  ctx.fillStyle = getNewColor();
}

function changeStrokeColor() {
  ctx.strokeStyle = getNewColor();
}

function drawTriangle() {
  ctx.beginPath();
  ctx.moveTo(125, 125);
  ctx.lineTo(125, 45);
  //ctx.lineTo(45, 125);
  ctx.closePath();
  ctx.stroke();
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

function assignment1() {
  var txt1 =
    "<section><p class='text-center'>Create a square at (50, 50), 50 px wide.</p></section>"; // Create element with HTML
  $("body").append(txt1);

  ctx.strokeStyle = "grey";
  for (var i = 0; i < 4; i++) {
    drawLine(50);
    turn(90);
  }
  ctx.strokeStyle = "black";
}

function assignment2() {
  var txt1 =
    "<section><p class='text-center'>Create a square at (50, 50), 50 px wide. Create 5 adjoining squares.</p></section>"; // Create element with HTML
  $("body").append(txt1);

  ctx.strokeStyle = "grey";
  for (var j = 0; j < 5; j++) {
    for (var i = 0; i < 4; i++) {
      drawLine(50);
      turn(90);
    }
    moveTo(cursorX + 50, cursorY + 50);
  }

  ctx.strokeStyle = "black";
}

function assignment3() {
  var txt1 =
    "<section><p class='text-center'>Create a triange at (50, 50), 50 px side. Create another triangle on top of it. </p></section>"; // Create element with HTML
  $("body").append(txt1);

  ctx.strokeStyle = "grey";
  for (var j = 0; j < 1; j++) {
    for (var i = 0; i < 3; i++) {
      drawLine(50);
      turnLeft(120);
    }
    // moveTo(cursorX + 50, cursorY + 50);
    for (var i = 0; i < 3; i++) {
      drawLine(50);
      turnRight(120);
    }
    moveTo(cursorX + 50, cursorY + 50);
  }

  ctx.strokeStyle = "black";
}

function assignment3b() {
  var txt1 =
    "<section><p class='text-center'>Create a triange at (50, 50), 50 px side. Create another triangle on top of it. Do it 5 times, every time moving 50px to the right, and 50 px to the bettom.</p></section>"; // Create element with HTML
  $("body").append(txt1);

  ctx.strokeStyle = "grey";
  for (var j = 0; j < 5; j++) {
    for (var i = 0; i < 3; i++) {
      drawLine(50);
      turnLeft(120);
    }
    // moveTo(cursorX + 50, cursorY + 50);
    for (var i = 0; i < 3; i++) {
      drawLine(50);
      turnRight(120);
    }
    moveTo(cursorX + 50, cursorY + 50);
  }

  ctx.strokeStyle = "black";
}

//Soccerfield
function assignment4() {
  var txt1 =
    "<section><p class='text-center'>Create a soccer field. 300px wide, 400px long. A line in the center, and a 100 x 50 rectangle at the top and bottom. </p></section>";
  $("body").append(txt1);

  ctx.strokeStyle = "grey";
  moveTo(100, 100);
  for (var i = 0; i < 2; i++) {
    drawLine(300);
    turnRight(90);
    drawLine(400);
    turnRight(90);
  }

  moveTo(200, 100);
  for (var i = 0; i < 2; i++) {
    drawLine(100);
    turnRight(90);
    drawLine(50);
    turnRight(90);
  }

  moveTo(100, 300);
  drawLine(300);

  // moveTo(250, 267.5);
  // for (var i = 0; i < 360; i++) {
  //   drawLine(50/90);
  //   turnRight(1);
  // }

  moveTo(200, 500);
  for (var i = 0; i < 2; i++) {
    drawLine(100);
    turnLeft(90);
    drawLine(50);
    turnLeft(90);
  }
  ctx.strokeStyle = "black";
}

//Hexagon
function assignment5() {
  var txt1 =
    "<section><h1 class='text-center'>Use One Loop</h1><p class='text-center'>Create a Hexagon at (200, 200).</p></section>";
  $("body").append(txt1);

  ctx.strokeStyle = "grey";
  moveTo(200, 200);
  drawLine(50);
  turn(60);
  drawLine(50);
  turn(60);
  drawLine(50);
  turn(60);
  drawLine(50);
  turn(60);
  drawLine(50);
  turn(60);
  drawLine(50);
  turn(60);
  ctx.strokeStyle = "black";
}

function assignment6() {
  var txt1 =
    "<section><h1 class='text-center'>Use Loop Inside A Loop</h1><p class='text-center'>Create a Hexagon at (100, 100). Add 3  more hexagons next to it.</p></section>";
  $("body").append(txt1);

  var x = 100;
  var y = 100;

  ctx.strokeStyle = "grey";

  for (var i = 0; i < 4; i++) {
    moveTo(x, y);
    drawLine(50);
    turn(60);
    drawLine(50);
    turn(60);
    drawLine(50);
    turn(60);
    drawLine(50);
    turn(60);
    drawLine(50);
    turn(60);
    drawLine(50);
    turn(60);
    x = x + 100;
  }
  ctx.strokeStyle = "black";
}

function assignment7() {
  var txt1 =
    "<section><h1 class='text-center'>Use Loop Inside A Loop, Inside A Loop</h1><p class='text-center'>Create a Hexagon at (200, 200). Create rows of hexagons, 100 px apart.</p></section>";
  $("body").append(txt1);

  var x = 100;
  var y = 100;

  ctx.strokeStyle = "grey";

  for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 4; i++) {
      moveTo(x, y);
      drawLine(50);
      turn(60);
      drawLine(50);
      turn(60);
      drawLine(50);
      turn(60);
      drawLine(50);
      turn(60);
      drawLine(50);
      turn(60);
      drawLine(50);
      turn(60);
      x = x + 100;
    }
    x = 100;
    y = y + 100;
  }

  ctx.strokeStyle = "black";
}

function assignment7b() {
  var txt1 =
    "<section><h1 class='text-center'>Use Loop Inside A Loop, Inside A Loop</h1><p class='text-center'>Create a Hexagon at (200, 200). Create rows of hexagons, 100 px apart.</p></section>";
  $("body").append(txt1);

  var x = 100;
  var y = 100;

  ctx.strokeStyle = "grey";

  for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 4; i++) {
      moveTo(x, y);
      for (var k = 0; k < 5; k++) {
        drawLine(50);
        turn(72);
      }
      x = x + 100;
    }
    x = 100;
    y = y + 100;
  }

  ctx.strokeStyle = "black";
}

function assignment8() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Create a function to print fibonacci series, where first two numbers are 1 and 1, and after that each number is the sum of last two numbers. So, the series is - 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ... Use window.setInterval() to call your fibonaacci function eeverry 1000ms</p></section>";
  $("body").append(txt1);

  window.setInterval(fibonacci, 1000);
  var num1, num2, num3;
  num1 = 0;
  num2 = 1;
  num3 = 1;

  function fibonacci() {
    printText(num3);
    num1 = num2;
    num2 = num3;
    num3 = num1 + num2;
  }
}

function assignment9() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Create a step</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";

  moveTo(50, 50);
  drawLine(50);
  turn(90);
  drawLine(50);
  turn(90);

  turn(180);

  ctx.strokeStyle = "black";
}

function assignment10() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Create FOUR steps</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";

  moveTo(50, 50);
  for (var i = 0; i < 4; i++) {
    drawLine(50);
    turnRight(90);
    drawLine(50);
    turnLeft(90);
  }

  ctx.strokeStyle = "black";
}

function assignment11() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Create a step box</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";

  moveTo(50, 50);
  for (var i = 0; i < 4; i++) {
    drawLine(50);
    turnRight(90);
    drawLine(50);
    turnLeft(90);
  }

  turnRight(180);
  drawLine(200);
  turnRight(90);
  drawLine(200);
  turnRight(90);

  ctx.strokeStyle = "black";
}

function assignment12() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Create two step boxes, oriented differently.</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";

  moveTo(300, 50);
  for (var i = 0; i < 4; i++) {
    drawLine(50);
    turnRight(90);
    drawLine(50);
    turnLeft(90);
  }

  turnRight(180);
  drawLine(200);
  turnRight(90);
  drawLine(200);
  turnRight(90);

  moveTo(500, 250);
  turnRight(90);
  for (var i = 0; i < 4; i++) {
    drawLine(50);
    turnRight(90);
    drawLine(50);
    turnLeft(90);
  }

  turnRight(180);
  drawLine(200);
  turnRight(90);
  drawLine(200);
  turnRight(90);

  turnRight(270);

  ctx.strokeStyle = "black";
}

function assignment13() {
  ctx.strokeStyle = "grey";

  var x, y;

  x = 50;
  y = -150;

  for (var j = 0; j < 4; j++) {
    if (j < 2) {
      x = x + 200;
    } else {
      x = x - 200;
    }
    if (j < 3) {
      y = y + 200;
    } else {
      y = y - 200;
    }

    moveTo(x, y);
    for (var i = 0; i < 4; i++) {
      drawLine(50);
      turnRight(90);
      drawLine(50);
      turnLeft(90);
    }

    turnRight(180);
    drawLine(200);
    turnRight(90);
    drawLine(200);
    turnRight(90);

    turnRight(90);
  }

  resetAngle();
  ctx.strokeStyle = "black";
}

function assignment14a() {
  var txt1 = "<section><h1></h1><p class='text-center'></p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";

  moveTo(50, 500);
  for (var j = 0; j < 1; j++) {
    for (var i = 0; i < 4; i++) {
      drawLine(50);
      turnRight(90);
      drawLine(50);
      turnLeft(90);
    }

    drawLine(100);
    turnLeft(90);
  }

  resetAngle();
  ctx.strokeStyle = "black";
}

function assignment14b() {
  var txt1 = "<section><h1></h1><p class='text-center'></p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";

  moveTo(50, 500);
  for (var j = 0; j < 2; j++) {
    for (var i = 0; i < 4; i++) {
      drawLine(50);
      turnRight(90);
      drawLine(50);
      turnLeft(90);
    }

    drawLine(100);
    turnLeft(90);
  }

  resetAngle();
  ctx.strokeStyle = "black";
}

function assignment14c() {
  var txt1 = "<section><h1></h1><p class='text-center'></p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";

  moveTo(50, 500);
  for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 4; i++) {
      drawLine(50);
      turnRight(90);
      drawLine(50);
      turnLeft(90);
    }

    drawLine(100);
    turnLeft(90);
  }

  resetAngle();
  ctx.strokeStyle = "black";
}

function assignment15a() {
  var txt1 = "<section><h1></h1><p class='text-center'></p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";

  moveTo(200, 200);

  for (var i = 0; i < 1; i++) {
    moveTo(200, 200);
    drawLine(50);
    turn(30);
  }

  resetAngle();
  ctx.strokeStyle = "black";
}

function assignment15b() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 2, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";

  moveTo(200, 200);

  for (var i = 0; i < 2; i++) {
    moveTo(200, 200);
    drawLine(50);
    turn(30);
  }

  resetAngle();
  ctx.strokeStyle = "black";
}

function assignment15c() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 3, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";

  moveTo(200, 200);

  for (var i = 0; i < 3; i++) {
    moveTo(200, 200);
    drawLine(50);
    turn(30);
  }

  resetAngle();
  ctx.strokeStyle = "black";
}

function assignment15d() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";

  moveTo(200, 200);

  for (var i = 0; i < 12; i++) {
    moveTo(200, 200);
    drawLine(50);
    turn(30);
  }

  resetAngle();
  ctx.strokeStyle = "black";
}

function assignment16a() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 50;
  var y = 50;
  var count = 1;
  for (var k = 0; k < 1; k++) {
    for (var j = 0; j < 1; j++) {
      for (var i = 0; i < 4; i++) {
        drawLine(100);
        turnRight(90);
      }
    }
    moveTo((x = 50), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment16b() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 50;
  var y = 50;
  var count = 1;
  for (var k = 0; k < 1; k++) {
    for (var j = 0; j < 3; j++) {
      for (var i = 0; i < 4; i++) {
        drawLine(100);
        turnRight(90);
      }
      moveTo((x = x + 100), y);
    }
    moveTo((x = 50), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment16c() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 50;
  var y = 50;
  var count = 1;
  for (var k = 0; k < 3; k++) {
    for (var j = 0; j < 3; j++) {
      for (var i = 0; i < 4; i++) {
        drawLine(100);
        turnRight(90);
      }
      moveTo((x = x + 100), y);
    }
    moveTo((x = 50), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment16d() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 50;
  var y = 50;
  var count = 1;
  for (var k = 0; k < 3; k++) {
    for (var j = 0; j < 3; j++) {
      for (var i = 0; i < 4; i++) {
        drawLine(100);
        turnRight(90);
      }
      moveTo(x + 50, y + 50);
      //printTextAtXY(count++);

      drawCircle();

      moveTo((x = x + 100), y);
    }
    moveTo((x = 50), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment16e() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 50;
  var y = 50;
  var count = 1;
  for (var k = 0; k < 3; k++) {
    for (var j = 0; j < 3; j++) {
      for (var i = 0; i < 4; i++) {
        drawLine(100);
        turnRight(90);
      }
      moveTo(x + 50, y + 50);
      //printTextAtXY(count++);
      if (j == 1) {
        drawSquare();
      } else {
        drawCircle();
      }

      moveTo((x = x + 100), y);
    }
    moveTo((x = 50), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment17() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 100;
  var y = 100;
  moveTo(x, y);

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      for (var k = 0; k < 3; k++) {
        drawLine(50);
        turnRight(120);
      }

      moveTo((x = x + 100), y);
    }
    moveTo((x = 100), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment17a() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 100;
  var y = 100;
  moveTo(x, y);

  for (var row = 0; row < 4; row++) {
    for (var col = 0; col < 4; col++) {
      if (row % 2) {
        //Triangle
        for (var k = 0; k < 3; k++) {
          drawLine(50);
          turnRight(120);
        }
      } else {
        //Square
        for (var k = 0; k < 4; k++) {
          drawLine(50);
          turnRight(90);
        }
      }

      moveTo((x = x + 100), y);
    }
    moveTo((x = 100), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment17b() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 100;
  var y = 100;
  moveTo(x, y);

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (j % 2) {
        for (var k = 0; k < 3; k++) {
          drawLine(50);
          turnRight(120);
        }
      } else {
        for (var k = 0; k < 4; k++) {
          drawLine(50);
          turnRight(90);
        }
      }

      moveTo((x = x + 100), y);
    }
    moveTo((x = 100), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment17c() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 100;
  var y = 100;
  moveTo(x, y);

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (i % 2 || j % 2) {
        //Triangle
        for (var k = 0; k < 3; k++) {
          drawLine(50);
          turnRight(120);
        }
      } else {
        //Square
        for (var k = 0; k < 4; k++) {
          drawLine(50);
          turnRight(90);
        }
      }

      moveTo((x = x + 100), y);
    }
    moveTo((x = 100), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment17d() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 100;
  var y = 100;
  moveTo(x, y);

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (i == j) {
        for (var k = 0; k < 3; k++) {
          drawLine(50);
          turnRight(120);
        }
      } else {
        for (var k = 0; k < 4; k++) {
          drawLine(50);
          turnRight(90);
        }
      }

      moveTo((x = x + 100), y);
    }
    moveTo((x = 100), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment18() {
  var x = 21;

  moveTo(100, 100);
  if (x % 3 == 1) {
    drawSquare(50);
  } else {
    drawCircle();
  }
}

function assignment19() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 100;
  var y = 100;
  moveTo(x, y);

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      for (var k = 0; k < 6; k++) {
        drawLine(25);
        turnRight(60);
      }

      moveTo((x = x + 100), y);
    }
    moveTo((x = 100), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment19a() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 100;
  var y = 100;
  moveTo(x, y);

  for (var row = 0; row < 4; row++) {
    for (var col = 0; col < 4; col++) {
      if (row % 2) {
        //Triangle
        for (var k = 0; k < 6; k++) {
          drawLine(25);
          turnRight(60);
        }
      } else {
        //Square
        for (var k = 0; k < 4; k++) {
          drawLine(25);
          turnRight(90);
        }
      }

      moveTo((x = x + 100), y);
    }
    moveTo((x = 100), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment19b() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 100;
  var y = 100;
  moveTo(x, y);

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (j % 2) {
        //Triangle
        for (var k = 0; k < 6; k++) {
          drawLine(25);
          turnRight(60);
        }
      } else {
        //Square
        for (var k = 0; k < 4; k++) {
          drawLine(25);
          turnRight(90);
        }
      }

      moveTo((x = x + 100), y);
    }
    moveTo((x = 100), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment19c() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 100;
  var y = 100;
  moveTo(x, y);

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (i + j == 3) {
        //Triangle
        for (var k = 0; k < 6; k++) {
          drawLine(25);
          turnRight(60);
        }
      } else {
        //Square
        for (var k = 0; k < 4; k++) {
          drawLine(25);
          turnRight(90);
        }
      }

      moveTo((x = x + 100), y);
    }
    moveTo((x = 100), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment19d() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 100;
  var y = 100;
  moveTo(x, y);

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (i == j) {
        //Triangle
        for (var k = 0; k < 6; k++) {
          drawLine(25);
          turnRight(60);
        }
      } else {
        //Square
        for (var k = 0; k < 4; k++) {
          drawLine(25);
          turnRight(90);
        }
      }

      moveTo((x = x + 100), y);
    }
    moveTo((x = 100), (y = y + 100));
  }

  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}

function assignment20() {
  var txt1 =
    "<section><h1></h1><p class='text-center'>Start at (200, 200), and create 12, 50px lines at 30 degrees</p></section>";
  $("body").append(txt1);
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";

  var x = 50;
  var y = 200;
  window.setInterval(game, 1000);

  function game() {
    // clearCanvas();
    drawCircle(20, (x = x + 50), y);
    // if (x > 450) {
    //   x = 50;
    //   y += 50;
    // }
  }
  resetAngle();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
}
