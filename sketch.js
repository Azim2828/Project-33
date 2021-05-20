

var bg
var boyImage1,boyImage2
var boy1
var boy2
var ground
var snow,snowImage


function preload(){
  bg = loadImage("snow1.jpg")
  boyImage1 = loadImage("boy1.png")
  boyImage2 = loadImage("boy2.png")
  snowImage = loadImage("snow4.webp")
}

function setup() {



  createCanvas(1100,750);
 ground = createSprite(550,640,1100,10)
ground.visible = false


  boy1 = createSprite(400, 500, 60, 60);
  boy1.addImage(boyImage1)
  boy1.scale =0.11
 
  boy2 = createSprite(720,500,50,50)
  boy2.addImage(boyImage2)
  boy2.scale = 0.3



  
}
 
function draw() {
  background(bg); 


if(boy2.x>1000)
{
  boy2.velocityX=0
}

if(keyDown("LEFT_ARROW"))
{
  boy2.velocityX = -5
}

if(keyDown("RIGHT_ARROW"))
{
  boy2.velocityX = +5
}


  if(keyDown("space"))
  {
    boy1.velocityY = -10
  
   } 

   boy1.velocityY = boy1.velocityY + 0.5

   boy1.collide(ground)
   boy2.collide(ground)
   boy2.collide(boy1)

   if(frameCount %50 === 0 )
   {
 ice()
   }
  
  
  drawSprites();

    }    

  function ice()
  {
    snow = createSprite(random(100,1000),50,50,50)
    snow.addImage(snowImage)
    snow.scale = 0.12
    snow.velocityY = 5
    snow.lifetime = 140  
  }
