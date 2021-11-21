import { Chess } from "chess.js";
import { hello } from "./hello";

let board = new Chess();
board.move("e4");
console.log(board.ascii());
