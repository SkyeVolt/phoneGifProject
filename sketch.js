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

  lockGestures();
  createCanvas(canvasWidth, canvasHeight);
  background(50);
  enableGyroTap('Tap to enable motion');
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

  if (window.sensorEnabled) { 
    let x = width/2 + rotationY * 3; 
    let y = height/2 + rotationX * 3; 
    circle(x,y,50); 

    if (deviceShaken) {
      text("device is shooketh", 20, 20); 
      fill(random(255), random(255), random(255)); 
    } 

    if (deviceMoved) { 
      text("device is shooketh", 20, 20); 
      fill(0, 255, 0); 
    }
    else { 
      fil(255, 0 ,0); 
    }
  } else { 
    text('motion sensors are not enabled', 20, 20); 
  }
}