class Ball {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:10
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 70;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(RADIUS);
      fill("pink");
      image(this.image,0, 0, this.radius);
      pop();
      pos.x=mouseX;
      pos.y=mouseY;
    }
  }