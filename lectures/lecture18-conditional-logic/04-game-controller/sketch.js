let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

let ax = 0
let ay = 0

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

   
}


 setInterval(moveObject, 0 );
    
   
    function moveObject() {
     x+=ax;
     y-=ay;

    //  if(ev.code !== 'ArrowUp') {
    //     ay-=1;
    //  }
     if(ay<=0){
        ay=0;
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


// const min = 0;
// const max = 100;

// // Clamp number between two values with the following line:
// const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// clamp(-50, min, max); // Will return: 0
// clamp(50, min, max);  // Will return: 50
// clamp(500, min, max); // Will return: 100