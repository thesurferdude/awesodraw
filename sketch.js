const hello = 'hello world';
const pink =  '255, 40, 150'

function setup() {
  createCanvas(5000, 5500);
  console.log(hello)
  background(255, 255, 100)
}

function draw() {

  fill(255, 255, 0)
  line(100, 100, 200 , 50);       
  ellipse(mouseX, mouseY, 100);
  textSize(25);
  fill(255, 40, 150);
  //rect(100, 200, 200 , 100);
  fill(0,0,255);
  //text(hello, 130 , 240)
}
function mousePressed(){
  background(255, 255, 100)
  
}
