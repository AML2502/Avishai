class chain {
    constructor(A,B,C,D){
        var options={
            bodyA:A,
            bodyB:B,
            pointB:{x:C,y:D},
            length: 10,
            stiffness: 0.02
        }
        this.chain=Matter.Constraint.create(options);
        this.ox=C;
        this.oy=D;
        World.add(world,this.chain);
    }
    display (){
        var PosA = this.chain.bodyA.position
        var PosB = this.chain.bodyB.position
        strokeWeight(3);
        line(PosA.x,PosA.y,PosB.x+this.ox,PosB.y+this.oy)
    }
}