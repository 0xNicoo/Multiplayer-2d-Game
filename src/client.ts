import * as THREE from 'three';
import cameraRender from './render/cameraRender';
import sceneRender from './render/sceneRender';
import ClientSocket from './clientSocket';

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('app') as HTMLCanvasElement
});
renderer.setSize(window.innerWidth, window.innerHeight);

const clientSocket = new ClientSocket(sceneRender, cameraRender)


/*MEJORAR ESTA BASURA*/

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

function animate(){
    requestAnimationFrame(animate);
    renderer.render(clientSocket.game.scene, cameraRender)
}

animate();