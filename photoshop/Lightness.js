class Lightness {
    constructor(lightnessAmount, canvasData, ctx) {
        this.amount = (lightnessAmount == "darken") ? -20 : 20
        this.canvasData = canvasData;
        this.ctx = ctx;
        this.setLightnessImage(this.amount);
    }

    setLightnessImage(amount) {
        for(let i = 0; i< this.canvasData.data.length; i++) {
            this.canvasData.data[i] += amount
        }
        this.ctx.putImageData(this.canvasData, 0, 0)
    }
    
}