import Component from "./components/component";
import Render from "./components/render";

export default class Entity  {
    removed: Boolean;
    components: Component[];

    constructor(){
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
        renderComponent.renderEntity(ctx)
    }

    update(): void{

    }


}