var ball


function setup() {
  createCanvas(1300,650);
  ball = createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    ball.position.x = ball.position.x+1
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.position.x = ball.position.x-1
  }
  if(keyIsDown(UP_ARROW)){
    ball.position.y = ball.position.y-1
  }
  if(keyIsDown(DOWN_ARROW)){
    ball.position.y = ball.position.y+1
  }
  drawSprites()
}




