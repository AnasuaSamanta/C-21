var fixedRect, movingRect,slimy,jiggly;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;


  slimy = createSprite(200,300,50,30);
  slimy.shapeColor = "yellow";
  slimy.debug = true;
  slimy.velocityY = -2;

  jiggly = createSprite(200,280,50,30);
  jiggly.shapeColor = "green";
  jiggly.debug = true;
  jiggly.velocityY = 2;


}

function draw() {
  background(0,0,0);  
bounceoff (movingRect,fixedRect)
bounceoff (slimy,jiggly);
  
  drawSprites();
}
