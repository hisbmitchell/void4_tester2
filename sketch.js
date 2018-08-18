var video;
var  vaultText;
var videoPlacementX; 
var videoPlacementY;


function setup() {
   canvas = createCanvas(windowWidth, windowHeight);
  background('#e50000');
   canvas.id('p5canvas');
   
   
   
  // rectangle = rect(320, 240);
  // rectangle.id('rectangle');
  if (windowWidth > 1000) { 
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();

  }
  

  videoPlacementX = windowWidth * 0.45; 
  videoPlacementY = windowHeight * 0.25; 
  
  textAlign(RIGHT, TOP);
  textSize(32);
  textStyle(BOLD);
  text('VAULT', videoPlacementX - 30, videoPlacementY);
  textStyle(NORMAL);
  textSize(12);
  text('this is the time and location etc', videoPlacementX - 30, videoPlacementY + 45);
  text("here's some more info", videoPlacementX - 30, videoPlacementY + 65);
  text('another info', videoPlacementX - 30, videoPlacementY + 85);
  text('info info info', videoPlacementX - 30, videoPlacementY + 105);
   
   
}

function draw() {
  //background('#e5000');
  videoPlacementX = windowWidth * 0.5; 
  videoPlacementY = windowHeight * 0.25; 
 
 image(video, videoPlacementX , videoPlacementY, 320, 240);

  // //filter('INVERT');
    
  
}

function windowResized(){
        canvas = resizeCanvas(windowWidth, windowHeight);
        text('VAULT',  videoPlacementX - 30, videoPlacementY);
         textSize(12);
        text('this is the time and location etc', videoPlacementX - 30, videoPlacementY + 35);
        text("here's some more info", videoPlacementX - 30, videoPlacementY + 55);
        text('another info', videoPlacementX - 30, videoPlacementY + 75);
        text('info info info', videoPlacementX - 30, videoPlacementY + 95);
        //bgVideo.size(windowHeight*2, 300);
      }
