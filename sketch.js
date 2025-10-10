let egeh;

function preload() {
  egeh = loadImage('egeh.gif'); 
  bell = loadSound('bell.mp3');
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
  enableSoundTap('Tap to enable Tap');
}

function draw() {
  background(10);
  let scaleX = width / egeh.width;
  let scaleY = height / egeh.height;
  let scale = max(scaleX, scaleY);
        
       
  let scaledWidth = egeh.width * scale;
  let scaledHeight = egeh.height * scale;
  let x = (width - scaledWidth) / 2;
  let y = (height - scaledHeight) / 2;
        
  image(egeh, x, y, scaledWidth, scaledHeight);

  if (window.soundEnabled) {
    text('Tap anywhere to play sound', 20, 20);
  } else {
    text('Waiting for sound activation...', 20, 20);
  }
}

function mousePressed() {
  // Check if sound is enabled before playing
  if (window.soundEnabled && !mySound.isPlaying()) {
    mySound.play();
  }
}