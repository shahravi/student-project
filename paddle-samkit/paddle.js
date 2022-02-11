var paddleX = 100;
var paddleY = 400;
var width = 50;
var height = 100;
var ballX = 50;
var ballY = 50;

drawCanvas(700, 1000);

window.setInterval(draw, 100);
function draw() {
  clearCanvas();
  drawCircle(20, ballX, ballY);
  //ballX = ballX + 10;
  ballY = ballY - 10;
  drawRectangle(paddleX, 800, 100, 10);
  paddleX = paddleX - 10;
}
