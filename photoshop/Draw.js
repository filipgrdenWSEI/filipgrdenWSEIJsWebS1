class Draw {
    constructor(canvas, selectShapeinpt) {
        canvas.addEventListener("mousedown", this.startPainting);
        canvas.addEventListener("touchstart", this.startPainting);
        canvas.addEventListener("mouseup", this.stopPainting);
        canvas.addEventListener("touchend", this.stopPainting);
        canvas.addEventListener("mousemove", this.startDrawFromActuallPosition);
        canvas.addEventListener("touchmove", this.startDrawFromActuallPosition);
        this.color = document.getElementById("color").value;
        this.size = document.getElementById("size").value;
        this.selectShapeinpt = selectShapeinpt;
        this.shape = this.selectShapeinpt
                        .options[this.selectShapeinpt.selectedIndex]
                        .value;

        this.rect = canvas.getBoundingClientRect();

        this.paintingFlag = false;
    }

    startPainting = (e) => {
        console.log("start")
        this.color = document.getElementById("color").value;
        this.size = document.getElementById("size").value;
        this.shape = this.selectShapeinpt
                        .options[this.selectShapeinpt.selectedIndex]
                        .value;
        this.paintingFlag = true;
        this.startDrawFromActuallPosition(e);
        window.addEventListener("mousemove", this.stopDrawingIfNotACanvas)
        window.addEventListener("touchmove", this.stopDrawingIfNotACanvas)
    }

    stopPainting = () => {
        this.paintingFlag = false;
        ctx.beginPath();
    }

    startDrawFromActuallPosition = (e) => {
        if (!this.paintingFlag) return;
        const type = e.type
        const pageX = type === 'touchstart' || type === 'touchmove' ?
                                               e.targetTouches[0].pageX :
                                               e.pageX;
        const pageY = type === 'touchstart' || type === 'touchmove' ?
                                               e.targetTouches[0].pageY :
                                               e.pageY;

        ctx.lineWidth = this.size;
        ctx.lineCap = this.shape;
        ctx.strokeStyle = this.color;

        ctx.lineTo(pageX - this.rect.left, pageY - this.rect.top);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(pageX - this.rect.left, pageY - this.rect.top);
    }

    stopDrawingIfNotACanvas = (e) => {
        if(e.clientX < this.rect.left - 15 || e.clientX > this.rect.right + 15 || e.clientY < this.rect.top - 15 || e.clientY > this.rect.bottom + 15) {
            this.stopPainting();
            return;
        }
    }
}