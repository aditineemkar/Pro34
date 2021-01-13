class Monster {
    constructor(x, y) {
        var options = {
            density: 1500,
            restitution: 0.1,
            friction: 8
        }
        this.body = Bodies.circle(x, y, 80, options);
        World.add(world, this.body);
    }
}