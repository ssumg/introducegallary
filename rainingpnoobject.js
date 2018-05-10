var building;
var r, g, b;
var smallman = [];
var tallman = [];
var xPos, yPos;

function setup() {
  r = 0;
  g = 25;
  b = 0;
  
  createCanvas(1198, 1005);
  
  building = loadImage('assets/amebito.png');
 for(var i = 0; i < 42; i++)
   smallman[i] = loadImage('assets/man0.png');
 for(var i = 0; i < 9; i++)
   tallman[i] = loadImage('assets/man1.png');
 xPos = random(width);
 yPos = random( -1200, -100);
}

function draw() {
  background(r, g, b);
  image(building, 0, 0);
  for(var i = 0; i < 42; i++)
    image(smallman, xPos, yPos, 150, 200);
  for(var i = 0; i < 9; i++)
    image(tallman, xPos, yPos);
  
  yPos += 30;
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    yPos-=60;
  }
}
    
