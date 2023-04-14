let bubbles = [];

let bg = [32, 5, 97];

let palette = [
  [203, 78, 90],
  [7, 78, 90],
  [45, 78, 90],
];

function setup() {
  WIDTH = min(windowWidth, windowHeight);
  print(WIDTH);
  createCanvas(WIDTH, WIDTH);
  colorMode(HSB);
  noLoop();
  background(bg);

  for (let i = 0; i < random(3, 11); i++) {
    bubbles[i] = new Bubble();
  }
}

function draw() {
  push();
  translate(width / 4, height / 4);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
  }
  pop();
}

class Bubble {
  constructor() {
    this.x = random(width - width / 2);
    this.y = random(height - height / 2);
    this.d = random(WIDTH/10, WIDTH/3);
  }

  show() {
    blendMode(MULTIPLY);
    fill(palette[floor(random(3))]);
    noStroke();
    circle(this.x, this.y, this.d);
  }
}