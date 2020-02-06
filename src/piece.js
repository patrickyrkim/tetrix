const gamePieces = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
]

class Piece {
    constructor(game) {
        this.ctx = game.ctx;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.pos = {
            // x: this.gameWidth / 2 - 20,
            x: this.gameWidth / 2,
            y: 0,
        }

        this.gamePieces = gamePieces;
        this.newPiece = null;

        this.dropCounter = 0;
        this.dropTime = 1000;

        this.board = game.board;
    }

    draw() {
        this.gamePieces.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value === 1) {
                    this.ctx.fillStyle = 'red';
                    this.ctx.fillRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)
                    // this.ctx.fillRect(x, y, 1, 1);

                    // this.ctx.strokeStyle = 'white';
                    this.ctx.strokeStyle = 'black';
                    this.ctx.strokeRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)
                    // this.ctx.strokeRect(x, y, 1, 1);
                }
            })
        })
    }

    unDraw() {
        this.gamePieces.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value === 1) {
                    this.ctx.fillStyle = 'black';
                    this.ctx.fillRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)
                    // ctx.fillRect(x, y, 1, 1)

                    // this.ctx.strokeStyle = 'white';
                    this.ctx.strokeStyle = 'gray';
                    this.ctx.strokeRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)
                }
            })
        })
    }

    drawSquare(ctx, x, y, color) {
        const SQUARE = 20;
        
        ctx.fillStyle = color;
        ctx.fillRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);
        // ctx.fillRect(x, y, 1, 1);

        // ctx.strokeStyle = "BLACK";
        ctx.strokeStyle = "gray";
        ctx.strokeRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);
        // ctx.strokeRect(x, y, 1, 1);
    }

    moveLeft() {
        this.pos.x -= 20;

        // if (this.detectCollision(-20, 0, this.gamePieces)) {
        //     this.pos.x -= 20;
        // }
    }

    moveRight() {
        this.pos.x += 20;

        // if (this.detectCollision(20, 0, this.gamePieces)) {
        //     this.pos.x += 20;
        // }
    }

    moveDown() {
        this.pos.y += 20;
        this.dropCounter = 0;

        if (this.board.detectCollision()) {
            // this.pos.y -= 20;
        }

        // if (!this.detectCollision(0, 20, this.gamePieces)) {
        //     this.pos.y += 20;
        //     this.dropCounter = 0;
        // }
    }

    fastDrop() {
        this.dropTime = 0;
    }

    rotateAction() {
        this.rotatePiece(this.gamePieces);

        // if (!this.detectCollision(0, 20, this.gamePieces)) {
        //     this.rotatePiece(this.gamePieces);
        // } 
    }

    rotatePiece(pieceShape) {
        for (let i = 0; i < pieceShape.length; i++) {
            for (let j = 0; j < i; j++) {
                [pieceShape[j][i], pieceShape[i][j]] = [pieceShape[i][j], pieceShape[j][i]];
            }
        }

        pieceShape.forEach((row) => row.reverse());
    }

    detectCollision(x, y, piece) {
        for (let row = 0; row < piece.length; row += 1) {
            for (let col = 0; col < piece[row].length; col += 1) {
                if (this.gamePieces[row][col] === 1) {
                    continue;
                }

                let newXPos = this.pos.x + col + x;
                let newYPos = this.pos.y + row + y;

                if (newXPos < 0 || newXPos >= this.gameWidth || newYPos >= this.gameHeight) {
                    return true;
                }

                if (newYPos < 0) {
                    continue;
                }

                if (this.board[newYPos][newXPos] !== 0) {
                    return true;
                }
            }
        }
        return false;
    }

    update(deltaTime) {
        this.dropCounter += deltaTime;

        if (this.dropCounter > this.dropTime) {
            this.moveDown();
        }
    }
}

export default Piece;