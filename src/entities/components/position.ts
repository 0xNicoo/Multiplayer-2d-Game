import Component from "./component";

export default class Position implements Component {
    x: number;
    y: number;
    name: String;

    constructor(x: number, y: number){
        this.name = "position"
        this.x = x;
        this.y = y;
    }
}