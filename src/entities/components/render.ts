import RenderStrategy from "../../render/render-strategy";
import Component from "./component";

export default class Render implements Component{
    render: RenderStrategy;
    name: String;

    constructor(render: RenderStrategy){
        this.name = "render"
        this.render = render;
    }

    renderEntity(ctx: CanvasRenderingContext2D){
        this.render.renderEntity(ctx)
    }
}