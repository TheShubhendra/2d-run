class Ball{
  constructor(x,y){
    this.xPos = x;
    this.yPos = y;
    this.ySpeed = 0;
    this.gravity = 1;
  }
  jump(){
    if(this.yPos >= height -80){
       this.ySpeed = -11;
    }
  }
  show(){
    fill("#cea333");
    circle(this.xPos,this.yPos,20);
  }
  move(){
    this.yPos = constrain(this.yPos + this.ySpeed,20,280);
    this.ySpeed+=this.gravity;
  }
  hit(obs){
    if(this.yPos==obs.yPos && this.xPos == obs.yPos){
      return true;
    }else{
      return false;
    }
    
  }
}

class Obstacles {
  constructor(x){
    
    this.xPos = x;
    this.yPos = floor(random(250,275));
    this.h = 290 - this.yPos;
    this.xSpeed = 3;
  }
  show(){
    fill("blue");
    rect(this.xPos,this.yPos,10,this.h);
  }
  move(){
    this.xPos-=this.xSpeed;
  }
  hit(ball){
     if(this.xPos<=25 && ball.yPos>=this.yPos){
      
      return true;
    }else{
      return false;
    }
  }
}