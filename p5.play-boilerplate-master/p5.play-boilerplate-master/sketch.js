var player,playerImg;

function preload(){
  playerImg = loadAnimation("images/p1.png", "images/p2.png","images/p3.png","images/p4.png",);
  backgroundImg=loadImage("images/background.jpg")
}

function setup() {
  createCanvas(800,400);
  player=createSprite(200, 250, 50, 50);
  player.addAnimation("running",playerImg);
  player.scale=0.5
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}