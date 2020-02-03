import Piece from './piece';

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

        let piece = new Piece(this);
    }

    // draw() {

    // }
} 

export default Game