//Variables
let capture, flippedCapture;
let w, h;
let scl;
let hr, mn, dd, mm;
let t, d, currentWeather, nextEvent;
let walk, sleep, burn;
let faceapi;
let detections = [];
let detectUpdate;
let font;
let currentWeatherData;
let timer = 0;
let lightButton = [];
let lightMode = 0;
let playlist, player, song;
let songs = [];

let walkTable, sleepTable, burnTable;

let frame;

function preload() {
    currentWeatherData = loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Lubbock&appid=ad6e239ec0ac58d0a9836e942aac97eb&units=imperial');
    //currentWeatherData = loadJSON('https://github.com/thinhhoangpham/p2.HoangThinhPham/blob/main/data/daily.json');
    // playlist = loadJSON('data/playlist.json');

    walkTable = loadTable('data/walk.csv', 'csv');
    sleepTable = loadTable('data/sleep.csv', 'csv');
    burnTable = loadTable('data/burn.csv', 'csv');
    
    // song = loadSound('data/songs/Angel Share.mp3');
    // append(songs, song);
    // song = loadSound("data/songs/Inspired.mp3");
    // append(songs, song);
    // song = loadSound('data/songs/Fretless.mp3');
    // append(songs, song);
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

    //append(lightButton, createImg('assets/lightoff.png'));
    append(lightButton, createImg('assets/lightwhite.png'));
    append(lightButton, createImg('assets/lightwarm.png'));

    // player = new MediaPlayer(playlist, songs);
    
    

    t = new TimeDisplay();
    d = new DateDisplay();
    currentWeather = new Weather(currentWeatherData);
    nextEvent = new Event("Agenda");

    walk = new CircleChart(w - 256, 306, 50, 4220, 7000, "steps", "assets/footprintswhite.png");
    sleep = new CircleChart(w - 256, 306 + 72, 50, 6, 8, "hrs", "assets/bed2white.png");
    burn = new CircleChart(w - 256, 306 + 72*2, 50, 62, 120, "cal", "assets/firewhite.png");

    

    
}

function draw() {
    //Frame display
    frameRate(30);
    background(32);
    push();
    scale(-1, 1);
    imageMode(CENTER);
    console.log(lightButton.length);
    if (lightMode === 1) {
        tint(251, 210, 213);
    }
    else {
        tint(255);
    }
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
    push();
    imageMode(CENTER);
    image(lightButton[lightMode], w/2, 64, 64, 64);

    // look for face and draw UI
    // If face not dectected widthin 3s, UI disapears
    if (detectUpdate > 0) {
        timer = 3;
    }
    if (timer > 0) {
        if (frameCount % 30 === 0) {
            timer--;
        }
        push();
        textSize(18);
        fill(255);
        textAlign(LEFT, CENTER);
        text("Archievements", w - 256 - 25, 256);
        walk.display();
        sleep.display();
        burn.display();
        nextEvent.display(14, 256);
        // player.display();
        pop();
    }

    // health charts frame
    push();
    noFill();
    stroke(255);
    rectMode(CORNERS);
    frame = rect(w - 256 - 32, 306 - 32, w, 306 + 72*2 + 32);
    pop();
  
}

function mouseClicked() {
    let d = dist(mouseX, mouseY, w/2, 64);
    if (d < 32) {
        if (lightMode < 1) {
            lightMode++;
        }
        else {
            lightMode = 0;
        }

    }

    if ((mouseX > (w - 256 - 32) && mouseX < w) && (mouseY > (306 - 32) && mouseY < (306 + 72*2 + 32))) {
        console.log("health data");
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