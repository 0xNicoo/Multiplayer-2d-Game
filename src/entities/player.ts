import { Position } from "./atributes/position";

export default class Player {
    id: Number;
    position: Position;
    color: String = "#59B623";

    constructor(id: Number, positon: Position,  color: String){
        this.id = id;
        this.position = positon;
    }

}