let egeh;
let audioTrack; 
let fire;

function preload() {
  egeh = loadImage('egeh.gif'); 
  audioTrack = loadSound('AudioTrack.mp3');
  fire = loadSound('fire.wav');
}


function setup() {
  let canvasWidth = min(windowWidth, windowHeight * 0.5625);
  let canvasHeight = canvasWidth * 1.777; 
    
    
  if (canvasHeight > windowHeight) {
        canvasHeight = windowHeight;
        canvasWidth = canvasHeight * 0.5625;
  }
  createCanvas(canvasWidth, canvasHeight);

  showDebug();

  lockGestures();

  audioTrack.loop(); 
  fire.pause();

  enableSoundTap();

  audioTrack.setVolume(0.7); 
}

function draw() {
  background(50);
  let scaleX = width / egeh.width;
  let scaleY = height / egeh.height;
  let scale = max(scaleX, scaleY);
        
       
  let scaledWidth = egeh.width * scale;
  let scaledHeight = egeh.height * scale;
  let x = (width - scaledWidth) / 2;
  let y = (height - scaledHeight) / 2;
        
  image(egeh, x, y, scaledWidth, scaledHeight);
}

function touchStarted() {
    if (window.soundEnabled) {
        if (fire.isPlaying()) {
            fire.play()();
            debug("--- Touch: PLAYING ---");
        }
        else {
            fire.play();
            debug("--- Touch: PLAYING ---");
        }
    }
    return false;
}

function touchEnded() {
    return false;
}