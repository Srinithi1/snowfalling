
const Bodies= Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
var bgImg;

function preload(){
  bgImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  //createSprite(400, 200, 50, 50);
  snow1=new Snow(200,200);
  snow2=new Snow(20,30);
  snow3=new Snow(103,80);
  snow4=new Snow(70,20);
  

}

function draw() {
  background(bgImg);  
 // drawSprites();
  snow1.Display();
  snow2.Display();
  snow3.Display();
  snow4.Display();
  
}