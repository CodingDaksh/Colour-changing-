var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(200,100,70,20);
  rect1.shapeColor = "red";
  rect2 = createSprite(1000,600,70,50);
  rect2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "white";
}

else if (isTouching(movingRect,rect1)){
  movingRect.shapeColor = "yellow";
  rect1.shapeColor = "green";
}

else if (isTouching(movingRect,rect2)){
  movingRect.shapeColor = "yellow";
  rect2.shapeColor = "purple";
}
else {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  rect1.shapeColor = "red";
  rect2.shapeColor = "blue";

}
  
  drawSprites();
}

