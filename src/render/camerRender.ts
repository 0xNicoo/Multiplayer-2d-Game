import { PerspectiveCamera } from "three";

const cameraRender = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
cameraRender.position.set(0, 0, 100);
cameraRender.lookAt(0, 0, 0);

export default cameraRender;