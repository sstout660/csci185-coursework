function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("lightgrey");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("tan")
    circle(520, 300, 100);
// (x,y,diameter)//
    // https://p5js.org/reference/#/p5/rect
    fill('tan')
    rect(300, 300, 200, 100);

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    point(110, 20);

    // https://p5js.org/reference/#/p5/text
    text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    fill('brown');
    ellipse(300, 300, 30, 100);
    
    fill('black');
    circle(500, 280, 10);

    fill('black');
    circle(540, 280, 10);

    fill('black');
    circle(520, 310, 30);

    fill('tan');
    circle(520, 310, 25);

    fill('tan');
    rect(500, 285, 35, 30);


stroke(0);
curve(5, 20, 73, 24, 73, 61, 15, 65);


    // fill('pink');
    // ellipse(520, 320, 15, 20);
    
    

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}