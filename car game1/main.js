var player1,AIPLAY,track
var finish_line
var VS
var carIMG,trackIMG
var road,roadIMG
//main characters
var info
function preload(){
 carIMG=loadImage("vroom.png")
 roadIMG=loadImage("lollol.png")

trackIMG=loadImage("uwu.png")

 VS=loadSound("vs.mp3")
//resources
}
var gamestate
PLAY=0
END=1
//gamestates
function setup(){

     canvas=createCanvas(900,392)
 
    player1=createSprite(150,300,20,20)
    player1.scale=0.1
    player1.addImage(carIMG)
     track=createSprite(width/2,height/2,900,392)
     track.addImage(trackIMG)
     track.depth=0
     road=createSprite(width/2,height/2,900,392)
     road.addImage(roadIMG)
     road.depth=0

    
}

function draw(){
    background("white")
   
    road.y=road.y+10
    if(road.y<0){
     road.y = height/2
    }
     
    
   if(gamestate=PLAY){
         VS.play()
    if(player1.overlap(track)){
      games
    }
    if(keyIsDown(UP_ARROW)){
        player1.y=player1.y+1
    }
    if(keyIsDown(LEFT_ARROW)){
         player1.x=player.x+1


    }
    if(keyIsDown(RIGHT_ARROW)){
        player1.x=player.x-1
    }

    
    
    text("oops!  You seem to be lost the challange",width/2,height/2)
   }

info()
drawSprites()
}

function info(){ 
  text("press 's' to start te game",1100,509)
}