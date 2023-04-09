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
    // drawGrid(canvasWidth, canvasHeight);
}



document.addEventListener('keydown', moveController);
function moveController(ev) {
    console.log(ev.code);
    
    if(ev.code == 'ArrowUp'){
        player.y -=5;
    } 
    

    if(ev.code == 'ArrowDown'){
        player.vY +=5;
    }

    if(ev.code == 'ArrowLeft') {
            player.vX -=5;
        }

    if(ev.code == 'ArrowRight'){
       player.vX +=5;
    } 

    if(ev.code == 'Space'){
       
    }
}

while(player.vX != 0) {
    player.x += 1;

}

function draw() {
    
    frameRate(60);
    clear();
    fill:('red');
    drawPlayer();
    
    strokeWeight(4);
    // noFill();
    rect(0,550,1000,100);

    
}

 

function drawPlayer() {
    fill:('red');
    rect(player.x,player.y,player.width,player.height);
}


//fill not working
// Ignore key looping delay
//vX not updating with keydown