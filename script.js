let xOff = 0;
const amplitudeSlider = document.getElementById('amplitude');
const wavelengthSlider = document.getElementById('wavelength');
const wavespeedSlider = document.getElementById('wavespeed');
const canvasContainer = document.getElementById('canvas-container');
const canvasWidth = canvasContainer.clientWidth;
const canvasHeight = 300;

let dotPositions = [];

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas-container');
}

function draw() {
    const yAmplitude = amplitudeSlider.value;
    const period = wavelengthSlider.value;
    const xIncrement = wavespeedSlider.value / 10;

    if (xOff >= canvasWidth) {
        clearCanvas();
    }

    background(255);

    translate(0, height / 2);

    const x = xOff % canvasWidth;
    const y = yAmplitude * sin(TWO_PI * xOff / period);

    noStroke();
    fill(0);
    ellipse(x, y, 8);

    dotPositions.push({ x, y });

    stroke(0);
    noFill();
    beginShape();
    for (const pos of dotPositions) {
        vertex(pos.x, pos.y);
    }
    endShape();

    if (dotPositions.length > canvasWidth) {
        dotPositions.shift();
    }

    xOff += xIncrement;
}

function clearCanvas() {
    clear();
    dotPositions = [];
    xOff = 0;
}
