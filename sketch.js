const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12,obj13
,obj14,obj15,obj16,obj17,obj18,obj19,obj20,obj21,obj22,obj3,obj24;

function preload() {
    bg = loadImage("snow2.jpg");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    obj1 = new Snow(1,200,50,50);
    obj2 = new Snow(50,200,50,50);
    obj3 = new Snow(100,200,50,50);
    obj4 = new Snow(150,200,50,50);
    obj5 = new Snow(250,200,50,50);
    obj6 = new Snow(300,200,50,50);
    obj7 = new Snow(350,200,50,50);
    obj8 = new Snow(400,200,50,50);
    obj9 = new Snow(450,200,50,50);
    obj10 = new Snow(500,200,50,50);
    obj11 = new Snow(550,200,50,50);
    obj12 = new Snow(600,200,50,50);
    obj13 = new Snow(650,200,50,50);
    obj14 = new Snow(700,200,50,50);
    obj15 = new Snow(750,200,50,50);
    obj16 = new Snow(800,200,50,50);
    obj17 = new Snow(850,200,50,50);
    obj18 = new Snow(900,200,50,50);
    obj19 = new Snow(950,200,50,50);
    obj20 = new Snow(1000,200,50,50);
    obj21 = new Snow(1050,200,50,50);
    obj22 = new Snow(1100,200,50,50);
    obj23 = new Snow(1150,200,50,50);
    obj24 = new Snow(1200,200,50,50);
    
   }

function draw(){
    background(bg);
    
        Engine.update(engine);
        
        obj1.display();
        obj2.display();
        obj3.display();
        obj4.display();
        obj5.display();
        obj6.display();
        obj7.display();
        obj8.display();
        obj9.display();
        obj10.display();
        obj11.display();
        obj12.display();
        obj13.display();
        obj13.display();
        obj14.display();
        obj15.display();
        obj16.display();
        obj17.display();
        obj18.display();
        obj19.display();
        obj20.display();
        obj21.display();
        obj22.display();
        obj23.display();
        obj24.display();
        
    
}
