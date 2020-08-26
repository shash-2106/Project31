const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var Slingshot;
var ball;

var score = 0;

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;
 // createSprite(400, 200, 50, 50);
 

  ground1 = new ground(570,height-30,450,20);
  box1 = new box(430,height-60,70,30,"yellow");
  box2 = new box(500,height-60,70,30,"yellow");
  box3 = new box(570,height-60,70,30,"yellow");
  box4 = new box(640,height-60,70,30,"yellow");
  box5 = new box(710,height-60,70,30,"yellow");
  box6 = new box(465,height-90,70,30,"cyan");
  box7 = new box(535,height-90,70,30,"cyan");
  box8 = new box(605,height-90,70,30,"cyan");
  box9 = new box(675,height-90,70,30,"cyan");
  box10 = new box(500,height-120,70,30,"pink");
  box11 = new box(570,height-120,70,30,"pink");
  box12 = new box(640,height-120,70,30,"pink");
  box13= new box(535,height-150,70,30,"yellow");
  box14 = new box(605,height-150,70,30,"yellow");
  box15 = new box(570,height-180,70,30,"cyan");

  ball = new Polygon(100,height-60,25,25);

  slingshot = new pull(ball.body,{x:250,y:300});
  
  Engine.run(engine);

}

function draw() {
  Colour();
  
  Engine.update(engine);

  fill("white");
  text("Score: "+score,400,300);
  
  ground1.display();
  box1.display(); 
  box1.score();
  box2.display(); 
  box2.score();
  box3.display(); 
  box3.score();
  box4.display(); 
  box4.score();
  box5.display();
  box5.score();
  box6.display(); 
  box6.score();
  box7.display(); 
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score(); 
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  slingshot.display();
  
  ball.display();
  //console.log(responseJSON.datetime);
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode==32){
    Matter.Body.setPosition(ball.body,{x:100,y:height-60});
    slingshot.attach(ball.body);
  }
}
async function Colour(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour >= 0600 && hour <= 1800){
    background("cyan");
  }
  else{
    background("black");
  }

  //console.log(background);
}

