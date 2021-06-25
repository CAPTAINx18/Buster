var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background, bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage, balloon_select, score, arrowG, redB, greenB, blueB, pinkB;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 500);
  
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0;
  
  arrowG = new Group();
  redB = new Group();
  pinkB = new Group();
  greenB = new Group();
  blueB = new Group();
  
}

function draw() {
  
    background.velocityX = -3 

  
    if (background.x < 0){
      background.x = background.width/2;
    }

  bow.y = World.mouseY
  
  if (keyWentDown("space")) {
  createArrow();
  }
  
  var ballon_select = Math.round(random(1,4));
  console.log(balloon_select);
  
  if (World.frameCount % 80 === 0){
    
    if (ballon_select === 1){
      redBalloon ();
    }else if (ballon_select === 2){
      greenBalloon (); 
    }else if (ballon_select === 3){
      blueBalloon ();
    }else if (ballon_select === 4){ 
      pinkBalloon();
     }    
  } 
  
   if(arrowG.isTouching(redB))
  {
     redB.destroyEach();
    arrowG.destroyEach();
    score = score+1;
  }
  
 if(arrowG.isTouching(pinkB))
  {
    pinkB.destroyEach();
    arrowG.destroyEach();
    score = score+1;
  } 
  
 if(arrowG.isTouching(blueB))
  {
     blueB.destroyEach();
    arrowG.destroyEach();
    score = score+1;
  }
  
 if(arrowG.isTouching(greenB))
  {
     greenB.destroyEach();
    arrowG.destroyEach();
    score = score+1;
  }  

  
  drawSprites();
  textSize = 20;
  fill("black");
  text("SCORE: " + score,270, 30);
}


function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.lifetime = 60;
  arrowG.add(arrow);
}


function redBalloon() {
  var red_1 = createSprite (0,Math.round(random(10,390)),10,10);
  
  red_1.addImage(red_balloonImage);
  red_1.velocityX = 3;
  red_1.scale = 0.1;
  red_1.lifetime = 180
  redB.add(red_1);
}  

function greenBalloon() {
  var green_2 = createSprite (0,Math.round(random(10,390)),10,10)
  green_2.addImage(green_balloonImage);
  green_2.velocityX = 3;
  green_2.scale = 0.1;
  green_2.lifetime = 180;
  greenB.add(green_2);
}  

function blueBalloon() {
  var blue_3 = createSprite (0,Math.round(random(10,390)),10,10)
  blue_3.addImage(blue_balloonImage);
  blue_3.velocityX = 3;
  blue_3.scale = 0.1;
  blue_3.lifetime = 180;
  blueB.add(blue_3);
}  

function pinkBalloon() {
  var pink_4 = createSprite (0,Math.round(random(10,390)),10,10)
  pink_4.addImage(pink_balloonImage);
  pink_4.velocityX = 3;
  pink_4.scale = 1.2;
  pink_4.lifetime = 180;
  pinkB.add(pink_4);
}  

