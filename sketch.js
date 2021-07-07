const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var ball;
var rope;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);

  ground = new Ground(600,600,1200,20);
  box1 = new Box(900,290,70,70);
  box2 = new Box(900,370,70,70);
  box3 = new Box(900,440,70,70);
  box4 = new Box(900,510,70,70);
  box5 = new Box(900,590,70,70);
  box6 = new Box(830,290,70,70);
  box7 = new Box(830,370,70,70);
  box8 = new Box(830,440,70,70);
  box9 = new Box(830,510,70,70);
  box10 = new Box(830,590,70,70);
  box11 = new Box(970,290,70,70);
  box12 = new Box(970,370,70,70);
  box13 = new Box(970,440,70,70);
  box14 = new Box(970,510,70,70);
  box15 = new Box(970,590,70,70);
  ball = new Ball(200,200,80,80);
  rope = new Rope(ball.body,{x:200,y:200});
}
function draw() {
  background(56,44,44); 
  Engine.update(engine);

  ground.display();
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
  ball.display();
  rope.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, {x: mouseX,y: mouseY});
  rope.attach(ball.body);
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(ball.body, {x : 200, y:200});
  }
}

function mouseReleased() {
  rope.fly();
}
