var suit;
var head = [];
var num;

function setup(){
  background(150);
  createCanvas(700, 900);
  suit = loadImage("assets/suit.png");  
  head[0] = loadImage("assets/head1.png");
  head[1] = loadImage("assets/head2.png");

}

function draw(){
  
 if(mouseX >= 220 && mouseX < 300) 
   num = 0;
 else
   num = 1;

  mouseX = constrain(mouseX, -160, width-80);
  background(150);
  if(mouseX > width/2)
    fill(mouseX, mouseY, mouseX/(mouseY+1));
  if(mouseX <= width/2)
    fill(mouseX, mouseY, mouseX*mouseY);
  ellipse(width/2, height/2, 100, 150);
      image(suit, 130, 45);
  image(head[num],mouseX, 150);
  
}
function mousePressed(){
  num++;
}
