import { tetrisShapes } from './piece_shapes';

class Piece {
    constructor(game) {
        this.game = game;
        this.board = game.board;
        this.pos = {
            x: 0,
            y: 0
        };
        this.shape = null;
        // this.shuffledShapes = null;
        this.nextShape = null;
        this.score = 0;

        this.dropCounter = 0;
        this.dropTime = 1000;
        
        this.restart();
    }

    moveLeft() {
        this.pos.x -= 1;

        if (this.board.detectCollision(this)) {
            this.pos.x += 1
        }
    }

    moveRight() {
        this.pos.x += 1;

        if (this.board.detectCollision(this)) {
            this.pos.x -= 1
        }
    }

    moveDown() {
        this.pos.y += 1;

        if (this.board.detectCollision(this)) {
            this.pos.y -= 1;
            this.board.lockPieceOnBoard(this);
            this.restart();
            this.score += this.board.clearFilledRow();
            // updateScore();
            this.game.updateScore(this.score);
        }

        this.dropCounter = 0;
    }

    fastDrop() {
        // this.dropTime = 0;
        this.pos.y += (20 - this.shape.length);
        // this.pos.y = 20

        if (this.board.detectCollision(this)) {
            this.pos.y -= 1;
            this.board.lockPieceOnBoard(this);
            this.restart();
            this.score += this.board.clearFilledRow();
            // updateScore();
        }

        this.dropCounter = 0;
        // this.dropTime = 1000;
    }

    rotateAction() {
        const posX = this.pos.x;
        let collisionFactor = 1;
        this.rotateShape(this.shape);

        while (this.board.detectCollision(this)) {
            this.pos.x += collisionFactor;
            
            if (collisionFactor > 0) {
                collisionFactor = -(collisionFactor + 1);
            } else {
                collisionFactor = -(collisionFactor + (-1));
            }

            if (collisionFactor > this.shape[0].length) {
                // this.rotateShape(this.shape);
                this.rotateShapeReverse(this.shape);
                this.pos.x = posX;
                return;
            }
        }
    }

    rotateShape(pieceShape) {
        for (let i = 0; i < pieceShape.length; i++) {
            for (let j = 0; j < i; j++) {
                [pieceShape[j][i], pieceShape[i][j]] = [pieceShape[i][j], pieceShape[j][i]];
            }
        }

        pieceShape.forEach((row) => row.reverse());
    }

    rotateShapeReverse(pieceShape) {
        for (let i = 0; i < pieceShape.length; i++) {
            for (let j = 0; j < i; j++) {
                [pieceShape[j][i], pieceShape[i][j]] = [pieceShape[i][j], pieceShape[j][i]];
            }
        }

        pieceShape.reverse();
    }

    // shuffle(array) {
    //     array.sort(() => Math.random() - 0.5);
    // }

    // shuffle(a) {
    //     for (let i = a.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [a[i], a[j]] = [a[j], a[i]];
    //     }
    //     return a;
    // }

    restart() {
        // const shapes = 'TIOJLZS';
        const shapes = ['T', 'I', 'O', 'J', 'L', 'Z', 'S'];
        // let shuffledShapes = this.shuffle(shapes);
        // this.shape = tetrisShapes(shuffledShapes[Math.floor(Math.random() * shapes.length)]);
        this.nextShape = tetrisShapes(shapes[(Math.floor(Math.random() * shapes.length))]);
        // this.shape = this.nextShape;

        if (this.nextShape !== this.shape) {
            this.shape = this.nextShape;
        } else {
            this.shape = tetrisShapes(shapes[(Math.floor(Math.random() * shapes.length))]);
        }

        this.pos.x = Math.floor(this.board.newBoard[0].length / 2) - Math.floor(this.shape[0].length / 2);
        this.pos.y = 0;

        if (this.board.detectCollision(this)) {
            // this.board.forEach((row) => row.fill(0));
            this.board.clearRow();
            this.score = 0;
            // updateScore();
            this.game.updateScore(this.score)
        }
    }

    update(deltaTime) {
        this.dropCounter += deltaTime;

        if (this.dropCounter > this.dropTime) {
            this.moveDown();
        }
    }
}

export default Piece;

// // const gamePieces = [
// //     [0, 0, 0],
// //     [1, 1, 1],
// //     [0, 1, 0],
// // ]

// import { tetrisShapes } from './piece_shapes';

// class Piece {
//     constructor(game) {
//         this.ctx = game.ctx;

//         this.gameWidth = game.gameWidth;
//         this.gameHeight = game.gameHeight;

//         this.pos = {
//             // x: this.gameWidth / 2 - 20,
//             x: Math.floor(this.gameWidth / 2),
//             y: 0,
//         }

//         // const shapes = 'TIOJLZS';
//         this.shapes = 'TIOJLZS';
//         this.gamePieces = tetrisShapes(this.shapes[Math.floor(Math.random() * this.shapes.length)]);

//         // this.gamePieces = gamePieces;
//         this.newPiece = null;

//         this.dropCounter = 0;
//         this.dropTime = 1000;

//         this.board = game.board;
//     }

//     restart() {
//         // const shapes = 'TIOJLZS';
//         this.newPiece = tetrisShapes(this.shapes[Math.floor(Math.random() * this.shapes.length)]);
//         this.pos.x = (Math.floor(this.board.newBoard[0] / 2)) - Math.floor(this.newPiece[0].length / 2);
//         this.pos.y = 0;
//     }

//     // draw() {
//     //     this.gamePieces.forEach((row, y) => {
//     //         row.forEach((value, x) => {
//     //             if (value !== 0) {
//     //                 this.ctx.fillStyle = 'red';
//     //                 // this.ctx.fillRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)
//     //                 this.ctx.fillRect(x, y, 1, 1);

//     //                 // this.ctx.strokeStyle = 'black';
//     //                 // this.ctx.strokeRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)
//     //                 // this.ctx.strokeRect(x, y, 1, 1);
//     //             }
//     //         })
//     //     })
//     // }

//     // unDraw() {
//     //     this.gamePieces.forEach((row, y) => {
//     //         row.forEach((value, x) => {
//     //             if (value !== 0) {
//     //                 this.ctx.fillStyle = 'black';
//     //                 this.ctx.fillRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)
//     //                 // ctx.fillRect(x, y, 1, 1)

//     //                 // this.ctx.strokeStyle = 'white';
//     //                 this.ctx.strokeStyle = 'gray';
//     //                 this.ctx.strokeRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)
//     //             }
//     //         })
//     //     })
//     // }

//     drawSquare(ctx, x, y, color) {
//         // const SQUARE = 20;
        
//         ctx.fillStyle = color;
//         // ctx.fillRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);
//         ctx.fillRect(x, y, 1, 1);

//         // ctx.strokeStyle = "BLACK";
//         ctx.strokeStyle = "gray";
//         // ctx.strokeRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);
//         ctx.strokeRect(x, y, 1, 1);
//     }

//     update(deltaTime) {
//         this.dropCounter += deltaTime;

//         if (this.dropCounter > this.dropTime) {
//             this.moveDown();
//         }
//     }
// }

// export default Piece;