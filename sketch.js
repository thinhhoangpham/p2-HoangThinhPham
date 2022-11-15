//Variables
let capture, flippedCapture;
let w, h;
let scl;
let hr, mn, dd, mm;
let t, d, currentWeather, nextEvent;
let walk;
let faceapi;
let detections = [];
let detectUpdate;
let font;
let currentWeatherData;

function preload() {
    currentWeatherData = loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Lubbock&appid=ad6e239ec0ac58d0a9836e942aac97eb&units=imperial');
    //currentWeatherData = loadJSON('https://github.com/thinhhoangpham/p2.HoangThinhPham/blob/main/data/daily.json');
}

function setup() {
    //Frame setup
    frameRate(30);
    //createCanvas(screen.width, screen.height);
    capture = createCapture(VIDEO);
    capture.size(640, 480);
    scl = screen.height/capture.height;
    var canvas = createCanvas(capture.width * scl, capture.height * scl);
    w = capture.width * scl;
    h = capture.height * scl;
    //scl = 1;
    console.log(scl);
    console.log(capture.width);
    console.log(capture.height);
    capture.hide();
    canvas.center('horizontal');


    // Only need landmarks for this example
    const faceOptions = { 
        withLandmarks: true, 
        withExpressions: false, 
        withDescriptors: false,
        minConfidence: 0.5,
    };
    faceapi = ml5.faceApi(capture, faceOptions, faceReady);

    t = new TimeDisplay();
    d = new DateDisplay();
    currentWeather = new Weather(currentWeatherData);
    nextEvent = new Event("Agenda");

    walk = new CircleChart(w - 256, 256, 50, 4220, 7000, "steps");
    sleep = new CircleChart(w - 256, 256 + 96, 50, 6, 8, "hrs");
    burn = new CircleChart(w - 256, 256 + 96*2, 50, 62, 120, "cal");
}

function draw() {
    //Frame display
    frameRate(30);
    background(32);
    push();
    scale(-1, 1);
    imageMode(CENTER);
    image(capture, -w/2, h/2, capture.width * scl, capture.height * scl);
    //drawBoxs(detections);
    pop();

    dataUpdate();

    // Draw UI
    fill(255);
    noStroke();
    d.display(14, 5);
    t.display(14, 32);
    currentWeather.display(capture.width * scl - 135, 42);
    //Needs face detect condition:
    walk.display();
    sleep.display();
    burn.display();
    nextEvent.display(14, 256);
    

    // look for face and draw UI
    if (detectUpdate > 0) {
        fill(255);
        noStroke();
        
    }
  
}

async function dataUpdate() {
    t.update();
    d.update();
    currentWeather.update();
    detectUpdate = detections.length;
    walk.update();
    sleep.update();
    burn.update();
}

// Start detecting faces
function faceReady() {
    faceapi.detect(gotFaces);
}
// Got faces
function gotFaces(error, result) {
    if (error) {
      console.log(error);
      return;
    }
    detections = result;
    faceapi.detect(gotFaces);
} 

function drawBoxs(detections){
    if (detections.length > 0) {//If at least 1 face is detected: もし1つ以上の顔が検知されていたら
      for (f=0; f < detections.length; f++){
        let {_x, _y, _width, _height} = detections[f].alignedRect._box;
        stroke(44, 169, 225);
        strokeWeight(3);
        fill(44, 169, 225);
        rect(_x, _y, _width, _height);
      }
    }
  }