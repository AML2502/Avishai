class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("dustbingreen.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    /*rectMode(CENTER);
    fill(255);
    strokeWeight(3);
    stroke("blue");
    rect(0, 0, this.width, this.height);*/
    imageMode(CENTER);
    image(this.image,600, 605, 150, 150)
   
  }
};
