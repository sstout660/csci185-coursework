const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let xLocation = 0

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // frameRate(2);
    
    fill("#08415c");

    let i = 0;
    
    while(i<50) {
        
         let x = randomInt(-100, canvasWidth+100) ;
    let y = randomInt(-100, canvasHeight+100) ;
    let size = randomFloat(3000, 10000);

    let xCircle = randomInt(0, canvasWidth) ;
    let yCircle = randomInt(0, canvasHeight) ;
    let sizeCircle = randomFloat(20, 100);
    
noFill();
strokeWeight(5);
stroke(colors[randomInt(0,4)]);

    circle(xCircle, yCircle, sizeCircle);
    rect(x,y,size);
    // triangle(x, y - size / 2, 
    // x - size / 2.25, y + size / 4.3,
    // x + size / 2.25, y + size / 4.3);

    
    i ++;

    }
   
    
}


// // anything that you want to animate goes in this function:  
// function draw() {
//     clear();

// }


 
// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

