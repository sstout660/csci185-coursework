// character position and velocity
let player = {
    x: 50,
    y: 550,
    vX: 0,
    vY: 0,
    width: 20,
    height: 20,
    jumpHeight: 5,
    isGrounded: false,
    friction:0,
    wallJumpRight:false,
    wallJumpLeft:false
    // mass:5
}   
let menu = 1;

function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 

    createCanvas(1000, 650);
}

   
    
 

function draw() {
    
    frameRate(60);
    clear();

 
 
  
/////////////////////***Collision***////////////////////////////////////
   // Collison left
   for (let i = 0; i<platforms.length; i++) {
   if (platforms[i].x <= player.x + player.width
    && player.x <= platforms[i].x + platforms[i].width 
    && platforms[i].y <= player.y + player.height - 8
    && player.y <= platforms[i].y + platforms[i].height - 2
    && player.vX < 0) {
    player.vX = 0;
    player.x = platforms[i].x + platforms[i].width;
    player.wallJumpLeft = true;
    break;
    } else {
        player.wallJumpLeft = false;
    }

    //Collision Right
    if (platforms[i].x <= player.x + player.width
        && player.x <= platforms[i].x + platforms[i].width 
        && platforms[i].y <= player.y + player.height - 8
        && player.y <= platforms[i].y + platforms[i].height - 2
        && player.vX > 0) {
        player.vX = 0;
        player.x = platforms[i].x- player.width;
        player.wallJumpRight = true;
        break;
    } else {
        player.wallJumpRight = false;
    }

//Ground collision
    
    if (
        platforms[i].x <= player.x + player.width-1
        && player.x <= platforms[i].x + platforms[i].width-1
        && platforms[i].y <= player.y + player.height 
        && player.y <= platforms[i].y + platforms[i].height 
        && player.vY  > 0) {
            player.isGrounded = true;
            player.y = platforms[i].y - player.height;
            break;
    } else {
        player.isGrounded = false;
    }
    
    // Top collision 
        if (
            platforms[i].x <= player.x + player.width-1
        && player.x <= platforms[i].x + platforms[i].width-1
        && platforms[i].y <= player.y + player.height
        && player.y <= platforms[i].y + platforms[i].height+2
            && player.vY  < 0) {
                player.vY = 0;
                player.y = platforms[i].y + platforms[i].height;
                break;
            }
        
}

    
/////////////////////***Collision***////////////////////////////////////


//gravity
    if (player.isGrounded == false) {
        player.vY += 0.25;
      }
    if(player.wallJumpLeft && !player.isGrounded || player.wallJumpRight && !player.isGrounded) {
        player.vY *= 0.9;
      }

    if(player.isGrounded == true) {
        player.vY = 0;
        player.friction = 0.2;
    }

    



    if (keyIsDown(LEFT_ARROW) && player.isGrounded) {
        player.vX -= 0.5;
      }
    
    if (keyIsDown(RIGHT_ARROW) && player.isGrounded) {
        player.vX += 0.5
      }

      if (keyIsDown(LEFT_ARROW) && !player.isGrounded) {
        player.vX -= 0.2;
      }
    
    if (keyIsDown(RIGHT_ARROW) && !player.isGrounded) {
        player.vX += 0.2
      }

    if (keyIsDown(UP_ARROW) && player.isGrounded) {
        player.vY = -player.jumpHeight;
    }
    if (keyIsDown(UP_ARROW) && player.wallJumpRight) {
        player.vY = -player.jumpHeight*0.8;
        player.vX = -player.jumpHeight*0.8;
    }
    if (keyIsDown(UP_ARROW) && player.wallJumpLeft) {
        player.vY = -player.jumpHeight*0.8;
        player.vX = player.jumpHeight*0.8;
    }

    // Speed cap
    if (player.vX > 8) {
        player.vX = 8;
    } 
    if (player.vX < -8) {
        player.vX = -8;
    }
    
    if (!keyIsDown(RIGHT_ARROW) && player.vX > 0  && player.isGrounded) {
        player.vX -= (player.vX * player.friction);
    }

    if (!keyIsDown(LEFT_ARROW) && player.vX < 0 && player.isGrounded) {
        player.vX -= (player.vX * player.friction);
    }

    if(player.x<-8 || player.y < 0 || player.y > 650) {
        player.x = 50;
        player.y = 550;
        // winScreen();

    }
    if(player.x > 1000) {
        winScreen();
    }

    player.x += player.vX ;
    player.y += player.vY;


    
    drawPlayer();
    for (let i = 0; i<platforms.length; i++) {
        drawPlat(platforms[i].x,platforms[i].y,platforms[i].width,platforms[i].height);
    }

drawMenu();

}

let platforms = [
    {   
        // bottom
        x: 0,
        y: 575,
        width: 300,
        height: 75
    },

    {   
        x: 425,
        y: 600,
        width: 250,
        height: 75
    },

    {   
        x: 775,
        y: 575,
        width: 225,
        height: 75
    },

    {
        //right wall
        x: 1000,
        y: 100,
        width: 10,
        height: 550
    },

    {
        //top
        x:0,
        y:-10,
        width:1000,
        height: 10
    },

    {
        //left wall
        x:-10,
        y:0,
        width:10,
        height: 650
    },

    {
        x: 725,
        y: 375,
        width: 200,
        height:125
    },

    {
        x: 525,
        y: 375,
        width: 75,
        height: 15
    },

    {
        x: 375,
        y: 250,
        width: 15,
        height: 200
    },

    {
        x: 250,
        y: 475,
        width: 175,
        height: 15
    },

    {
        x: 150,
        y: 450,
        width: 50,
        height: 15
    },

    {
        x: 0,
        y: 425,
        width: 100,
        height: 15
    },

    {
        x: 75,
        y: 275,
        width: 75,
        height: 100
    },
    
    {
        x: 0,
        y: 0,
        width: 150,
        height: 225
    },

    {
        x: 225,
        y: 200,
        width: 15,
        height: 30
    },

    {
        x: 225,
        y: 125,
        width: 15,
        height: 30
    },

    {
        x: 550,
        y: 150,
        width: 25,
        height: 15
    },

    {
        x: 800,
        y: 100,
        width: 200,
        height: 15
    },


]

function drawPlat(x,y,width,height) {
    strokeWeight(4);
    noFill();
    rect(x,y,width,height);
}

function drawPlayer() {
    fill('red');
    strokeWeight(0);
    rect(player.x,player.y,player.width,player.height);
}

function drawMenu() {
    if (menu == 1) {
        fill('white');
        rect(0, 0, 1000, 650)
        fill(0);
        textSize(28);
        text('Use arrow keys to move',100,150);
        text('Jump while on a wall to perform a walljump',225,300);
        text('Make it to the exit to win!',550,450);
        fill('white')
        rect(850, 550, 100, 50)
        fill(0)
        text('Enter', 865, 585)
     }
     if (keyIsDown(ENTER)) {
        menu=0;
        console.log(menu);
     }
}
function winScreen() {
    const youWin = `<section class=win>
    <h1>Congratulations! You are now slightly more elevated!</h1>
    <h2>(It took you long enough...)</h2>
    </section>
    `
    document.querySelector('main').innerHTML = youWin;
}