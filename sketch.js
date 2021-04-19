
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fi, f;


function preload()
{
	fi = loadImage("images/fishes.png");
}

function setup() {
	createCanvas(1200,0);


	engine = Engine.create();
	world = engine.world;

	
     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
 
  drawSprites();
 
}

