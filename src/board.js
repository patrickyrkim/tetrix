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

// class Board {
//     constructor(game) {
//         this.gameWidth = game.gameWidth;
//         this.gameHeight = game.gameHeight;

//         const newBoard = [];
//         let height = this.gameHeight;
//         while (height !== 0) {
//             newBoard.push(new Array(this.gameWidth / 20).fill(0));

//             height -= 20;
//         }

//         this.newBoard = newBoard;

//         // this.gamePiece = game.piece;
//     }

//     drawPieceToBoard(piece) {
//         piece.newPiece.forEach((row, j) => {
//             row.forEach((value, i) => {
//                 if (value !== 0) {
//                     this.newBoard[j + piece.pos.y][i + piece.pos.x] = value;
//                 }
//             })
//         })
//     }

//     detectCollision(piece) {
//         // const [shape, position] = [this.gamePiece.gamePieces, this.gamePiece.pos];
//         const [shape, position] = [piece.gamePieces, piece.pos];

//         for (let posY = 0; posY < shape.length; posY += 20) {
//             for (let posX = 0; posX < shape[posY].length; posX += 20) {
//                 let value = shape[posY][posX];
//                 let xCollisionFactor = this.newBoard[posY + position.y];
//                 let yCollisionFactor = this.newBoard[posY + position.y][posX + position.x];

//                 if (value !== 0 && (xCollisionFactor && yCollisionFactor) !== 0) {
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }
// }

// export default Board;