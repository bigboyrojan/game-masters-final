const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8, maze9, maze10, maze11, maze12,maze13,maze14, maze15, maze16, maze17;

 var backpack, backpackimg,lvl2key, passport, passportimg;
 var lvl4fence, fenceimg, lvl4key, keyimg, lvl2fence;
var lvl5gate,lvl5gate2,lvl5gate3,lvl5gate4,plane1, planeimg, plane2;
 var enemy,enemyimg,door,doorimg;
 var mainguy,mainguyimg;



function preload () {
    keyimg = loadImage("images/key.PNG");
    mainguyimg = loadImage("images/good guy.PNG");
    enemyimg = loadImage("images/enemy.PNG");
    doorimg = loadImage("images/door.PNG");
    backpackimg = loadImage("images/backpack.PNG");
    passportimg = loadImage("images/passport.PNG");
    fenceimg = loadImage("images/fence.PNG");
    planeimg = loadImage("images/plane.PNG");
}


function setup () {
createCanvas(1000,500);

engine = Engine.create();
world = engine.world;


maze1 = createSprite(225,150,300,10);
maze1.shapeColor = "lime";
maze2 = createSprite(923,150,150,10);
maze2.shapeColor = "lime";
maze3 = createSprite(25,90,50,10);
maze3.shapeColor = "lime";
maze4 = createSprite(125,90,10,65);
maze4.shapeColor = "lime";
maze5 = createSprite(850,435,10,125);
maze5.shapeColor = "lime";
maze6 = createSprite(812,367,85,10);
maze6.shapeColor = "lime";
maze7 = createSprite(595,330,10,85);
maze7.shapeColor = "lime";
maze8 = createSprite(594,177,10,65);
maze8.shapeColor = "lime";
maze9 = createSprite(435,367,100,10);
maze9.shapeColor = "lime";
maze10 = createSprite(380,188,10,85);
maze10.shapeColor = "lime";
maze11 = createSprite(380,330,10,85);
maze11.shapeColor = "lime";
maze12 = createSprite(275,367,200,10);
maze12.shapeColor = "lime";
maze13 = createSprite(638,367,75,10);
maze13.shapeColor = "lime";
maze14 = createSprite(662,150,125,10);
maze14.shapeColor = "lime";
maze15 = createSprite(35,367,75,10);
maze15.shapeColor = "lime";
maze16 = createSprite(125,250,250,10);
maze16.shapeColor = "lime";
maze17 = createSprite(925,230,150,10);
maze17.shapeColor = "lime";
 backpack = createSprite(50,30,40,40);
 backpack.addImage(backpackimg);
 backpack.scale = 0.2;
 lvl2key = createSprite(30,305,40,40);
 lvl2key.addImage(keyimg);
 lvl2key.scale = 0.1;
 lvl2fence = createSprite(980,300,10,100);
 lvl2fence.addImage(fenceimg);
 lvl2fence.scale = 0.2;
 lvl4key = createSprite(950,190,40,40);
 lvl4key.addImage(keyimg);
 lvl4key.scale = 0.1;
 lvl4fence = createSprite(10,200,10,75);
 lvl4fence.addImage(fenceimg);
 lvl4fence.scale = 0.2;

 lvl5gate = createSprite(730,80,10,150);
 lvl5gate.shapeColor = "orange";
 lvl5gate2 = createSprite(595,436,10,125);
 lvl5gate2.shapeColor = "blue";
 lvl5gate3 = createSprite(723,367,95,10);
 lvl5gate3.shapeColor = "green";
 lvl5gate4 = createSprite(786,150,122,10);
 lvl5gate4.shapeColor = "red";
passport = createSprite(340,185,40,40);
passport.addImage(passportimg);
passport.scale = 0.15;
plane1  = createSprite(750,450,40,40);
plane1.addImage(planeimg);
plane1.scale = 0.3;
plane2 = createSprite(830,65,40,40);
plane2.addImage(planeimg);
plane2.scale = 0.3;
mainguy = createSprite(500,250,50,50);
 mainguy.shapeColor = "orange";
mainguy.addImage(mainguyimg);
mainguy.scale = 0.15;
 enemy  = createSprite(905,450,20,20);
 enemy.addImage(enemyimg);
 enemy.scale = 0.2;
 door = createSprite(50,450,10,60);
 door.addImage(doorimg);
 door.scale = 0.2;


}
function draw () {
    Engine.update(engine);
    createEdgeSprites();
background(0,255,255);
textSize(15);
text("backpack",75,30);
textSize(15);
text("plane 2",805,125);
textSize(15);
text("plane 1",640,450);
textSize(15);
text("key",65,305);
textSize(15);
text("passport",310,220);
textSize(15);
text("fence",5,165);
textSize(15);
text("fence",895,305);
text("key",900,195);

textSize(15);
text("gate",690,80);
textSize(15);
text("gate",776,180);
textSize(15);
text("gate",545,436);
textSize(15);
text("gate",715,355);


    if(mainguy.isTouching(maze1)) {
      mainguy.x = 500;
  mainguy.y = 250;

   
      }

      if(mainguy.isTouching(maze2)) {
        mainguy.x = 500;
    mainguy.y = 250;

        }

  if(mainguy.isTouching(maze3)) {
 mainguy.x = 500;
 mainguy.y = 250;

    }
    if(mainguy.isTouching(maze4)) {
   mainguy.x = 500;
 mainguy.y = 250;
   
   }
 if(mainguy.isTouching(maze5)) {
  mainguy.x = 500;
  mainguy.y = 250;

   
      }
if(mainguy.isTouching(maze6)) {
    mainguy.x = 500;
     mainguy.y = 250;

   }
if(mainguy.isTouching(maze7)) {
   mainguy.x = 500;
   mainguy.y = 250;

     }
  if(mainguy.isTouching(maze8)) {
  mainguy.x = 500;
 mainguy.y = 250;

 }
   if(mainguy.isTouching(maze9)) {
  mainguy.x = 500;
 mainguy.y = 250;
   backpack.x = mainguy.x;
   backpack.y = mainguy.y;
   lvl2key.x = mainguy.x;
   lvl2key.y = mainguy.y;
   lvl4key.x = mainguy.x;
   lvl4key.y = mainguy.y;
   passport.x = mainguy.x;
   passport.y = mainguy.y;
   }
 if(mainguy.isTouching(maze10)) {
mainguy.x = 500;
     mainguy.y = 250;

    }
   if(mainguy.isTouching(maze11)) {
  mainguy.x = 500;
  mainguy.y = 250;

  }
    if(mainguy.isTouching(maze12)) {
 mainguy.x = 500;
   mainguy.y = 250;

   }
   if(mainguy.isTouching(maze13)) {
  mainguy.x = 500;
 mainguy.y = 250;

  }
  if(mainguy.isTouching(maze14)) {
   mainguy.x = 500;
          mainguy.y = 250;

    }

    if(mainguy.isTouching(maze15)) {
   mainguy.x = 500;
   mainguy.y = 250;

 }
      if(mainguy.isTouching(maze16)) {
    mainguy.x = 500;
   mainguy.y = 250;
       }
    if(mainguy.isTouching(maze17)) {
      mainguy.x = 500;
   mainguy.y = 250;
   }


   if(backpack.isTouching(door)) {
    textSize(35);
    fill("blue");
    text("Level 1 complete", 150,250);
  
    backpack.x = door.x;
    backpack.y = door.y;
   }
    
   if(mainguy.isTouching(lvl2key)) {
    lvl2key.x = mainguy.x;
    lvl2key.y = mainguy.y;
   }
  if(lvl2key.isTouching(lvl2fence)) {
  textSize(35);
  fill("yellow");
  text("Level 2 complete", 550,250);
  lvl2key.x = lvl2fence.x;
  lvl2key.y = lvl2fence.y;
  }
  if(mainguy.isTouching(lvl4key)) {
  lvl4key.x = mainguy.x;
  lvl4key.y = mainguy.y;
  }

  if(lvl4key.isTouching(lvl4fence)) {
    textSize(35);
    fill("green");
    text("Level 3 complete", 350,200);
    lvl4key.x = lvl4fence.x;
    lvl4key.y = lvl4fence.y;
  }

  if(mainguy.isTouching(passport)) {
  passport.x = mainguy.x;
  passport.y = mainguy.y;
  }

  if (passport.isTouching(plane2)) {
  textSize(15);
  fill("red");
  text("Wrong plane",880,115);
  }

if(passport.isTouching(plane1)&& backpack.isTouching(door) && lvl2key.isTouching(lvl2fence) && lvl4key.isTouching(lvl4fence)){
textSize(40);
fill("orange");
text("Congratulations, You Won", 400,250);
passport.x = plane1.x;
passport.y = plane1.y;
mainguy.x = 500;
mainguy.y = 250;
backpack.x = door.x;
backpack.y = door.y;
lvl2key.x = lvl2fence.x;
lvl2key.y = lvl2fence.y;
lvl4key.x = lvl4fence.x;
lvl4key.y = lvl4fence.y;
}

noice();
bruh();
breme();
clapped();
meme();
psych();
boi();
thicc();
rawr();
yessir();
createEdgeSprites();
drawSprites();
}

