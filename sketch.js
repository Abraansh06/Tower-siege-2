const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var b17,b18,b19,b20,b21,b22,b23,b24,b25;
var rope1, gr,gr2;
var bg;
var pg;


function preload(){
   bg=loadImage("sprites/ap2.jpg");
}

function setup(){
var canvas=createCanvas(1100,650)


engine=Engine.create();
world=engine.world
Engine.run(engine);

gr= new Ground(550,475,220,20);
gr2= new Ground(850,275,220,20);
gr3= new Ground(850,600,1910,10);





   //Lvl 1
   b1= new Box(480,470,20,20);
   b2= new Box(500,470,20,20);
   b3= new Box(520,455,20,20);
   b4= new Box(540,455,20,20);
   b5= new Box(560,455,20,20);
   b6= new Box(580,455,20,20);
   b7= new Box(600,455,20,20);

   //lvl2
   b8= new Box(500,435,20,20);
   b9= new Box(520,435,20,20);
   b10= new Box(540,435,20,20);
   b11= new Box(560,435,20,20);
   b12= new Box(580,435,20,20);

   //lvl3
   b13= new Box(520,415,20,20);
   b14= new Box(540,415,20,20);
   b15= new Box(560,415,20,20);

   //top
   b16= new Box(540,395,20,20);

    //lvl
   b17= new Box(810,255,20,20);
   b18= new Box(830,255,20,20);
   b19= new Box(850,255,20,20);
   b20= new Box(870,255,20,20);
   b21= new Box(890,255,20,20);

   //lvl2
   b22= new Box(830,235,20,20);
   b23= new Box(850,235,20,20);
   b24= new Box(870,235,20,20);
    
   //lvl3
   b25= new Box(850,215,20,20);

   pg= new Polygon(200,250,40,40);
   rope1 = new Rope(pg.body,{x:200, y:250});

}
 function draw(){ 
background(bg)
//Engine.update(engine);


   gr.display();
   gr2.display();
   gr3.display();
   rope1.display();
   
   //1st block row
   b1.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
   b6.display();
   b7.display();
   b8.display();
   b9.display();
   b10.display();
   b11.display();
   b12.display();
   b13.display();
   b14.display();
   b15.display();
   b16.display();
   
   //2nd block row
   b17.display();
   b18.display();
   b19.display();
   b20.display();
   b21.display();
   b22.display();
   b23.display();
   b24.display();
   b25.display();


   pg.display();
  


 }


 function mouseDragged(){

   Matter.Body.setPosition(pg.body,{x:mouseX,y:mouseY})
 }
 

 function mouseReleased(){
    rope1.fly();
 }

 function keyPressed(){

   if(keyCode === 32){
         rope1.attach(pg.body)
   }

}
