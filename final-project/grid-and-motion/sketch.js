// character position and velocity
let player = {
    x: 300,
    y: 300,
    vX: 0,
    vY: 0,
    width: 20,
    height: 20,
    jumpHeight: 50
}


function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(1000, 650);

    strokeWeight(5);
    rect(0,550,1000,100);

    strokeWeight(0);
    fill('red');
    


    drawGrid(canvasWidth, canvasHeight);
}
// Draw function doesn't work outside of setup
// Set timer/refresh rate
// Ignore key looping delay

function moveController(ev) {
    console.log(ev.code);
    
    if(ev.code == 'ArrowUp'){
        player.y -=5;
    } 
    

    if(ev.code == 'ArrowDown'){
        
    }

    if(ev.code == 'ArrowLeft'){
        
    } 

    if(ev.code == 'ArrowRight'){
       
    } 

    if(ev.code == 'Space'){
       
    }

    clear();
    // fill(fillColor);
    // circle(x, y, width);
    // drawGrid(canvasWidth, canvasHeight);
    }

function draw() {
    frameRate(30);
    drawPlayer();
    
}

function drawPlayer() {
    fill:('red');
    rect(player.x,player.y,player.width,player.height);
}








document.addEventListener('keydown', moveController);


