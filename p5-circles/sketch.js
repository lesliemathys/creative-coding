let bg = [32, 5, 97];

let palette = [[203, 78, 90], [7, 78, 90], [45, 78, 90]];

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
  noLoop();
  background(bg);
  blendMode(MULTIPLY);
}

function draw() {
  noStroke();
  translate(width/4,height/4);
  for (let i = 0; i < 10; i++) {
    fill(palette[colourSelector()])
    circle(random(width-(width/2)), random(height-(height/2)),random(100,300));
  }
}

function colourSelector() {
  selector = floor(random(3));
  return selector
}

function keyPressed(){
  if (key === 's'){
      save('circles.png');
  }
}