function bruh() {
    if (keyCode === DOWN_ARROW) {
        mainguy.velocityY = 4.5;
        }
}

function noice() {
    if (keyCode === UP_ARROW) {
        mainguy.velocityY = -4.5;
        }
}

function breme() {
    if (keyCode === RIGHT_ARROW) {
        mainguy.velocityX = 4.5;
        mainguy.velocityY = 0;
        }
}
function clapped() {
    if (keyCode === LEFT_ARROW) {
        mainguy.velocityX = -4.5;
        mainguy.velocityY = 0;
        }
}


function meme() {
    if (keyDown("W")) {
        enemy.velocityY = -4;
        }
}

function psych() {
    if (keyDown("S")) {
        enemy.velocityY = 4;
        }
}

function boi() {
    if (keyDown("A")) {
        enemy.velocityX = -4;
        }
}

function thicc() {
    if (keyDown("D")) {
        enemy.velocityX = 4;
        }
}



function rawr() {
if(mainguy.isTouching(backpack)) {
backpack.x = mainguy.x;
backpack.y = mainguy.y;
}
}

function yessir() {

  if(enemy.isTouching(mainguy)) {
    mainguy.x = 500;
    mainguy.y = 250;
    enemy.x = 905;
    enemy.y = 450;
    mainguy.velocityX = 0;
    mainguy.velocityY = 0;
    enemy.velocityX = 0;
    enemy.velocityY = 0;

    textSize(35);
    text("You Lose",500, 250);
   }
}