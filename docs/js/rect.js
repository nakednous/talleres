class Rect extends Shape {
  constructor () {
    super();
    this.setEdge(100);  
  }

  drawShape() {
    rectMode(CENTER);
    rect(0, 0, edge(), edge());
  }

  edge() {
    return this.edge;
  }

  setEdge(e) {
    this.edge = e;
  }
}
