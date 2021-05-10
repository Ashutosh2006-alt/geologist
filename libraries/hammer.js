class Hammer {
   constructor(x, y) {
      var options = {
         'restitution': 1,
         'friction': 1,
         'density': 1
      }
      this.body = Bodies.rectangle(x, y, 80,20, options);
      this.width = 80;
      this.height = 20;

      World.add(world, this.body);
   }
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      stroke("black");
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
   }
};