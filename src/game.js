import Piece from './piece';
import Board from './board';

const GAMESTATE = {
    PAUSED: 0,
    PLAY: 1,
    GAMEOVER: 2,
    MENU: 3,
}

class Game {
    constructor(gameWidth, gameHeight, ctx) {
        this.ctx = ctx;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        // this.gamestate = GAMESTATE.MENU;

        this.piece = new Piece(this);
        this.board = new Board(this);
    }

    // createBoard() {
    //     const newBoard = [];
    //     let height = this.gameHeight;
    //     while (height !== 0) {
    //         newBoard.push(new Array(this.gameWidth).fill(0));

    //         height -= 20;
    //     }
    //     return newBoard;

    //     // this.board.draw();
    // }
} 

export default Game