import { Camera, Renderer, Scene } from "three";

export default class Game{
    private scene: Scene;
    private camera: Camera;
    private renderer: Renderer;

    constructor(scene: Scene, camera: Camera, renderer: Renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
      }

    }