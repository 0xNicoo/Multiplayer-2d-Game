export default interface RenderStrategy{
    renderEntity(ctx: CanvasRenderingContext2D, x: number, y: number): any;
}