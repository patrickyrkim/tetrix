class Board {
    constructor(gameWidth, gameHeight) {
        const newBoard = [];

        while (gameHeight !== 0) {
            newBoard.push(new Array(gameWidth).fill(0));

            gameHeight -= 1
        }

        // while (gameHeight--) {
        //     newBoard.push(new Array(gameWidth).fill(0));
        // }

        this.newBoard = newBoard;
    }

    nextPieceBoard(width, height) {
        const nextBoard = [];

        while (height !== 0) {
            nextBoard.push(new Array(width).fill(0));

            height -= 1
        }

        return nextBoard;
    }

    detectCollision(piece) {
        const [shape, position] = [piece.shape, piece.pos];

        for (let posY = 0; posY < shape.length; posY++) {
            for (let posX = 0; posX < shape[posY].length; posX++) {
                // const value = shape[posY][posX];
                // const xCollisionFactor = this.newBoard[posY + position.y];
                // const yCollisionFactor = this.newBoard[posY + position.y][posX + position.x];

                // if (value !== 0 && (xCollisionFactor && yCollisionFactor) !== 0) {
                //     return true;
                // }

                if (shape[posY][posX] !== 0 && (this.newBoard[posY + position.y] && this.newBoard[posY + position.y][posX + position.x]) !== 0) {
                    return true;
                }
            }
        }
        return false;
    }

    clearRow() {
        this.newBoard.forEach((row) => row.fill(0));
    }

    // clearNextPiece() {
    //     this.nextPieceBoard().forEach((row) => row.fill(0));
    // }

    clearFilledRow() {
        let rowCounter = 1;
        let score = 0;

        loop1: 
            for (let i = this.newBoard.length - 1; i > 0; i -= 1) {
        // loop2:  
                let boardRow = this.newBoard[i];
                for (let j = 0; j < boardRow.length; j += 1) {
                    let value = this.newBoard[i][j];
                    if (value === 0) {
                        continue loop1;
                    }
                }

                const row = this.newBoard.splice(i, 1)[0].fill(0);
                this.newBoard.unshift(row);
                i += 1;

                score += rowCounter * 10;
            }
            return score;
    }

    lockPieceOnBoard(piece) {
        piece.shape.forEach((row, j) => {
            row.forEach((value, i) => {
                if (value !== 0) {
                    this.newBoard[j + piece.pos.y][i + piece.pos.x] = value;
                }
            })
        })
    }
}

export default Board;