import RenderStrategy from "./render-strategy";

export default class PlayerRender implements RenderStrategy{
    radio: number = 50;


    renderEntity(ctx: CanvasRenderingContext2D) {
        const x = 50;
        const y = 50;
        
        ctx.beginPath()
        ctx.arc(x, y, this.radio, 0, 2 * Math.PI);
        ctx.stroke();
    }
}