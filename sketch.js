const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var score=0;

function setup() {
	createCanvas(700, 500);


	engine = Engine.create();
	world = engine.world;
	

	ground= new Ground(350,495,700,10);
	platform= new Ground(390,240,160,10);
	block1= new Block(330,235);
	block2= new Block(360,235);
	block3= new Block(390,235);
	block4= new Block(420,235);
	block5= new Block(450,235);
	block6= new Block(360,195);
	block7= new Block(390,195);
	block8= new Block(420,195);
	block9= new Block(390,155);
	ball= new Ball(200,200,25);
	sling= new Sling(ball.body,{x:200,y:200});
	wall1= new Ground(700,250,10,500);
	wall2= new Ground(0,250,10,500);
	roof= new Ground(350,0,700,10);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("yellow");
  text("Score: "+score,600,40);
  ground.display();
  platform.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  ball.display();
  sling.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  wall1.display();
  wall2.display();
	roof.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
       sling.attach(ball.body);
    }
}