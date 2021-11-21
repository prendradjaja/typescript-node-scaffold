import { Chess, ChessInstance } from "chess.js";
import { hello } from "./hello";

let board: ChessInstance = new Chess();
board.move("e4");
console.log(board.ascii());
