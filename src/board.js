class Board {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        const newBoard = [];
        let height = this.gameHeight;
        while (height !== 0) {
            newBoard.push(new Array(this.gameWidth / 20).fill(0));

            height -= 20;
        }

        this.newBoard = newBoard;

        // this.gamePiece = game.piece;
    }

    drawPieceToBoard(piece) {
        piece.newPiece.forEach((row, j) => {
            row.forEach((value, i) => {
                if (value !== 0) {
                    this.newBoard[j + piece.pos.y][i + piece.pos.x] = value;
                }
            })
        })
    }

    detectCollision(piece) {
        // const [shape, position] = [this.gamePiece.gamePieces, this.gamePiece.pos];
        const [shape, position] = [piece.gamePieces, piece.pos];

        for (let posY = 0; posY < shape.length; posY += 20) {
            for (let posX = 0; posX < shape[posY].length; posX += 20) {
                let value = shape[posY][posX];
                let xCollisionFactor = this.newBoard[posY + position.y];
                let yCollisionFactor = this.newBoard[posY + position.y][posX + position.x];

                if (value !== 0 && (xCollisionFactor && yCollisionFactor) !== 0) {
                    return true;
                }
            }
        }
        return false;
    }
}

export default Board;