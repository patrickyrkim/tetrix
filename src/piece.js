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
            // x: 60,
            x: this.gameWidth / 2 - 20,
            y: 0,
        }

        this.gamePieces = gamePieces;

        this.dropCounter = 0;
        this.dropTime = 1000;
    }

    draw() {
        this.gamePieces.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value === 1) {
                    this.ctx.fillStyle = 'red';
                    this.ctx.fillRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)
                    // ctx.fillRect(x, y, 1, 1)
                }
            })
        })
    }

    drawSquare(ctx, x, y, color) {
        const SQUARE = 20;
        
        ctx.fillStyle = color;
        ctx.fillRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);
        // ctx.fillRect(x, y, 1, 1);

        ctx.strokeStyle = "BLACK"
        ctx.strokeRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);
        // ctx.strokeRect(x, y, 1, 1);
    }

    moveLeft() {
        this.pos.x -= 20;
    }

    moveRight() {
        this.pos.x += 20;
    }

    moveDown() {
        this.pos.y += 20;
        this.dropCounter = 0;
    }

    rotateAction() {

    }

    rotatePiece() {

    }

    update(deltaTime) {
        this.dropCounter += deltaTime;

        if (this.dropCounter > this.dropTime) {
            this.moveDown();
        }
    }
}

export default Piece;