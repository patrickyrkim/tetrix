import Board from "./board";
import Piece from './piece';

class Game {
    constructor(canvas) {
        this.canvas = canvas;

        this.ctx = canvas.getContext('2d');

        this.ctx.scale(20, 20);

        this.pieceColors = [
            null,
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'purple',
            'pink',
        ];

        // this.board = new Board(GAME_WIDTH, GAME_HEIGHT);
        this.board = new Board(this.canvas.width / 20, this.canvas.height / 20);
        this.piece = new Piece(this);

        let currentTime = 0;
        const update = (time = 0) => {
            const deltaTime = time - currentTime;
            currentTime = time;

            this.piece.update(deltaTime);
            this.draw();
            requestAnimationFrame(update);
        }
        update();
    }

    draw() {
        this.ctx.fillStyle = 'gray';
        // this.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.drawPiece(this.board.newBoard, { x: 0, y: 0 });
        this.drawPiece(this.piece.shape, this.piece.pos);
    }

    drawPiece(shape, adjustPos) {
        shape.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value !== 0) {
                    // this.ctx.fillStyle = 'red';
                    this.ctx.fillStyle = this.pieceColors[value];
                    this.ctx.fillRect(j + adjustPos.j, i + adjustPos.i, 1, 1)
                }
            })
        })
    }
}

export default Game;

// import Piece from './piece';
// import Board from './board';

// const GAMESTATE = {
//     PAUSED: 0,
//     PLAY: 1,
//     GAMEOVER: 2,
//     MENU: 3,
// }

// class Game {
//     constructor(gameWidth, gameHeight, ctx) {
//         this.ctx = ctx;
//         this.gameWidth = gameWidth;
//         this.gameHeight = gameHeight;

//         // this.gamestate = GAMESTATE.MENU;

//         this.board = new Board(this);
//         this.piece = new Piece(this);

//         this.pieceColors = [
//             null, 
//             'red',
//             'orange',
//             'yellow',
//             'green',
//             'blue',
//             'purple',
//             'pink',
//         ]

//         let lastTime = 0;
//         const updateGame = (time = 0) => {
//             const deltaTime = time - lastTime;
//             lastTime = time;

//             this.piece.update(deltaTime);

//             this.draw();
//             requestAnimationFrame(updateGame);
//         }

//         updateGame();
//     }

//     draw() {
//         this.ctx.fillStyle = 'gray';
//         this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

//         this.drawPiece(this.board.newBoard, { x: 0, y: 0 });
//         this.drawPiece(this.piece.gamePieces, this.piece.pos);
//     }

//     drawPiece(piece, pos) {
//         piece.forEach((row, y) => {
//             row.forEach((val, x) => {
//                 if (val !== 0) {
//                     this.ctx.fillStyle = 'red';
//                     this.ctx.fillRect(x + pos.x, y + pos.y, 1, 1);
//                 }
//             })
//         })
//     }
// } 

// export default Game