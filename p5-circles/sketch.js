let bubbles = [];
let blobs = [];

let bg = [32, 5, 97];

let palettes = [
  [[203, 78, 90], [7, 78, 90], [45, 78, 90]], //palette 1
  [[153, 78, 90], [347, 78, 90], [230, 78, 90]], //palette 2
  [[190, 78, 90], [10, 38, 90], [338, 39, 90]] //palette 3
];

function setup() {
  //WIDTH = min(windowWidth, windowHeight);
  WIDTH = 1000;
  print(WIDTH);
  createCanvas(WIDTH, WIDTH);
  colorMode(HSB);
  noLoop();
  background(bg);

  paletteSelect = floor(random(palettes.length));

  // for (let i = 0; i < random(3, 11); i++) {
  //   bubbles[i] = new Bubble();
  // }

  for (let i = 0; i < floor(random(3, 11)); i++) {
    blobs[i] = new Blob();
  }
}

function draw() {
  push();
  translate(width / 4, height / 4);
  // for (let i = 0; i < bubbles.length; i++) {
  //   bubbles[i].show();
  // }

  for (let i = 0; i < blobs.length; i++) {
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
    noStroke();
    let paletteColour = floor(random(palettes.length));
    fill(palettes[paletteSelect][paletteColour]);    
    circle(this.x, this.y, this.d);
  }
}

class Blob {
  constructor() {
    this.x = [];
    this.y = [];
    this.cx;
    this.cy;
    this.r;
    this.res;
    this.slice;
  }

  params(_res, _cx, _cy) {
    this.res = _res;

    this.x = new [res];
    this.y = new [res];

    this.cx = _cx;
    this.cy = _cy;

    this. r = floor(random(10, 50));

    slice = radians(360 / this.res);
  }

  init() {
    for (int i = 0; i < res; i++) {
      let angle = i * slice;
      x[i] = cx + cos(angle) * r;
      y[i] = cy + sin(angle) * r;
    }
  }

  show() {
    for (int i = 0; i < this.res; i++) {
      curveVertex(x[i], y[i]);
    }
  }


}