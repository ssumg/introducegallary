var building;
var r, g, b;
var smallman = [];
var tallman = [];
var xPos = [], yPos = [];
var aPos = [], bPos = [];
var time;

function setup() {
  time = 0;
  r = 10;
  g = 25;
  b = 10;
  
  createCanvas(1198, 1005);
  
  building = loadImage('assets/amebito.png');
 for(var i = 0; i < 42; i++){
   xPos[i] = random(width);
   yPos[i] = random(-1200, -100);
   smallman[i] = loadImage('assets/man0.png');
 }
 for(var i = 0; i < 9; i++){
   aPos[i] = random(width);
   bPos[i] = random(-1100, -100);
   tallman[i] = loadImage('assets/man1.png');
 }
}

function draw() {
  time++;
  if(time>50){
     r+=30;
     b+=30;
  }
  background(r, g, b);
  image(building, 0, 0);
  for(var i = 0; i < 42; i++){
    image(smallman[i], xPos[i], yPos[i], 150, 200);
    yPos[i] += 5;
  }
  for(var i = 0; i < 9; i++){
    image(tallman[i], aPos[i], bPos[i]);
    bPos[i] += 5;
  }
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    yPos-=60;
  }
}
    
