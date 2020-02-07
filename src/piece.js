import { tetrisShapes } from './piece_shapes';

class Piece {
    constructor(game) {
        this.game = game;
        this.board = game.board;
        this.pos = {
            x: 0,
            y: 0,
        };
        this.shape = null;
        this.score = 0;

        this.restart();

        this.dropCounter = 0;
        this.dropTime = 1000;
    }

    moveLeft() {
        this.pos.x -= 1;

        if (this.board.detectCollision(this)) {
            this.pox.x += 1
        }
    }

    moveRight() {
        this.pos.x += 1;

        if (this.board.detectCollision(this)) {
            this.pox.x -= 1
        }
    }

    moveDown() {
        this.pos.y += 1;

        if (this.board.detectCollision(this)) {
            this.pos.y += 1;
            this.board.lockPieceOnBoard(this);
            this.restart();
            this.board.clearFilledRow();
            updateScore();
        }

        this.dropCounter = 0;
    }

    fastDrop() {
        this.dropTime = 0;
    }

    rotateAction() {
        const posX = this.pos.x;
        let offset = 1;
        this.rotateShape(this.shape);

        while (this.board.detectCollision(this)) {
            this.pos.x += offset;
            
            if (offset > 0) {
                offset = -(offset + 1);
            } else {
                offset = -(offset + (-1));
            }

            if (offset > this.shape[0].length) {
                this.rotateShape(this.shape);
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

    restart() {
        const pieces = 'TIOJLZS';
        this.shape = tetrisShapes(pieces[Math.floor(Math.random() * pieces.length)]);
        this.pos.x = Math.floor(this.board.newBoard[0].length / 2) - Math.floor(this.shape[0].length / 2);

        if (this.board.detectCollision(this)) {
            // this.board.forEach((row) => row.fill(0));
            this.board.clearRow();
            this.score = 0;
            updateScore();
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

//     moveLeft() {
//         // this.pos.x -= 20;
//         this.pos.x -= 1;

//         // if (this.detectCollision(-20, 0, this.gamePieces)) {
//         //     this.pos.x -= 20;
//         // }
//     }

//     moveRight() {
//         // this.pos.x += 20;
//         this.pos.x += 1;

//         // if (this.detectCollision(20, 0, this.gamePieces)) {
//         //     this.pos.x += 20;
//         // }
//     }

//     moveDown() {
//         // this.pos.y += 20;
//         this.pos.y += 1;
//         this.dropCounter = 0;

//         // if (this.board.detectCollision()) {
//         //     this.pos.y -= 20;
//         // }
//     }

//     fastDrop() {
//         this.dropTime = 0;
//     }

//     rotateAction() {
//         this.rotatePiece(this.gamePieces);

//         // if (!this.detectCollision(0, 20, this.gamePieces)) {
//         //     this.rotatePiece(this.gamePieces);
//         // } 
//     }

//     rotatePiece(pieceShape) {
//         for (let i = 0; i < pieceShape.length; i++) {
//             for (let j = 0; j < i; j++) {
//                 [pieceShape[j][i], pieceShape[i][j]] = [pieceShape[i][j], pieceShape[j][i]];
//             }
//         }

//         pieceShape.forEach((row) => row.reverse());
//     }

//     detectCollision(x, y, piece) {
//         for (let row = 0; row < piece.length; row += 1) {
//             for (let col = 0; col < piece[row].length; col += 1) {
//                 if (this.gamePieces[row][col] !== 0) {
//                     continue;
//                 }

//                 let newXPos = this.pos.x + col + x;
//                 let newYPos = this.pos.y + row + y;

//                 if (newXPos < 0 || newXPos >= this.gameWidth || newYPos >= this.gameHeight) {
//                     return true;
//                 }

//                 if (newYPos < 0) {
//                     continue;
//                 }

//                 if (this.board[newYPos][newXPos] !== 0) {
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }

//     update(deltaTime) {
//         this.dropCounter += deltaTime;

//         if (this.dropCounter > this.dropTime) {
//             this.moveDown();
//         }
//     }
// }

// export default Piece;