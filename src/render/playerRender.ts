import { CircleGeometry, MeshBasicMaterial, Mesh } from "three";
import { Position } from "../entities/atributes/position";
import Player from "../entities/player";

export default class PlayerRender{
    figure : Mesh;
    private skinColor : string;
    player: Player;

    constructor(player: Player){
        this.player = player;
        this.skinColor = player.color;
        const geometry = new CircleGeometry()
        const meshBasicMaterial = new MeshBasicMaterial({color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`})
        this.figure = new Mesh(geometry, meshBasicMaterial);
        this.figure.position.x = player.position.x;
        this.figure.position.y = player.position.y;
    }

    updatePosition(pos: Position): void {
        this.figure.position.x = pos.x;
        this.figure.position.y = pos.y;
    }
}