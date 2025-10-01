let egeh;

function preload() {
  egeh = loadImage('egeh.gif'); 
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
  let scaleX = width / egeh.width;
  let scaleY = height / egeh.height;
  let scale = max(scaleX, scaleY);
        
       
  let scaledWidth = egeh.width * scale;
  let scaledHeight = egeh.height * scale;
  let x = (width - scaledWidth) / 2;
  let y = (height - scaledHeight) / 2;
        
  image(egeh, x, y, scaledWidth, scaledHeight);
}