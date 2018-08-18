var video;


function setup() {
   canvas = createCanvas(640, 480, WEBGL);
  background('#e50000');
   canvas.id('p5canvas');
   
   
   
  // rectangle = rect(320, 240);
  // rectangle.id('rectangle');
   
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.elt.setAttribute('playsinline', '');
  video.hide();
  video.id('p5video');
  
  
  var seriously = new Seriously();
  
  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');
  
  var grain = seriously.effect('filmgrain');
  grain.amount = 0.1;
  
  grain.source = src;
  target.source = grain;
  
  seriously.go();
  
  canvas.size(320, 240);
   
   
}

function draw() {
  canvas.position(windowWidth * 0.55, windowHeight * 0.3);
 // background('#bc0319');
  //image(video, windowWidth * 0.5, windowHeight * 0.25, 320, 240);
  // //filter('INVERT');
    
  
}

function windowResized(){
        canvas.position(windowWidth * 0.6, windowHeight * 0.4);
        //bgVideo.size(windowHeight*2, 300);
      }
