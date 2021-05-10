const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bac ; 
var world;
var engine;
var ground;
var h1;
var g1;
var b1,b2,b3,b4,b5,b6,b7,b7,b8,b9,b10;

function preload(){
  bacImg = loadImage("01.jpg");
  grImg = loadImage("02.png");
}
function setup() {
  createCanvas(850,400);

  engine = Engine.create();
  world = engine.world;
  
  bac = createSprite(width/2,height/2,1,1);
  bac.addImage(bacImg);
  bac.scale = 1;

  ground = createSprite(width/2,height,1,1);
  ground.addImage(grImg);
  ground.scale = 1;

  h1 = new Hammer(width/2,height/2);

  g1 = new Ground(width/2,height,850,20);

  b1 = new Ball (400,250,15);
  b2 = new Ball (410,250,15);
  b3 = new Ball (420,250,15);
  b4 = new Ball (425,250,15);
  b5 = new Ball (425,250,15);
  b6 = new Ball (425,250,15);
  b7 = new Ball (425,250,15);
  b8 = new Ball (425,250,15);
  b9 = new Ball (425,250,15);
  b10 = new Ball (425,250,15);

  b11 = new Balla (600,300,40);

  s1 = new Box(250,300,100,100);
}

function draw() {
  background(220);
  Engine.update(engine);
  drawSprites();

  h1.display();

  g1.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();

  s1.display();

}

