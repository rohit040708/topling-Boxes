const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ball, ball1;
var ground;

function setup() {
    createCanvas(400,400);
    engine=Engine.create();
    world= engine.world;

    ball=new Box(200,100,50,100);
    ball1=new Box(150,200,100,50);
    ground=new Ground(200,380,400,20);
}

function draw() {
    background(0);
    Engine.update(engine);
    ball.display();
    ball1.display();
    ground.display();
}












