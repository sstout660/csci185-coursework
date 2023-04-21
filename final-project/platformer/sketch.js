// character position and velocity
let player = {
    x: 300,
    y: 300,
    vX: 0,
    vY: 0,
    width: 20,
    height: 20,
    jumpHeight: 8,
    isGrounded: false,
    friction:0,
    // mass:5
}

function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 

    createCanvas(1000, 650);
}


function draw() {
    
    frameRate(60);
    clear();


/////////////////////***Collision***////////////////////////////////////
   // Collison right 
   for (let i = 0; i<platforms.length; i++) {
   if (platforms[i].x <= player.x + player.width
    && player.x <= platforms[i].x + platforms[i].width 
    && platforms[i].y <= player.y + player.height - 7
    && player.y <= platforms[i].y + platforms[i].height - 2
    && player.vX < 0) {
    player.vX = 0;
    player.x = platforms[i].x + platforms[i].width;
    break;
    }

    //Collision left 
    if (platforms[i].x <= player.x + player.width
        && player.x <= platforms[i].x + platforms[i].width 
        && platforms[i].y <= player.y + player.height - 7
        && player.y <= platforms[i].y + platforms[i].height - 2
        && player.vX > 0) {
        player.vX = 0;
        player.x = platforms[i].x- player.width;
        break;
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
        && player.y <= platforms[i].y + platforms[i].height
            && player.vY  < 0) {
                player.vY = 0;
                player.y = platforms[i].y + platforms[i].height;
                break;
            }
        
}

    
/////////////////////***Collision***////////////////////////////////////


    if (player.isGrounded == false) {
        player.vY += 0.25;
        
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

    if (player.vX > 10) {
        player.vX = 10;
    } 
    if (player.vX < -10) {
        player.vX = -10;
    }
    
    if (!keyIsDown(RIGHT_ARROW) && player.vX > 0  && player.isGrounded) {
        player.vX -= (player.vX * player.friction);
    }

    if (!keyIsDown(LEFT_ARROW) && player.vX < 0 && player.isGrounded) {
        player.vX -= (player.vX * player.friction);
    }


    player.x += player.vX ;
    player.y += player.vY;
    
    drawPlayer();
    for (let i = 0; i<platforms.length; i++) {
        drawPlat(platforms[i].x,platforms[i].y,platforms[i].width,platforms[i].height);
    }

}




let platforms = [
    {   
        x: 0,
        y: 550,
        width: 1000,
        height: 100
    },

    {
        x: 500,
        y: 450,
        width: 200,
        height:50
    },

    {
        x: 0,
        y: 410,
        width: 100,
        height: 50
    }

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