class Fly {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 300
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        push();
        strokeWeight(5);
        stroke("black");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}