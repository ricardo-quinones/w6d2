Function.prototype.inherits = function (superClass) {
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
};

;(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function (pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  MovingObject.prototype.move = function (object) {
    object.pos[0] += object.vel[0];
    object.pos[1] += object.vel[1];
  }

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var xdiff = this.pos[0] - otherObject.pos[0];
    var ydiff = this.pos[1] - otherObject.pos[1];
    distance = Math.sqrt( (xdiff * xdiff) + (ydiff * ydiff));

    return ((this.radius + otherObject.radius) > distance);
  }
})(this);