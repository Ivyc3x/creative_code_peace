

var flowers = [];
let flowerFull;
let flowerPart;
//let flowerOutline;

let newLayer0;
let newLayer;
let newLayer2;
let newLayer3;


var angle = 180; // angle variable for moving
var scalar = 15; // radius of circle 


function preload() {
  flowerPart = loadImage('flower-draw-col.png');
  //flowerOutline = loadImage('flower-draw-plain.png');
  flowerFull = loadImage('flower-draw-paint.png');

}

function setup() {
  frameRate(3);
  angleMode(DEGREES);
  createCanvas(864, 1080);
  //newLayer.background(68, 50, 70);
  pixelDensity(1);
  background(82, 82, 82);


  newLayer0 = createGraphics(864 + 500, 1080 + 500);
  newLayer = createGraphics(864 + 500, 1080 + 500);
  newLayer2 = createGraphics(864 + 500, 1080 + 500);
  newLayer3 = createGraphics(864 + 500, 1080 + 500);
  //()
}

function draw() {
  image(newLayer0, 0, 0, width, height);
  image(newLayer, 0, 0, width, height);
  image(newLayer2, 0, 0, width, height);
  image(newLayer3, 0, 0, width, height);

  //pink background flowers
  push();
  for (let i = 0; i < 1; i++) {
    let f = new flowerSleep();
    flowers.push(f);
  }
  for (let i = flowers.length - 1; i >= 0; i--) {
    //scale(1);

    flowers[i].update();
    flowers[i].show();
  }
  pop();

  push();
  var startX = 100;
  var startY = 200;
  var endX = 150;
  var endY = 370;

  var mx = map(sin(angle) * scalar, 10, 0, startX, endX, true);
  var my = map(cos(angle) * scalar, 0, 10, startY, endY, true);

  newLayer3.image(flowerPart, mx - 50, my - 200, 2989 / 2.5, 3068 / 2.5);
  //ellipse(x, y, 50);
  angle++;
  scalar += -5;

  pop();


  push();
  var startX = 150;
  var startY = 1270;
  var endX = 50;
  var endY = 1070;
  newLayer.noStroke();
  newLayer.fill(186, 163, 225, 1);
  newLayer.rect(0, 0, 864 + 500, 1080 + 500);

  var mx = map(sin(angle) * scalar, 20, 0, startX, endX, true);
  var my = map(cos(angle) * scalar, 0, 10, startY, endY, true);
  newLayer.image(flowerPart, mx, my, 2989 / 8, 3068 / 8);
  //newLayer.image(flowerPart, mx + 1000, my + 50, 2989 / 6, 3068 / 6);
  //ellipse(x, y, 50);
  angle++;
  scalar += -5;

  pop();


  //small blue painted flowers
  push();
  var startX = 950;
  var startY = 1200;
  var endX = 1050;
  var endY = 1100;

  var mx = map(sin(angle) * scalar, 10, 0, startX, endX, true);
  var my = map(sin(angle) * scalar, 0, 20, startY, endY, true);

  newLayer3.image(flowerFull, mx - 50, my + 300, 2989 / 20, 3068 / 20);
  newLayer3.image(flowerFull, mx + 10, my + 10, 2989 / 21, 3068 / 21);
  newLayer3.image(flowerFull, mx - 450, my + 80, 2989 / 5, 3068 / 5);

  newLayer3.image(flowerFull, mx + 150, my + 100, 2989 / 20, 3068 / 20);
  newLayer3.image(flowerFull, mx + 100, my - 250, 2989 / 7, 3068 / 7);
  newLayer3.image(flowerFull, mx - 30, my - 100, 2989 / 20, 3068 / 20);

  newLayer3.image(flowerFull, mx + 100, my + 300, 2989 / 20, 3068 / 20);
  newLayer3.image(flowerFull, mx + 100, my - 110, 2989 / 22, 3068 / 22);
  newLayer3.image(flowerFull, mx + 50, my + 200, 2989 / 15, 3068 / 15);

  //ellipse(x, y, 50);
  angle++;
  scalar += -5;
  pop();

}

function keyReleased() {
  if (key == 'e') save("pg.png");
}



class flowerSleep {
  constructor() {
    this.x = 300;
    this.y = 380;

    this.vx = random(-200, 400);
    this.vy = random(-400, 200);



    /*
   //my playings
   this.vx = random (-700,600);
  this.vy = random (-500,-600);

  */
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }


  show() {
    stroke(255);
    strokeWeight(0.15);
    fill(186, 163, 225);

    //translate(mouseX, mouseY); // interesting effect- pref this before I started messing again
    translate(this.x, this.y); // this is what the original coding train equiv used
    beginShape();
    vertex(374, 214);
    bezierVertex(374, 214, 386, 204, 402, 200);
    bezierVertex(402, 200, 402, 208, 405, 218);
    bezierVertex(405, 218, 399, 227, 388, 225);
    bezierVertex(388, 225, 375, 220, 375, 220);
    bezierVertex(375, 220, 378, 221, 386, 226);
    bezierVertex(386, 226, 392, 230, 396, 235);
    bezierVertex(396, 235, 397, 239, 395, 243);
    bezierVertex(395, 243, 392, 247, 384, 249);
    bezierVertex(384, 249, 375, 246, 376, 236);
    bezierVertex(376, 236, 378, 226, 376, 220);
    bezierVertex(376, 220, 377, 229, 373, 237);
    bezierVertex(373, 237, 367, 243, 361, 249);
    bezierVertex(361, 249, 354, 250, 346, 247);
    bezierVertex(346, 247, 342, 243, 342, 240);
    bezierVertex(342, 240, 350, 233, 354, 226);
    bezierVertex(354, 226, 361, 220, 366, 218);
    bezierVertex(366, 218, 358, 220, 349, 218);
    bezierVertex(349, 218, 339, 214, 334, 209);
    bezierVertex(334, 209, 338, 205, 343, 201);
    bezierVertex(343, 201, 345, 199, 347, 198);
    bezierVertex(347, 198, 354, 199, 363, 205);
    bezierVertex(363, 205, 367, 213, 366, 207);
    bezierVertex(366, 207, 363, 198, 362, 189);
    bezierVertex(362, 189, 367, 184, 372, 184);
    bezierVertex(372, 184, 377, 182, 382, 184);
    bezierVertex(382, 184, 383, 192, 382, 204);
    endShape(CLOSE);

    strokeWeight(0.1);
    stroke(255);
    line(371, 216, 388, 213);
    line(371, 216, 384, 233);
    line(371, 216, 363, 232);
    line(371, 216, 356, 209);
    line(371, 216, 373, 198);
  }
}


