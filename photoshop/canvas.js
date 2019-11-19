  
document.addEventListener('DOMContentLoaded', appStart)

let canvas
let ctx

function appStart() {
    // get canvas
    canvas = document.querySelector('#canvas')
    document
        .querySelector('#darken')
        .addEventListener('click',() => darkenImage()) 
    ctx = canvas.getContext('2d')
    // ctx.rect(50,50,300,300);
    // ctx.fill()
    drawCanvasImage()
}

function drawCanvasImage() {
    const image = new Image()
    image.src = 'zdjecie.jpg'
    image.addEventListener('load', ()=> {
        ctx.drawImage(image, 0, 0, 800, 600)
    })
}

function darkenImage(amount = 30) {
    const canvasData = ctx.getImageData(0, 0, 800, 600)
    console.log(canvasData.data[0])
    for(let i = 0; i<canvasData.data.length; i++) {
        canvasData.data[i] -= amount
    }
    ctx.putImageData(canvasData, 0, 0)
}