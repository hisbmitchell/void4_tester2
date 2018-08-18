var capture;
var canvas;

function setup() {
   canvas = createCanvas(windowWidth, windowHeight);
   canvas.id('p5canvas');
   background('#bc0319');
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.id('p5video');
  
  var seriously = new Seriously();
  
  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');
  
  seriously.go();
   
}

function draw() {
  background('#bc0319');
  image(capture, windowWidth * 0.5, windowHeight * 0.25, 320, 240);
  //filter('INVERT');
    
  
}

 function windowResized(){
        resizeCanvas(windowWidth, windowHeight);
        //bgVideo.size(windowHeight*2, 300);
      }