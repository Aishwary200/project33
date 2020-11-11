var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var ground;
var particles;
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var turn=0;
var gamestate="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    mousePressed();
    
    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("chance: "+turn,200,30)
  text(500,20,550);
  text(500,100,550);
  text(200,180,550);
  text(200,260,550);
  text(200,340,550);
  text(100,420,550);
  text(100,500,550);
  text(100,580,550);
  text(500,660,550);
  text(500,740,550);
  Engine.update(engine);
    
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(turn>=5){
     gamestate="end"
   }
   if(particles!==null){
      
    if(particles.body.position.y>760){
      if(particles.body.position.x<160 || particles.body.position.x>640){
        score=score+500
        particles=null
      }
      if(particles.body.position.x>160 && particles.body.position.x<400 ){
        score=score+200
        particles=null
      }
      if(particles.body.position.x>400 && particles.body.position.x<640){
        score=score+100
        particles=null
      }
    }
  }
   particles.display();
}
function mousePressed(){
  
if(gamestate!=="end"){
    turn++
   particles=new Particle(mouseX,10,10)
   console.log(particles.body.position)
   
  }
  
}

