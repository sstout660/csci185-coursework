function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    let y = 0;
    let x = 0;
    let r = 50;
    noFill();
    while(r<=1000) {
        fill('red');
        circle(100,y,r);
        fill('yellow');
        circle(500,y,r);
        fill('green');
        circle(900,y,r);
        y+=10;
        x+=1;
        r+=10;

    }


    drawGrid(canvasWidth, canvasHeight);
}

