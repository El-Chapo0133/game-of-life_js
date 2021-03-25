

class Drawer {
    constructor() {
        this.ctx = canvas.getContext("2d");
    }
    drawRect(x, y, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, CASESIZEX, CASESIZEY);
        this.ctx.closePath();
    }
    drawAllLines() {
        this.ctx.strokeStyle = "lightgray";
        for (let x = 0; x < MAPSIZEX; x++) {
            this.ctx.beginPath();
            this.ctx.moveTo(x * CASESIZEX, 0);
            this.ctx.lineTo(x * CASESIZEX, MAPSIZEY * CASESIZEY);
            this.ctx.stroke();
            this.ctx.closePath();
        }
        for (let y = 0; y < MAPSIZEX; y++) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y * CASESIZEY);
            this.ctx.lineTo(MAPSIZEX * CASESIZEX, y * CASESIZEX);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }
    clearFullRect() {
        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.closePath();
    }
}