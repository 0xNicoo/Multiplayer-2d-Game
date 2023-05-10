import ClientSocket from "./clientSocket";
import Game from "./game";


const canvas = document.getElementById('app') as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

const game = new Game(ctx)

const clientSocket = new ClientSocket(game);