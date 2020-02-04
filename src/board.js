class Board {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
    }

    draw() {
        const newBoard = [];
        let height = this.gameHeight;
        while (height !== 0) {
            newBoard.push(new Array(this.gameWidth).fill(0));

            height -= 20;
        }
        return newBoard;
    }
}

export default Board;