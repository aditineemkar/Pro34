class Obstacle {
    constructor(x, y) {
        var options = {
            density: 10,
            restitution: 0.1,
            friction: 5
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.Visibility = 255;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0, 0, 50, 50);
        pop();
    }
}