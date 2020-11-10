
var movingRect, fixedRect;
var ball;
var table;
var chair;
var pen;
var ball1;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(200,200,30,60);
  movingRect.shapeColor = "red";

  ball = createSprite(300,180,20,20);
  ball.velocityX = 2;
  ball.velocityY = 0;

   chair = createSprite(200,100,10,50);
   table = createSprite(300,100,15,30);
   pen = createSprite(500,100,20,40);
   ball1 = createSprite(400,100,20,20);
   ball1.velocityY = 5;
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
    
  if(isTouching(chair,movingRect)){
    fixedRect.x = fixedRect.x + 50;
  }
  bounceOff(ball1,fixedRect);
  bounceOff(ball,fixedRect);
  drawSprites();

}

function isTouching(object1,object2){
  if((object1.x-object2.x)<(object2.width/2 + object1.width/2) && 
  (object2.x-object1.x) < (object2.width/2 + object1.width/2)&&
  (object2.y - object1.y)<(object2.height/2 + object1.height/2)&&
  (object1.y - object2.y)<(object2.height/2 + object1.height/2)){
    
    //tell yes
    return true;
    
  }else{
    //tell no
    return false;
  }
}

function bounceOff(object,target){
    if((target.x-object.x)<(object.width/2 + target.width/2) && 
    (object.x-target.x) < (object.width/2 + target.width/2)){
      
    object.velocityX = -object.velocityX;
  }

  if((object.y - target.y)<(object.height/2 + target.height/2)&&
    (target.y - object.y)<(object.height/2 + target.height/2)){
      object.velocityY = -object.velocityY;
  }
}

