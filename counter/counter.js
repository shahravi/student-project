var count = 0;

drawCanvas(400, 300);

//Call the function every 1000ms
window.setInterval(printEven, 1000);

function printNegative() {


}
function printPrime() {

}

function printSix() {

}

function printSeven() {
  if (count % 7 == 0) {
    printText(count);
  }
  count = count + 1;
}

function printFive() {
  if (count % 5 == 0) {
    printText(count);
  }
  count = count + 1;
}

function printEven() {
  if (count % 2 == 0) {
    if (count < 21) {
      printSeries(count);
    }
  }

  count = count + 1;
}




























function printCounter() { //DEFINED A FUNCTION
  printText(count);
  count++;
  if (count == 10) {
    count = 0;
  }
}

function printCounterInWords() {
  if (count == 0) {
    printText("Zero");
  }
  if (count == 1) {
    printText("One");
  }
  if (count == 2) {
    printText("Two");
  }
  count++;
  if (count == 3) {
    count = 0;
  }
}

function drawRectangle() {
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, 400, 300);
}

function changeRectangleColors() {
    if (count == 0) {
     ctx.fillStyle = 'red';
    }

    if (count == 1) {
     ctx.fillStyle = 'green';
    }

    if (count == 2) {
     ctx.fillStyle = 'blue';
    }


    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    count++;

    if (count > 2) {
      count = 0;
    }
  }
