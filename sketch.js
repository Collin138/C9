
var ball; 



function setup() {
  createCanvas(400,400);

  ball=createSprite(200,200,40,40)
}





function draw() 
{
  background("green");

  if (keyDown("right")){
   ball.x=ball.x+2
  }

  if (keyDown("left")){
    ball.x=ball.x-2
   }

   if (keyDown("up")){
    ball.y=ball.y-2
   }

   if (keyDown("down")){
    ball.y=ball.y+2
   }

  drawSprites()
}




