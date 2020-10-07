var ctx = $("#canvas")[0].getContext('2d');
var score = 0;

ctx.fillStyle = 'rgb(0, 200 , 0)';
ctx.fillRect(0, 0, 400, 600);

drawCircle(10);
$("#score").text(score);

function drawCircle(radius) {
  ctx.beginPath();
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.arc(200, 300, 8, 0, 2*Math.PI, 0);
  ctx.fill();
}
