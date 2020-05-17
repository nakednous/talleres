var shapes = [];
var grid = true;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 7; i++) {
    shapes[i] = new Shape();
  }
}

function draw() {
  background(180);
  if (grid) {
    gridHint(10);
  }
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].draw();
  }
}

function gridHint(scale) {
  push();
  stroke(0, 255, 255);
  strokeWeight(1);
  let i;
  for (i=0; i<=width/scale; i++) {
    line(i*scale, 0, i*scale, height);
  }
  for (i=0; i<=height/scale; i++) {
    line(0, i*scale, width, i*scale);
  }
  pop();
}