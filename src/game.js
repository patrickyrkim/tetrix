import Board from "./board";
import Piece from './piece';

const GAMESTATE = {
    PAUSED: 0,
    PLAY: 1,
    GAMEOVER: 2,
    MENU: 3,
}

class Game {
    constructor(canvas) {
        this.canvas = canvas;

        this.ctx = canvas.getContext('2d');

        this.ctx.scale(20, 20);
        // this.ctx.scale(30, 30);

        this.gamestate = GAMESTATE.MENU;

        this.pieceColors = [
            null,
            'purple',
            'cyan',
            'yellow',
            'blue',
            'orange',
            'red',
            'green',
        ];

        // this.board = new Board(GAME_WIDTH, GAME_HEIGHT);
        this.board = new Board(this.canvas.width / 20, this.canvas.height / 20);
        this.piece = new Piece(this);

        let currentTime = 0;
        // this.currentTime = 0;
        this.update = (time = 0) => {
            const deltaTime = time - currentTime;
            currentTime = time;

            this.piece.update(deltaTime);
            this.draw();
            requestAnimationFrame(this.update);
        }
        // this.update();
        // this.updateScore(0);
    }

    start() {
        this.update();
        this.updateScore(0);
    }

    // update(time = 0) {
    //         const deltaTime = time - this.currentTime;
    //         this.currentTime = time;

    //         this.piece.update(deltaTime);
    //         this.draw();
    //         requestAnimationFrame(this.update);
    // }

    toggleGameStart() {
        if (this.gamestate === GAMESTATE.MENU) {
            this.gamestate = GAMESTATE.RUNNING;
        }
    }

    draw() {
        // this.ctx.fillStyle = 'gray';
        // // this.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // // this.ctx.strokeStyle = 'black';
        // // this.ctx.strokeRect(0, 0, 20, 20)

        // this.drawPiece(this.board.newBoard, { x: 0, y: 0 });
        // this.drawPiece(this.piece.shape, this.piece.pos);

        if (this.gamestate === GAMESTATE.MENU) {
            this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
            // this.ctx.fillStyle = '#5D5C61';
            // this.ctx.fillStyle = '#7395AE';
            // this.ctx.fillStyle = '#001f3f';
            this.ctx.fillStyle = '#98B4D4';
            this.ctx.fill();

            this.ctx.font = '30px arial';
            this.ctx.fillStyle = 'white';
            this.ctx.textAlign = 'center';
            this.ctx.fillText("Press ENTER To Start", this.canvas.width / 2, this.canvas.height / 2);
        }

        if (this.gamestate === GAMESTATE.RUNNING) {
            this.ctx.fillStyle = '#001f3f';
            // this.ctx.fillStyle = '#98B4D4';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.drawPiece(this.board.newBoard, { x: 0, y: 0 });
            this.drawPiece(this.piece.shape, this.piece.pos);
        }
    }

    drawPiece(shape, adjustPos) {
        shape.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value !== 0) {
                    // this.ctx.fillStyle = 'red';
                    this.ctx.fillStyle = this.pieceColors[value];
                    this.ctx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1)
                    // this.ctx.strokeStyle = 'black';
                    // this.ctx.strokeRect(j + adjustPos.x, i + adjustPos.y, 1, 1);
                }
            })
        })
    }

    updateScore(score) {
        // document.getElementById('score').innerText = `Score: ${game.piece.score}`;
        // document.getElementById('score').innerText = `Score: ${score}`;
        document.getElementById('score').innerText = `${score}`;
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