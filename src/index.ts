import { Chess } from "chess.js";
import { hello } from "./hello";
import * as _ from "lodash";

let board = new Chess();
board.move("e4");
console.log(board.ascii());
console.log(_.sum([1, 10, 100]));
