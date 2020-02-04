class Board {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        const newBoard = [];
        let height = this.gameHeight;
        while (height !== 0) {
            newBoard.push(new Array(this.gameWidth).fill(0));

            height -= 20;
        }
        this.newBoard = newBoard;
    }

    // draw() {
        // const newBoard = [];
        // let height = this.gameHeight;
        // while (height !== 0) {
        //     newBoard.push(new Array(this.gameWidth).fill(0));

        //     height -= 20;
        // }
        // return newBoard;
    // }

    drawPieceToBoard(piece) {
        piece.newPiece.forEach((row, j) => {
            row.forEach((value, i) => {
                if (value === 1) {
                    this.newBoard[j + piece.pos.y][i + piece.pos.x] = value;
                }
            })
        })
    }
}

export default Board;