import * as THREE from 'three';
import cameraRender from './render/camerRender';
import sceneRender from './render/sceneRender';
import ClientSocket from './clientSocket';

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('app') as HTMLCanvasElement
});
renderer.setSize(window.innerWidth, window.innerHeight);

const clientSocket= new ClientSocket(sceneRender, cameraRender, renderer)

function animate(){
    requestAnimationFrame(animate);

    
    renderer.render(sceneRender, cameraRender)
}

animate();