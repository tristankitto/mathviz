let values = [];
let i = 0;
let j = 0;
let sorting = false;

function setup() {
    canvas = createCanvas(1, 1);
    canvas.parent('sorting-container');
    canvas.id('canvas');
    updateCanvasSize();

    values = new Array(width);
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }

    const startButton = document.getElementById("start");
    startButton.addEventListener("click", function () {
        start();
    });

    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function () {
        reset();
    });
}

function start() {
    // start sorting
}

function reset() {
    values = new Array(width);
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
    i = 0;
    j = 0;
    sorting = false;
    loop();
}

function draw() {
    background(255);
    strokeWeight(6);

    for (let i = 0; i < values.length; i += 6) {
        stroke('#ffd966');
        line(i + 3, height, i + 3, height - values[i]);
    }
}

function updateCanvasSize() {
    const canvasContainer = document.getElementById('sorting-container');
    const containerWidth = canvasContainer.clientWidth - 45;

    resizeCanvas(containerWidth, canvasContainer.clientHeight - 40);

    canvas.elt.style.border = '1px solid black';
}

function windowResized() {
    updateCanvasSize();
    reset();
}

window.addEventListener('resize', (event) => {
    updateCanvasSize();
});