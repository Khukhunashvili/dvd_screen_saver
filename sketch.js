var dvdLogo;
var x, y;
var speedX = 5;
var speedY = 5;

var wallHits = 0;

function preload(){
  dvdLogo = loadImage("images/dvd.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = windowWidth/2 - dvdLogo.width/4;
  y = windowHeight/2 - dvdLogo.height/4;

  textSize(20);

}

function draw() {
  background(0);

  fill(255);
  text("Wall hits:", 30, 100);
  text(wallHits, 130, 100);

  image(dvdLogo, x, y, dvdLogo.width/2, dvdLogo.height/2)

  x+=speedX;
  y+=speedY;

  if(y+dvdLogo.height/2 > windowHeight || y < 0 ) {
    speedY = -speedY;
    wallHits += 1;
  }

  if(x+dvdLogo.width/2 > windowWidth || x < 0) {
    speedX = -speedX;
    wallHits += 1;
  }

}
