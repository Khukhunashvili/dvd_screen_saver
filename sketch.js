var dvdLogo;
var x, y;
var speedX = 5;
var speedY = 5;

function preload(){
  dvdLogo = loadImage("images/dvd.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = windowWidth/2 - dvdLogo.width/4;
  y = windowHeight/2 - dvdLogo.height/4;

}

function draw() {
  background(0);
  
  image(dvdLogo, x, y, dvdLogo.width/2, dvdLogo.height/2)

}
