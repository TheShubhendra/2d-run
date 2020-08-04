 let ball;
 let obs = [];
 let collide;
 let score = 0;
 let highScore;
 let btn;
    function setup(){
      highScore = getItem("highScore")
      if (highScore ===  null ){
        highScore = 0;
      }
      ball = new Ball(20,width);
      //obs = new Obstacles();
      //frameRate(10);
      if (deviceOrientation==LANDSCAPE){
      createCanvas(windowWidth,windowHeight-100);}
      else{
createCanvas(windowWidth,windowHeight/2)
      }
      noStroke();
     obs.push(new Obstacles(width));
       
    }
    
    function draw(){
     background ("#000000");
     fill("green");
     rect(0,290,width,2);
     ball.show();
     ball.move();
     
     if (frameCount%50==0){
       obs.push(new Obstacles(width));
       
     }
      for (var i= obs.length-1; i>=0;i--){
       obs[i].show();
       obs[i].move();

       if(obs[0].hit(ball)){
         
         
         if (score>highScore){
           highScore = score;
         }
         storeItem("highScore",highScore);
         score = 0;

          textSize(50);
          fill("#f16767");

          textAlign(CENTER);
          text("Game Over",width/2,100);
         
        /* btn = createButton("Restart");
         btn.position((width/2)-20,(height/2)+40);*/
         noLoop();
       
        for (var o of obs){
         o.xPos = -20;
        }
       }
       if(obs[i].xPos<0){
         score+=1;
        obs.splice(i,1);
       }
      }
      textAlign(LEFT);
     textSize(15);
     fill("#b6f293");
     text("Score: "+str(score),50,50);
     fill("#a595ef");
     textAlign(RIGHT);
     text("High Score: "+str(highScore),width-50,50);
     
     if(touches.length>0){
       ball.jump();
      
     }
    }
    