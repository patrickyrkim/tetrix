class GuidePiece {
    constructor(game) {
        this.game = game;
        this.board = game.board;

        this.pos = {
            x: 0,
            y: 0
        }

        // this.shape = game.piece.shape;
        this.shape = null;
    }

    handleGuideShape() {
        this.shape = this.game.piece.shape; // TypeError: Cannot read property 'shape' of

        while (!this.board.detectCollision(this)) {
            this.pos.y += 1;
        }

        if (this.board.detectCollision(this)) {
            this.pos.y -= 1;
            this.board.lockPieceOnBoard(this);
        }
    }
}

export default GuidePiece;