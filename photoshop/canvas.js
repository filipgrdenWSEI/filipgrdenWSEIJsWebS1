document.addEventListener('DOMContentLoaded', appStart)

let canvas,
    ctx,
    inputShapeValue,
    lightnessAmount,
    canvasWidth,
    canvasHeight

function appStart() {

    canvasWidth = window.innerWidth - 200;
    canvasHeight = window.innerHeight;

    canvas = document.querySelector('#canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ctx = canvas.getContext('2d');

    const selectShapeInpt = document.getElementById("shapeInpt")

    document.querySelectorAll(".lightnessBtn")
        .forEach(btn => btn.addEventListener("click", getLightnessAmount));

    new Draw(canvas, selectShapeInpt);
    document.getElementById('imageLoader')
        .addEventListener("change", drawCanvasImage, false);
}

function drawCanvasImage(e) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const image = new Image()
        image.onload = function () {
            ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight)
        }
        image.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

function getLightnessAmount() {
    const canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
    lightnessAmount = this.getAttribute("data-amount");
    new Lightness(lightnessAmount, canvasData, ctx);
}