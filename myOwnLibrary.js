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
  
  