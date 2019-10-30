document.addEventListener('DOMContentLoaded', appStart);
let canvas;
let myPs

function appStart() {
    myPs = new Photoshop('canvas');

    document
        .querySelector('#squareButton')
        .addEventListener('touchstart', () => {
            myPs.setBrush('square')
        })
    document
        .querySelector('#circleButton')
        .addEventListener('touchstart', () => {
            myPs.setBrush('circle')
        })
}




