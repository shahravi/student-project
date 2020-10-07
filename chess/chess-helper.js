var canvasWidth, canvasHeight;
var ctx; //= $("#canvas")[0].getContext('2d');
var cursorX = 5;
var cursorY = 50;

function drawCanvas(width, height) {
  canvasWidth = width;
  canvasHeight = height;
  //id = "#" + areaId;
  $("#chess-area").append("<canvas id=\"chess\" width=\"" + width + "\" height=\"" + height + "\" class=\"game\"></canvas>");
  ctx = $("#chess")[0].getContext('2d');
  ctx.font = '48px serif';
}

function drawBackground() {
  ctx.fillStyle = 'rgb(0, 0, 100)';
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

function assignment1() {
  var txt1 = "<section><h1 class='text-center'>Draw a filled rectangle and an empty rectangle</p></section>";
  $("body").append(txt1);

  drawCanvas(500, 500);
  ctx.fillStyle = 'grey';
  ctx.strokeStyle = 'grey';
  drawFilledRectangle(50, 0, 50, 50);
  drawRectangle(100, 0, 50, 50);
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'black';

}

function assignment2() {
  var txt1 = "<section><h1 class='text-center'>Repeat the pattern 4 times using a loop.</p></section>";
  $("body").append(txt1);

  drawCanvas(500, 500);
  ctx.fillStyle = 'grey';
  ctx.strokeStyle = 'grey';
  for (var i = 0; i < 4; i++) {
    drawFilledRectangle(i*50, 0, 50, 50);
    i++;
    drawRectangle(i*50, 0, 50, 50);
  }

  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'black';

}

function assignment3() {
  drawCanvas(900, 900);

  var baseX = 0;
  var baseY = 0;

  for (var i = 0; i < 8; i++) {
    if (i%2) {
      drawFilledRectangle(i*50, 0, 50, 50);
    } else {
      drawRectangle(i*50, 0, 50, 50);
    }
  }

}


// export { drawCanvas, drawBackground, writeText, drawRectangle, drawFilledRectangle };
