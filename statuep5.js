var statue;
var fire1, fire2;
var time = 0;
function setup() {
  createCanvas(690, 900);
  background(40, 40, 90);
  statue = loadImage('assets/statue1.png');
  fire1 = loadImage('assets/fire1.png');
  fire2 = loadImage('assets/fire2.png');
}

function draw() {
  time += 1;

  if(time % 224 == 0)
    background(200, 200, 0);
  else
    background(60, 150, 200);
  
  image(statue, 0, 10);
  
if(mouseIsPressed){
  if(time % 4 == 0 || time%3 ==0)
    image(fire2, 0, 0);
  else
    image(fire1, 0, 0);
  strokeWeight(3);  
  stroke(255, 0, 0);
  line(345, 250, mouseX-50, 855);
  line(365, 250, mouseX+50, 855);
  
  strokeWeight(2);
  stroke(255, 255, 0);
  line(345, 250, mouseX-50, 855);
  line(365, 250, mouseX+50, 855);
  
  noStroke();
  fill(120);
  for(var i = 0; i < 5; i++){
    ellipse(random(mouseX-90, mouseX+60), 850, random(50), random(50));
  }
  }
}
