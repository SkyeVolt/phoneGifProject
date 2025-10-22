let egeh;
let audioTrack; 
let fire;
function preload() {
  egeh = loadImage('egeh.gif'); 
  audioTrack = loadSound('AudioTrack.mp3');
  fire = loadSound('fire.wav');
}


function setup() {
  frameRate(5);
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
  egeh.pause();

  enableSoundTap();

  audioTrack.setVolume(0.7); 
}

function draw() {
  if (window.soundEnabled) {
    if (window.sensorsEnabled != true) {
      enableGyroTap(); 
    }
  }
  background(0);
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
      fire.play();
      debug("--- Touch: PLAYING ---");
      if (window.sensorsEnabled) { 
        egeh.play();
        let scaleX = width / egeh.width;
        let scaleY = height / egeh.height;
        let scale = max(scaleX, scaleY);
          
        let scaledWidth = egeh.width * scale;
        let scaledHeight = egeh.height * scale;
        let x = (width - scaledWidth) / 2;
        let y = (height - scaledHeight) / 2;     
        image(egeh, x-30, y+150, scaledWidth, scaledHeight); // multiple images renders creates smear frames, not sure why but it somehow works and THATS pretty cool :) 
        image(egeh, x+20, y+230, scaledWidth, scaledHeight);
        image(egeh, x+40, y+180, scaledWidth, scaledHeight);
        image(egeh, x-20, y+250, scaledWidth, scaledHeight);
        image(egeh, x+80, y+120, scaledWidth, scaledHeight);
        image(egeh, x+30, y+240, scaledWidth, scaledHeight);
        image(egeh, x+40, y+190, scaledWidth, scaledHeight);
        image(egeh, x-20, y+260, scaledWidth, scaledHeight);
        image(egeh, x+80, y+130, scaledWidth, scaledHeight);
      }
    }
    return false; 
}

function touchEnded() {
  return false;
}
