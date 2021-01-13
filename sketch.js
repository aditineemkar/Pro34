const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var obstacles = [];
var backdrop, ground, platform, chain;
var hero, monster, monsterSprite, monsterSpriteAnimation;

function preload() {
  backdrop = loadImage("images/GamingBackground.png");
  monsterSpriteAnimation = loadAnimation("images/Monster-01.png", "images/Monster-02.png");
}

function setup() {
  createCanvas(1280, 610);
  engine = Engine.create();
  world = engine.world;

  for(var i = 405; i >= 65; i -= 50) {
    obstacles.push(new Obstacle(500, i));
  } 
  for(var i = 405; i >= 115; i -= 50) {
    obstacles.push(new Obstacle(575, i));
  } 
  for(var i = 405; i >= 165; i -= 50) {
    obstacles.push(new Obstacle(650, i));
  } 

  platform = new Ground(640, 455, 980, 20);
  //ground = new Ground(640, 590, 1280, 20);
  hero = new Hero(250, 350, 60, 120);
  chain = new Fly(hero.body, {x: 250, y: 50});
  monster = new Monster(900, 340);
  monsterSprite = createSprite(900, 340);
  monsterSprite.addAnimation("monster", monsterSpriteAnimation);
  monsterSprite.scale = 0.15;
}

function draw() {
  background(backdrop);
  Engine.update(engine);
  platform.display();
  //chain.display();
  hero.display();

  for(var i = 0; i < obstacles.length; i++) {
    obstacles[i].display();
  }

  monsterSprite.x = monster.body.position.x;
  monsterSprite.y = monster.body.position.y;

  drawSprites();
}

function mouseDragged() {
  Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}