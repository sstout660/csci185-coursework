// Setup function MUST be named setup to use p5.js
function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(100,100,'red');
    makeCreature(500,100,'blue');


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x,y,fillColor) {
    // your creature:
    fill(fillColor);
    circle(x, y, 300);

    fill('black');
    ellipse(x-50,y-50, 30, 40);
    ellipse(x+50,y-50, 30, 40);

}

function mouseClicked() {
    makeCreature(mouseX,mouseY,'green');
}
function mouseDragged() {
    makeCreature(mouseX,mouseY,'white');
}