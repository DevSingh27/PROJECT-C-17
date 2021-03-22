//for creating variables
var ship, ship_moving, ship_light;
var sea, sea_in;
            
//for loading animations
function preload(){
  ship_moving = 
    loadAnimation("ship-1.png","ship-2.png","ship-1.png");
  
  ship_light = 
    loadAnimation("ship-3.png","ship-4.png","ship-3.png");

  sea_in = loadImage("sea.png");
}

function setup(){

//for creating canvas
 createCanvas(500,500);

//for making sea sprite
  sea = createSprite(200,200);
  sea.addImage("sea", sea_in);
  sea.velocityX = -5;  
  
//for creating ship sprite
  ship = createSprite(200,280,100,100);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.4;
}

function draw(){

//to clear the screen
  background(220);

//to make ship overlap sea
  ship.overlap(sea);

//to add ship with light animation 
if(keyDown("space")){
  ship.addAnimation("light",ship_light);
 }
  
//to make the sea image loop
  if(sea.x < 0){
    sea.x = sea.width / 2;
  }
  
//to draw the sprites  
  drawSprites();
}