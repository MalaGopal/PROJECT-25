
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

var paper,ground,dustbin;



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,690,width,20);
	paper = new Paper(400,350,70);
	dustbin = new Dustbin(600,650);
	

	var render = Render.create({
		element:document.body,
		engine : engine,
		options : {
			width :1200,
			height :700,
			wireframes : false
		}

	})
	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  ground.display();
  paper.display();
  dustbin.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(	paper.body,paper.body.position,{x:130,y:-145})
	}
}



