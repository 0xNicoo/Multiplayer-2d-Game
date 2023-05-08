import RenderStrategy from "./render-strategy";

export default class PlayerRender implements RenderStrategy{
    radio: number = 35;
    x: number = 100;
    y: number = 100;

    renderEntity(ctx: CanvasRenderingContext2D) {
        this.x = this.x + 1;
        this.y = this.y + 1
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        ctx.stroke();
    }
}