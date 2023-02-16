var mar, marImg;
var barco, barcoImg;


function preload(){
barcoImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
marImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(400,200)
  mar.addImage(marImg)
  mar.scale = 0.3
  mar.velocityX = -3

  barco = createSprite(200,250)
  barco.addAnimation("barco", barcoImg)
  barco.scale = 0.2
}

function draw() {
  background("blue");
  if (mar.x < -200) {
    mar.x = 400
  }



    drawSprites();

 
}
