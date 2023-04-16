import io, { Socket } from 'socket.io-client';
import { Camera, Renderer, Scene } from 'three';
import Game from './game';

export default class ClientSocket {

  private scene: Scene;
  private camera: Camera;
  private renderer: Renderer;
  socket: Socket;
  game: Game;

  constructor(scene: Scene, camera: Camera, renderer: Renderer) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.socket = io('http://localhost:3000');
    this.game = new Game(scene, camera, renderer)
    
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
    });
  }
}