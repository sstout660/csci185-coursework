let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

let axr = 0;
let axl = 0;
let ayu = 0;
let ayd = 0;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

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
function moveController(ev) {
    console.log(ev.code);
    
    if(ev.code == 'ArrowUp'){
        ayu+=-2;
        y+=ayu;
    } else {
        ayu = 0;
    }

    if(ev.code == 'ArrowDown'){
        ayd+=2;
        y+=ayd;
    } else {
        ayd = 0;
    }

    if(ev.code == 'ArrowLeft'){
        axl+=-2;
        x+=axl;
    } else {
        axl = 0
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

    // redraw circle:
    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}




// Add event listener on keydown
document.addEventListener('keydown', moveController);

//////////////////////////
//////////////////////////