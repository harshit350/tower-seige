
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
 var ground;
 var polygon;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new Box(330,235,30,40);
	box2=new Box(360,235,30,40);
	box3=new Box(390,235,30,40);
	box4=new Box(420,235,30,40);
	box5=new Box(450,235,30,40);
	box6=new Box(360,195,30,40);
	box7=new Box(390,195,30,40);
	box8=new Box(420,195,30.40);
	box9=new Box(390,155,30,40);
	box10=new Box(300,365,30,40);
	box11=new Box(330,365,30,40);
	box12=new Box(360,365,30,40);
	box13=new Box(390,365,30,40);
	box14=new Box(420,365,30,40);
	box15=new Box(450,365,30,40);
	box16=new Box(480,365,30,40);

	ground=new Ground(400,650,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();

ground.display();







  drawSprites();
 
}



