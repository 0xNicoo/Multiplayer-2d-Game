import Component from "./components/component";
import Position from "./components/position";
import Render from "./components/render";

export default class Entity  {
    id: string;
    removed: Boolean;
    components: Component[];

    constructor(id: string){
        this.id = id;
        this.components = [];
        this.removed = false;
    }

    addComponent(component: Component){
        this.components.push(component);
    }

    getComponent<T extends Component>(componentType: new (...args: any[]) => T): T{
        const component = this.components.find((c) => c instanceof componentType) as T;
        return component;
    }

    draw(ctx: CanvasRenderingContext2D): void{
        const renderComponent = this.getComponent(Render);
        const positionComponent = this.getComponent(Position);
        renderComponent.renderEntity(ctx, positionComponent.x, positionComponent.y);
    }

    update(): void{
       
    }

    remove(){
        this.removed = true;
    }

}