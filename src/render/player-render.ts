import RenderStrategy from "./render-strategy";

export default class PlayerRender implements RenderStrategy{
    radio: number = 35;

    renderEntity(ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.beginPath()
        ctx.arc(x, y, this.radio, 0, 2 * Math.PI);
        ctx.stroke();
    }
}