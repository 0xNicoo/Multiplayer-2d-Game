/*import io, { Socket } from 'socket.io-client';

export default class ClientSocket {

  socket: Socket;
  keys: Array<boolean>;

  constructor() {

    this.keys = [false,false,false,false];
    this.socket = io('http://localhost:3000');


    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
    });
    
  }

}*/

/*import io, { Socket } from 'socket.io-client';
import { Camera, Renderer, Scene } from 'three';
import Game from './game';

export default class ClientSocket {

  private scene: Scene;
  private camera: Camera;
  socket: Socket;
  game: Game;
  private updateInterval: any;

  keys: Array<boolean>;

  constructor(scene: Scene, camera: Camera) {
    this.scene = scene;
    this.camera = camera;
    this.socket = io('http://localhost:3000');
    this.game = new Game(scene, camera)

    this.keys = [false,false,false,false];
    
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
    });

    //CAMBIAR QUE ESTO SEA UN OBJETO EN VEZ DE UN ARRAY -_-
    this.socket.on('logged', (gameInfo) => {
      this.game.setPlayerId(gameInfo[0]);
      this.game.setPlayers(gameInfo[1]);

      this.updateInterval = setInterval(() => {
        this.socket.emit('keyPressed', {keys: this.keys, playerId: this.game.player.id})
      }, 50)
    })

    this.socket.on('playerDisconnect', (playerId) => {
      this.game.deletePlayerFromGame(playerId);
    })

    
    this.socket.on('newPlayer', (player)=> {
      this.game.addOtherPlayerToGame(player);
    })


    this.socket.on('gameDataUpdate', (positions) =>{
        this.game.gameUpdatePosition(positions);
    })


  }

  sendKeyPressData(keys: Array<boolean>){
    this.socket.emit('keyPressed', {keys: keys, playerId: this.game.player.id})
  }

  sendKeyUpData(keys: Array<boolean>){
    this.socket.emit('keyUp', {keys: keys, playerId: this.game.player.id})
  }

}*/