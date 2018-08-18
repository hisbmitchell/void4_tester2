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
  videoPlacementY = windowHeight * 0.35;
  
  textAlign(RIGHT, TOP);
  textSize(38);
  textStyle(BOLD);
  text('VAULT', videoPlacementX - 30, videoPlacementY);
  textStyle(NORMAL);
  textSize(12);
  text('This is the time and location etc', videoPlacementX - 30, videoPlacementY + 45);
  text("Here's some more info", videoPlacementX - 30, videoPlacementY + 65);
  text('Another info', videoPlacementX - 30, videoPlacementY + 85);
  text('Info info info', videoPlacementX - 30, videoPlacementY + 105);
 
  text('there could also be some text here which could be nice', videoPlacementX + video.width, videoPlacementY + video.height + 10);
   
}

function draw() {
  //background('#e5000');
  videoPlacementX = windowWidth * 0.45; 
  videoPlacementY = windowHeight * 0.35; 
 
 image(video, videoPlacementX , videoPlacementY, 320, 240);

  // //filter('INVERT');
    
  
}

function windowResized(){
        canvas = resizeCanvas(windowWidth, windowHeight);
         textAlign(RIGHT, TOP);
  textSize(38);
  textStyle(BOLD);
  text('VAULT', videoPlacementX - 30, videoPlacementY);
  textStyle(NORMAL);
  textSize(12);
  text('This is the time and location etc', videoPlacementX - 30, videoPlacementY + 45);
  text("Here's some more info", videoPlacementX - 30, videoPlacementY + 65);
  text('Another info', videoPlacementX - 30, videoPlacementY + 85);
  text('Info info info', videoPlacementX - 30, videoPlacementY + 105);
      }
