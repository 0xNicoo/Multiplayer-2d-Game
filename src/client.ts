import Render from "./entities/components/render";
import Entity from "./entities/entity";
import GameEngine from "./gameEngine"
import PlayerRender from "./render/player-render";


const canvas = document.getElementById('app') as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

const game = new GameEngine(ctx);
game.start()

const testEntity = new Entity();
const playerRender = new PlayerRender()
const renderComponent = new Render(playerRender);
testEntity.addComponent(renderComponent);

game.addEntity(testEntity);


/*MEJORAR ESTA BASURA*/
/*
document.addEventListener('keydown', (event) => {
    if(event.key == 'w'){
        clientSocket.keys[0] = true;
    }
    if(event.key == 's'){
        clientSocket.keys[1] = true;
    }
    if(event.key == 'a'){
        clientSocket.keys[2] = true;
    }
    if(event.key == 'd'){
        clientSocket.keys[3] = true;
    }
});


document.addEventListener('keyup', (event) => {
    if(event.key == 'w'){
        clientSocket.keys[0] = false;
    }
    if(event.key == 's'){
        clientSocket.keys[1] = false;
    }
    if(event.key == 'a'){
        clientSocket.keys[2] = false;
    }
    if(event.key == 'd'){
        clientSocket.keys[3] = false;
    }
});
*/
