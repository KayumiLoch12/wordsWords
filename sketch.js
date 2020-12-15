
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ball2, ball3 ,ball4, ball5;
var box;
var chain1, chain2, chain3, chain4, chain5;

const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box = new Box (400,100,500,70);

	ball = new balls (320,100, 20);
	ball2 = new balls (360,100, 20);
	ball3 = new balls (400,100, 20);
	ball4 = new balls (440,100, 20);
	ball5 = new balls (480,100, 20);

	chain1 = new Chain(ball.body,box.body, -80, 0);
	chain2 = new Chain(ball2.body,box.body,-40,0);
	chain3 = new Chain(ball3.body,box.body,0,0);
	chain4 = new Chain(ball4.body,box.body,40,0);
	chain5 = new Chain(ball5.body,box.body,80,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  

  
 box.display();

 ball.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();

 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();


  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body, ball.body.position,{x:-65, y:65});
	} 
	
}

