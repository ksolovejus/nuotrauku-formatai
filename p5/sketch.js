// first frame
function setup() {
    createCanvas(windowWidth, windowHeight);
    background("crimson")
  }

  function windowResized() {
    createCanvas(windowWidth, windowHeight);
    background("crimson")
  }

//   frames per second
//   function draw() {
//     fill(random(255),random(255),random(255))
//     stroke("white")
//     strokeWeight(5)
//     ellipse(mouseX, mouseY, 55); 
//   }

function mouseDragged() {
    fill(random(255),random(255),random(255))
    stroke("white")
    strokeWeight(5)
    ellipse(mouseX, mouseY, 55); 
  }