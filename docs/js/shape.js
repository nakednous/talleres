class Shape {
  constructor () {
    this.tinte = color(random(0, 255), random(0, 255), random(0, 255));
    this.dim = random(50, 200);
    this.posicion = createVector(random(0, width), random(0, height));
  }

  draw () {
    push();
    fill(this.tinte);
    translate(this.posicion.x, this.posicion.y);
    drawShape();
    pop();
  }

  // JS doesn't have abstract methods, see:
  // https://medium.com/@yuribett/javascript-abstract-method-with-es6-5dbea4b00027
  drawShape() {
    throw new Error('You have to implement the method drawShape!');
  }
}
