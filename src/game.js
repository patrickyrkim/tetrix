import Board from "./board";
import Piece from './piece';
// import { nextAndHoldShapes } from './next_and_hold_shapes';

const GAMESTATE = {
    PAUSED: 0,
    PLAY: 1,
    GAMEOVER: 2,
    MENU: 3,
}

class Game {
    constructor(canvas, nextCanvas, holdCanvas, nextSecondCanvas, nextThirdCanvas) {
        this.canvas = canvas;
        this.nextCanvas = nextCanvas;
        this.nextSecondCanvas = nextSecondCanvas;
        this.nextThirdCanvas = nextThirdCanvas;
        this.holdCanvas = holdCanvas;

        this.ctx = canvas.getContext('2d');
        this.nextCtx = nextCanvas.getContext('2d');
        this.nextSecondCtx = nextSecondCanvas.getContext('2d');
        this.nextThirdCtx = nextThirdCanvas.getContext("2d");
        this.holdCtx = holdCanvas.getContext('2d');

        this.ctx.scale(20, 20);
        this.nextCtx.scale(20, 20);
        this.nextSecondCtx.scale(20, 20);
        this.nextThirdCtx.scale(20, 20);
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
        // let currentTime;
        // this.currentTime = 0;
        this.update = (time = 0) => {
            // const deltaTime = (time) - currentTime;
            // currentTime = time;

            //// LEVELS ////
            // currentTime = 0;
            let deltaTime;
            if (this.piece.score >= 0 && this.piece.score < 100) {
                deltaTime = time - currentTime;
                currentTime = time;
            } else if (this.piece.score >= 100 && this.piece.score < 200) {
                deltaTime = (time) - currentTime + 25;
                currentTime = time;
            } else if (this.piece.score >= 200 && this.piece.score < 300) {
                deltaTime = (time) - currentTime + 50;
                currentTime = time;
            } else if (this.piece.score >= 300 && this.piece.score < 400) {
                deltaTime = (time) - currentTime + 75;
                currentTime = time;
            } else if (this.piece.score >= 400 && this.piece.score < 500) {
                deltaTime = (time) - currentTime + 100;
                currentTime = time;
            } else if (this.piece.score >= 500 && this.piece.score < 600) {
                deltaTime = (time) - currentTime + 125;
                currentTime = time;
            } else if (this.piece.score >= 600 && this.piece.score < 700) {
                deltaTime = (time) - currentTime + 150;
                currentTime = time;
            } else if (this.piece.score >= 700 && this.piece.score < 800) {
                deltaTime = (time) - currentTime + 175;
                currentTime = time;
            } else if (this.piece.score >= 800 && this.piece.score < 900) {
                deltaTime = (time) - currentTime + 200;
                currentTime = time;
            } else {
                deltaTime = (time) - currentTime + 225;
                currentTime = time;
            }
            ///////////////

            // console.log(time, currentTime);

            this.unDrawPreviousShape(this.piece.shape);
            
            this.unDrawSecondPreviousShape(this.piece.nextShape);
            // this.unDrawSecondPreviousShape(this.piece.shape);
            this.unDrawThirdPreviousShape(this.piece.nextSecondShape);
            // this.unDrawThirdPreviousShape(this.piece.shape);

            // if ((this.score / 10) % 10 === 0) {
            //   deltaTime += 1000;
            // }

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

            ///// GUIDE SHAPE /////
            // this.drawPiece(this.piece.guideShape, this.piece.guidePos);
            /////

            this.drawNextPiece(this.board.nextPieceBoard(this.nextCanvas.width / 20, this.nextCanvas.height / 20), { x: 0, y: 0 })
            this.drawSecondNextPiece(this.board.nextPieceBoard(this.nextSecondCanvas.width / 20, this.nextSecondCanvas.height / 20), { x: 0, y: 0 })
            this.drawThirdNextPiece(this.board.nextPieceBoard(this.nextThirdCanvas.width / 20, this.nextThirdCanvas.height / 20), { x: 0, y: 0 })

            this.drawNextPiece(this.piece.nextShape, { x: 2, y: 1 });
            this.drawSecondNextPiece(this.piece.nextSecondShape, { x: 2, y: 1 });
            this.drawThirdNextPiece(this.piece.nextThirdShape, { x: 2, y: 1 });
            
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
                    this.ctx.strokeStyle = 'black';
                    this.ctx.lineWidth = 0.1;
                    this.ctx.strokeRect(j + adjustPos.x, i + adjustPos.y, 1, 1);
                } else {
                    this.ctx.strokeStyle = 'gray';
                    this.ctx.lineWidth = 0.1;
                    // this.ctx.strokeRect(j + adjustPos.x, i + adjustPos.y, 1, 1);
                    this.ctx.strokeRect(j, i, 1, 1);
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
                    this.nextCtx.strokeStyle = "black";
                    this.nextCtx.lineWidth = 0.1;
                    this.nextCtx.strokeRect(j + adjustPos.x, i + adjustPos.y, 1, 1);
                }
            })
        })
    }

    unDrawPreviousShape(shape) {
       shape.forEach((row, i) => {
            row.forEach((value, j) => {
                this.nextCtx.fillStyle = '#001f3f';
                this.nextCtx.fillRect(j + 2, i + 1, 1, 1);
                this.nextCtx.strokeStyle = "#001f3f";
                this.nextCtx.lineWidth = 0.1;
                this.nextCtx.strokeRect(j + 2, i + 1, 1, 1);
            })
        })
    }

    ///// SECOND PIECE 
    drawSecondNextPiece(nextShape, adjustPos) {
        nextShape.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value !== 0) {
                    this.nextSecondCtx.fillStyle = this.pieceColors[value];
                    this.nextSecondCtx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1)
                    this.nextSecondCtx.strokeStyle = "black";
                    this.nextSecondCtx.lineWidth = 0.1;
                    this.nextSecondCtx.strokeRect(j + adjustPos.x, i + adjustPos.y, 1, 1);
                }
            })
        })
    }

    unDrawSecondPreviousShape(shape) {
       shape.forEach((row, i) => {
            row.forEach((value, j) => {
                this.nextSecondCtx.fillStyle = '#001f3f';
                this.nextSecondCtx.fillRect(j + 2, i + 1, 1, 1);
                this.nextSecondCtx.strokeStyle = "#001f3f";
                this.nextSecondCtx.lineWidth = 0.1;
                this.nextSecondCtx.strokeRect(j + 2, i + 1, 1, 1);
            })
        })
    }

    ////// THIRD PIECE
    drawThirdNextPiece(nextShape, adjustPos) {
        nextShape.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value !== 0) {
                    this.nextThirdCtx.fillStyle = this.pieceColors[value];
                    this.nextThirdCtx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1)
                    this.nextThirdCtx.strokeStyle = "black";
                    this.nextThirdCtx.lineWidth = 0.1;
                    this.nextThirdCtx.strokeRect(j + adjustPos.x, i + adjustPos.y, 1, 1);
                }
            })
        })
    }

    unDrawThirdPreviousShape(shape) {
       shape.forEach((row, i) => {
            row.forEach((value, j) => {
                this.nextThirdCtx.fillStyle = '#001f3f';
                this.nextThirdCtx.fillRect(j + 2, i + 1, 1, 1);
                this.nextThirdCtx.strokeStyle = "#001f3f";
                this.nextThirdCtx.lineWidth = 0.1;
                this.nextThirdCtx.strokeRect(j + 2, i + 1, 1, 1);
            })
        })
    }
    //////

    // unDrawPreviousShape(shape, adjustPos) {
    //    shape.forEach((row, i) => {
    //         row.forEach((value, j) => {
    //             this.nextCtx.fillStyle = "#001f3f";
    //             this.nextCtx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1);
    //             this.nextCtx.strokeStyle = "#001f3f";
    //             this.nextCtx.lineWidth = 0.1;
    //             this.nextCtx.strokeRect(j + adjustPos.x, i + adjustPos.y, 1, 1);
    //         })
    //     })
    // }

    ///// HOLD /////
    drawHoldPiece(nextShape, adjustPos) {
        nextShape.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value !== 0) {
                    this.holdCtx.fillStyle = this.pieceColors[value];
                    this.holdCtx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1);
                    this.holdCtx.strokeStyle = "black";
                    this.holdCtx.lineWidth = 0.1;
                    this.holdCtx.strokeRect(j + adjustPos.x, i + adjustPos.y, 1, 1);
                }
            })
        })
    }

    unDrawPreviousHoldShape(shape) {
        shape.forEach((row, i) => {
            row.forEach((value, j) => {
                this.holdCtx.fillStyle = '#001f3f';
                this.holdCtx.fillRect(j + 2, i + 1, 1, 1);
                this.holdCtx.strokeStyle = "#001f3f";
                this.holdCtx.lineWidth = 0.1;
                this.holdCtx.strokeRect(j + 2, i + 1, 1, 1);
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
                    this.ctx.strokeStyle = "#001f3f";
                    this.ctx.lineWidth = 0.1;
                    this.ctx.strokeRect(j + adjustPos.x, i + adjustPos.y, 1, 1);
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