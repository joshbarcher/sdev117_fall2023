const NUM_BOXES = 20;
const CAN_WIDTH = 500;
const CAN_HEIGHT = 500;
const BOX_SIZE = 30;
const RGB_MAX = 256;

//draw a scene of random colored boxes
let canvas = document.querySelector("#my-canvas");
let context = canvas.getContext("2d");

//draw something
/*let x = 100;
let y = 100;
let color = randomColor();*/

//draw a certain number of rows (adjust the y value for each iteration)
/*for (let j = 1; j <= 5; j++)
{
    //loop for each window in a single row (5 windows)
    for (let i = 1; i <= 5; i++)
    {
        drawBox(color, x, y, 30, 30);
        x += 40;
    }
}*/

drawLotsOfBoxes(20); //draw boxes that are 20 pixels wide
drawLotsOfBoxes(40); //draw boxes that are 40 pixels wide
drawLotsOfBoxes(60); //draw boxes that are 60 pixels wide

function drawLotsOfBoxes(theBoxSize)
{
    for (let i = 1; i <= NUM_BOXES; i++)
    {
        drawRandomBox(theBoxSize);
    }
}

//function definitions
function drawRandomBox(boxSize)
{
    //get a random color
    let color = randomColor();

    //generate a random position for each box
    let randomX = Math.random() * (CAN_WIDTH - boxSize); // [0, 500)
    let randomY = Math.random() * (CAN_HEIGHT - boxSize);

    //context.fillStyle = color;
    //context.fillRect(randomX, randomY, boxSize, boxSize);
    drawBox(color, randomX, randomY, boxSize, boxSize);
}

function drawBox(color, x, y, width, height)
{
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

function randomColor()
{
    const red = Math.random() * RGB_MAX; // [0, 256)
    const green = Math.random() * RGB_MAX;
    const blue = Math.random() * RGB_MAX;

    return `rgb(${red},${green},${blue})`;
}