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

        this.board = new Board(this);
        this.piece = new Piece(this);

        this.pieceColors = [
            null, 
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'purple',
            'pink',
        ]

        let lastTime = 0;
        const updateGame = (time = 0) => {
            const deltaTime = time - lastTime;
            lastTime = time;

            this.piece.update(deltaTime);

            this.draw();
            requestAnimationFrame(updateGame);
        }

        updateGame();
    }

    draw() {
        this.ctx.fillStyle = 'gray';
        this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

        this.drawPiece(this.board.newBoard, { x: 0, y: 0 });
        this.drawPiece(this.piece.gamePieces, this.piece.pos);
    }

    drawPiece(piece, pos) {
        piece.forEach((row, y) => {
            row.forEach((val, x) => {
                if (val !== 0) {
                    this.ctx.fillStyle = 'red';
                    this.ctx.fillRect(x + pos.x, y + pos.y, 1, 1);
                }
            })
        })
    }
} 

export default Game