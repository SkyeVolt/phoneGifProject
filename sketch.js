let ege;

function preload() {
  ege = loadImage('ege.gif'); 
}


function setup() {
  let canvasWidth = min(windowWidth, windowHeight * 0.5625);
  let canvasHeight = canvasWidth * 1.777; 
    
    
  if (canvasHeight > windowHeight) {
        canvasHeight = windowHeight;
        canvasWidth = canvasHeight * 0.5625;
  }
  
  createCanvas(canvasWidth, canvasHeight);
  background(50);
}

function draw() {
  background(10, 10, 10);
  
  let scaleX = width / ege.width;
  let scaleY = height / ege.height;
  let scale = max(scaleX, scaleY);
        
       
  let scaledWidth = ege.width * scale;
  let scaledHeight = ege.height * scale;
  let x = (width - scaledWidth) / 2;
  let y = (height - scaledHeight) / 2;
        
  image(ege, x, y, scaledWidth, scaledHeight);
}