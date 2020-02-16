import Board from "./board";
import Piece from './piece';

const GAMESTATE = {
    PAUSED: 0,
    PLAY: 1,
    GAMEOVER: 2,
    MENU: 3,
}

class Game {
    constructor(canvas, nextCanvas, holdCanvas) {
        this.canvas = canvas;
        this.nextCanvas = nextCanvas;
        this.holdCanvas = holdCanvas;

        this.ctx = canvas.getContext('2d');
        this.nextCtx = nextCanvas.getContext('2d');
        this.holdCtx = holdCanvas.getContext('2d');

        this.ctx.scale(20, 20);
        // this.ctx.scale(30, 30);
        this.nextCtx.scale(20, 20);
        this.holdCtx.scale(20, 20)

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

            // console.log(time, currentTime);

            this.unDrawPreviousShape(this.piece.shape);
            this.piece.update(deltaTime);
            this.draw();
            // requestAnimationFrame(this.update);  
            if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.GAMEOVER || this.gamestate === GAMESTATE.MENU) {
                cancelAnimationFrame(this.update);
            } else if (this.gamestate === GAMESTATE.PLAY) {
                requestAnimationFrame(this.update);
            }
        }
        // this.update();
        // this.updateScore(0);
    }

    start() {
        this.update();
        this.updateScore(0);
    }

    holdPiece() {
        this.piece.handleHoldShape();
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
            this.gamestate = GAMESTATE.PLAY;
        } else if (this.gamestate === GAMESTATE.GAMEOVER) {
            this.gamestate = GAMESTATE.PLAY;
            this.board.clearRow();
        }
    }

    toggleGamePause() {
        if (this.gamestate === GAMESTATE.PLAY) {
            this.gamestate = GAMESTATE.PAUSED;
            // cancelAnimationFrame(this.update);
            alert("PAUSED GAME, press P to Resume Play");
            return;
            // PAUSES THE GAME BUT PIECES CONTINUE TO FALL???
        } else if (this.gamestate === GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.PLAY;
            requestAnimationFrame(this.update);
            return;
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

            // this.ctx.font = '30px arial';
            // this.ctx.fillStyle = 'white';
            // this.ctx.textAlign = 'center';
            // this.ctx.fillText("Press ENTER To Start", this.canvas.width / 2, this.canvas.height / 2);
        }

        if (this.gamestate === GAMESTATE.PLAY) {
            this.ctx.fillStyle = '#001f3f';
            // this.ctx.fillStyle = '#98B4D4';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // this.nextCtx.rect(0, 0, this.nextCanvas.width, this.nextCanvas.height);
            // this.nextCtx.fillStyle = '#001f3f'
            // this.nextCtx.fill();

            this.drawPiece(this.board.newBoard, { x: 0, y: 0 });
            this.drawPiece(this.piece.shape, this.piece.pos);

            // this.unDrawPreviousShape();
            this.drawNextPiece(this.board.nextPieceBoard(this.nextCanvas.width / 20, this.nextCanvas.height / 20), { x: 0, y: 0 })
            // this.drawNextPiece(this.piece.nextShape, { x: this.piece.nextShape[0].length / 2, y: 1 });
            this.drawNextPiece(this.piece.nextShape, { x: 1, y: 1 });
            
            this.drawNextPiece(this.board.nextPieceBoard(this.holdCanvas.width / 20, this.holdCanvas.height / 20), { x: 0, y: 0 })
        }

        if (this.gamestate === GAMESTATE.GAMEOVER) {
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';  //opaque color???
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fill();

            // this.ctx.font = '30px arial';
            // this.ctx.fillStyle = 'white';
            // this.ctx.textAlign = 'center';
            // this.ctx.fillText("GAMEOVER", this.canvas.width / 2, this.canvas.height / 2);
        }

        if (this.gamestate === GAMESTATE.PAUSED) {
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fill();

            // this.ctx.font = '30px arial';
            // this.ctx.fillStyle = 'white';
            // this.ctx.textAlign = 'center';
            // this.ctx.fillText("PAUSED", this.canvas.width / 2, this.canvas.height / 2);
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

    drawNextPiece(nextShape, adjustPos) {
        nextShape.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value !== 0) {
                    this.nextCtx.fillStyle = this.pieceColors[value];
                    this.nextCtx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1)
                }
            })
        })
    }

    // unDrawPreviousShape() {
    //     this.board.nextPieceBoard((this.nextCanvas.width / 20, this.nextCanvas.height / 20), { x: 0, y: 0 }).forEach((row, i) => {
    //         row.forEach((value, j) => {
    //             this.nextCtx.fillStyle = '#001f3f';
    //             // this.nextCtx.rect(0, 0, this.nextCanvas.width, this.nextCanvas.height);
    //             this.nextCtx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1);
    //             this.nextCtx.fill()
    //         })
    //     })
    // }

    unDrawPreviousShape(shape) {
       shape.forEach((row, i) => {
            row.forEach((value, j) => {
                this.nextCtx.fillStyle = '#001f3f';
                this.nextCtx.fillRect(j + 1, i + 1, 1, 1);
            })
        })
    }

    ///// HOLD /////
    drawHoldPiece(nextShape, adjustPos) {
        nextShape.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value !== 0) {
                    this.holdCtx.fillStyle = this.pieceColors[value];
                    this.holdCtx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1)
                }
            })
        })
    }

    unDrawPreviousHoldShape(shape) {
        shape.forEach((row, i) => {
            row.forEach((value, j) => {
                this.holdCtx.fillStyle = '#001f3f';
                this.holdCtx.fillRect(j + 1, i + 1, 1, 1);
            })
        })
    }
    //////

    ////// CURRENT PIECE //////
    unDrawCurrentShape(shape, adjustPos) {
        shape.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value !== 0) {
                    this.ctx.fillStyle = '#001f3f';
                    this.ctx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1)
                }
            })
        })
    }
    //////

    updateScore(score) {
        // document.getElementById('score').innerText = `Score: ${game.piece.score}`;
        // document.getElementById('score').innerText = `Score: ${score}`;
        document.getElementById('score').innerText = `${score}`;
    }
}

export default Game; 