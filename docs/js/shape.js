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
    rect(0, 0, this.dim, this.dim);
    pop();
  }
}
