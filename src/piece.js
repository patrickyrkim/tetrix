class Piece {
    constructor(game) {
        // this.gameWidth = game.gameWidth;
        
        // this.pos = {
        //     x: game.gameWidth / 2 - this.width / 2,
        //     y: game.gameHeight - this.height,
        // }

        // const SQUARE = 20;

        this.ctx = game.ctx;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.pos = {
            // x: 60,
            x: this.gameWidth / 2 - 20,
            y: 0,
        }
    }

    draw() {
        // ctx.fillStyle = '#000';
        // ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

        const gamePieces = [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ]

        gamePieces.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value === 1) {
                    this.ctx.fillStyle = 'red';
                    this.ctx.fillRect(x * 20 + this.pos.x, y * 20, 20, 20)
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

    // moveDown() {
    //     this.pos.y++;
    //     this.draw(this.ctx);
    // }

    // drop() {
    //     // this.draw(ctx);
    //     this.moveDown();
    //     requestAnimationFrame(drop);
    // }
}

export default Piece;