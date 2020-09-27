const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var divisionHeight=300;
var particles=[];
var plinkos=[];
var divisions=[];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world; 

  ground=new Ground(240,785,480,30);
  
  Engine.run(engine);
}

function draw() {
  background(0); 
  for(var i=0; i<=innerWidth; i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  } 
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  
 ground.display();
 }
 
 