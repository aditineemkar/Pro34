class Hero {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Superhero-01.png");
        this.body = Bodies.circle(x, y, width, height);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 400, 120);
        pop();
    }
}