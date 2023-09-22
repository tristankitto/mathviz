let values = [];
let i = 0;
let j = 0;
let sorting = false;
let algorithm;

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
        sorting = true;
        start();
    });

    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function () {
        reset();
    });

    const cancelButton = document.getElementById("cancel");
    cancelButton.addEventListener("click", function () {
        sorting = false;
    });

}

function start() {

    algorithm = document.getElementById("algorithm");

    function step() {
        if (!isSorted(values) && sorting) {
            switch (algorithm.value) {
                case "bogo":
                    shuffleArray(values);
                    redraw();
                    setTimeout(step, 500);
            }
        } else {
            sorting = false;
        }
    }

    step();
}

function reset() {
    values = new Array(width);
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
    i = 0;
    j = 0;
    sorting = false;
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

window.addEventListener('resize', (event) => {
    updateCanvasSize();
});

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
