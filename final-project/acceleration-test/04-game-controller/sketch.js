let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

let ax = 0
let ay = 0

const canvasWidth = 1000;
const canvasHeight = 800; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}








//KEYBOARD INPUT//
///////////////////
///////////////////
setInterval(moveController, 0);
function moveController(ev) {
    console.log(ev.code);
    
    if(ev.code == 'ArrowUp'){
        ay =0.5;
    } else {
        ay=-0.5;
    }

    if(ev.code == 'ArrowDown'){
        ay = -0.5;
    }

    if(ev.code == 'ArrowLeft'){
        
    } 

    if(ev.code == 'ArrowRight'){
        axr+=2;
        x+=axr;
    } else {
        axr=0;
    }

    if(ev.code == 'Space'){
        width += 1;
    }

    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
    }




// Add event listener on keydown
document.addEventListener('keydown', moveController);

//////////////////////////
//////////////////////////

