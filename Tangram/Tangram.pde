boolean drawGrid = true;

void setup() {
  size(800, 800);
}

void draw() {
  background(200);
  if (drawGrid)
    drawGrid(10);
}

void drawGrid(float scale) {
  push();
  strokeWeight(1);
  int i;
  for (i=0; i<=width/scale; i++) {
    stroke(0, 0, 0, 20);
    line(i*scale, 0, i*scale, height);
  }
  for (i=0; i<=height/scale; i++) {
    stroke(0, 0, 0, 20);
    line(0, i*scale, width, i*scale);
  }
  pop();
}

void keyPressed() {
  if (key == 'g' || key == 'G')
    drawGrid = !drawGrid;
}
