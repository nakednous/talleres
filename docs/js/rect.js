class Rect extends Shape {
  constructor () {
    super();
    this.setEdge(100);  
  }

  drawShape() {
    rectMode(CENTER);
    rect(0, 0, this.edge(), this.edge());
  }

  edge() {
    return this.edge;
  }

  setEdge(e) {
    this.edge = e;
  }
}
