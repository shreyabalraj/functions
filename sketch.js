var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(300, 400, 150, 180);
  fixedRect.shapeColor = "purple";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 180, 130);
  movingRect.shapeColor = "purple";
  movingRect.debug = true
  o1=createSprite(100,100,50,50);
  o2=createSprite(200,100,50,50);
  o3=createSprite(300,100,50,50);
  o4=createSprite(400,100,50,50);
  o5=createSprite(500,100,50,50);
  

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,o1)){
    movingRect.shapeColor = "red";
    o1.shapeColor = "red";
 }
 else{
    movingRect.shapeColor = "purple";
    o1.shapeColor = "purple";
 }

 if( isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
 }
 else{
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
 }

  drawSprites();
}
