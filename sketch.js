const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas, backgroundImage;

var ground,groundImg,track,trackImg,man,manImage,covid1,covid1Img,covid2,covid2Img,sanitizer,sanitizerImg,glove,gloveImg
var mask,maskImg,safetyBox,safetyBoxImg

function preload(){
  trackImg = loadImage("../track.jpg");
  manImage=loadImage("../girl.png")
  covid1Img=loadImage("../covid.png")
  covid2Img=loadImage("../covid2.png")
  groundImg = loadImage("../ground.png");
  sanitizerImg=loadImage("../sanitizer.png")
  safetyBoxImg=loadImage("../safetybox.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  engine = Engine.create();
	world = engine.world;

  ground=createSprite(1000,150,100,500)
  ground.addImage(groundImg);
 
  man=createSprite(140,150,20,20)
    man.addImage(manImage);
    man.scale=0.7

  covid1=createSprite(140,150,20,20)
    covid1.addImage(covid1Img);
    covid1.scale=0.7

    covid2=createSprite(140,150,20,20)
    covid2.addImage(covid2Img);
    covid2.scale=0.7

    track=createSprite(1000,150,50,50)
    track.addImage(trackImg)

    sanitizer=createSprit()
    sanitizer

    Engine.run(engine);
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
