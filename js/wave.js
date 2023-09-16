let xOff = 0;
let amplitudeSlider, wavelengthSlider, wavespeedSlider, canvas, dotPositions = [];

function setup() {
    canvas = createCanvas(1, 1);
    canvas.parent('canvas-container');
    canvas.id('canvas');
    updateCanvasSize();
    setupSliders();
}

function draw() {
    const yAmplitude = amplitudeSlider.value;
    const period = wavelengthSlider.value;
    const xIncrement = wavespeedSlider.value / 10;

    if (xOff >= width) {
        clearCanvas();
    }

    background(255);

    translate(0, height / 2);

    const x = xOff % width;
    const y = yAmplitude * sin(TWO_PI * xOff / period);

    noStroke();
    fill('#ffd966');
    ellipse(x, y, 8);

    dotPositions.push({ x, y });

    stroke('#ffd966');
    strokeWeight(4);
    noFill();
    beginShape();
    for (const pos of dotPositions) {
        vertex(pos.x, pos.y);
    }
    endShape();

    if (dotPositions.length > width) {
        dotPositions.shift();
    }

    xOff += xIncrement;
}

function clearCanvas() {
    clear();
    dotPositions = [];
    xOff = 0;
}

function updateCanvasSize() {
    const canvasContainer = select('#canvas-container');
    const containerWidth = canvasContainer.width - 45;
    const containerHeight = min(300, windowHeight - select('header').height - select('.controls').height - 20);

    resizeCanvas(containerWidth, containerHeight);

    canvas.elt.style.border = '1px solid black';
}

function windowResized() {
    updateCanvasSize();
}

function setupSliders() {
    amplitudeSlider = document.getElementById('amplitude');
    wavelengthSlider = document.getElementById('wavelength');
    wavespeedSlider = document.getElementById('wavespeed');
}

window.addEventListener('DOMContentLoaded', (event) => {
    setupSliders();
});

window.addEventListener('resize', (event) => {
    updateCanvasSize();
});