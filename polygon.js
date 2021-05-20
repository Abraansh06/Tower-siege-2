class Polygon {
  constructor(x, y, width, height) {
    var options = {
       
    }
  
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/polygon.png");
    
    World.add(world,this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    //console.log(this.body.position.x);
    //console.log(this.body.position.y);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(40);
    stroke("black");
    fill(255);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
};


