const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup(){
	var canvas = createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(150,320);

	ground = new Ground(600,390,1200,20);

	box1 = new Box(900,300,120,20);

	 box2 = new REDBox(900,380,120,20);
	 box3 = new REDBox(850,340,20,100);
	 box4 = new REDBox(950,340,20,100);
}

function draw(){
	background("skyblue");
	Engine.update(engine);

	

	ground.display();

	box1.display();

	box2.display();
	box3.display();
	box4.display();

	ball.display();
	
}

