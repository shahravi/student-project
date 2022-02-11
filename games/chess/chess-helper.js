function assignment1() {
  var txt1 = "<section><h1 class='text-center'>Draw a filled rectangle and an empty rectangle</p></section>";
  $("body").append(txt1);

  drawCanvas(500, 500, "a-1", true);
  // drawCanvas(1000, 800, "chess-area");
  drawAxis();
  ctx.fillStyle = "grey";
  ctx.strokeStyle = "grey";
  drawFilledRectangle(50, 50, 50, 0);
  drawRectangle(50, 50, 100, 0);
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";

  moveTo(0, 0);
}

function assignment2() {
  var txt1 = "<section><h1 class='text-center'>Repeat the pattern 4 times using a loop.</p></section>";
  $("body").append(txt1);

  drawCanvas(500, 500);
  drawAxis();
  ctx.fillStyle = "grey";
  ctx.strokeStyle = "grey";
  for (var i = 0; i < 4; i++) {
    moveTo(i * 50, 0);
    drawFilledRectangle(50, 50);
    i++;
    moveTo(i * 50, 0);
    drawRectangle(50, 50);
  }

  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
}

function assignment3() {
  var txt1 = "<section><h1 class='text-center'>Repeat the pattern 4 times using a loop.</p></section>";
  $("body").append(txt1);
  drawCanvas(900, 900);
  drawAxis();
  var baseX = 0;
  var baseY = 0;

  for (var i = 0; i < 8; i++) {
    if (i % 2) {
      drawFilledRectangle(50, 50, i * 50, 0);
    } else {
      drawRectangle(50, 50, i * 50, 0);
    }
  }
}

// export { drawCanvas, drawBackground, writeText, drawRectangle, drawFilledRectangle };
