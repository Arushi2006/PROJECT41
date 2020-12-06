var drops;
var umbrellaImage;
var maxDrops=100;
var thunder;
var thunder1,thunder2,thunder3,thunder4;
var thunderGroup;

function preload()
{
  umbrellaImage=loadImage("images/new/walking_1.png");
  thunder1=loadImage("image/new/1.png",thunder1);
  thunder2=loadImage("image/new/2.png",thunder2);
  thunder3=loadImage("image/new/3.png",thunder3);
  thunder4=loadImage("image/new/4.png",thunder4);
}

function setup()
{
  createCanvas(1200,1200);
  umbrella=new Umbrella(1000,200); 
  fruitsGroup=new Group();  
}

function draw()
{
  umbrella();
  update();
}  

function thunder()
{
 if(frameCount%10==0)
 {
var thunder=createSprite(1000,475,30,40);
tunder.velocityX=5;
thunder.lifetime=200;
thunderGroup.add(thunder);
 }

switch(thunder)
{
 case 1:thunder.addImage("thunder1",thunder1);
break;
case 2:thunder.addImage("thunder2",thunder2);
   break;
case 3:thunder.addImage("thunder3",thunder3);  
   break;
case 4:thunder.addImage("thunder4",thunder4);
    break;
  }
}

