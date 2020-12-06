class slingShot{
    constructor(bodyA, p1,p2){
        var options = {
            bodyA: bodyA,
           // bodyB: bodyB,
            pointB: {x:p1,y:p2},
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA != null){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly (){
      this.chain.bodyA=null;  
    }
}