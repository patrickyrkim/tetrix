import { tetrisShapes } from './piece_shapes';

const GAMESTATE = {
    PAUSED: 0,
    PLAY: 1,
    GAMEOVER: 2,
    MENU: 3,
}

class Piece {
    constructor(game) {
        this.game = game;
        this.board = game.board;
        this.pos = {
            x: 0,
            y: 0
        };
        this.shape = null;
        // this.shuffledShapes = null;

        this.nextShape = null;
        this.holdShape = null;
        this.intermediateShape = null;

        this.score = 0;

        this.dropCounter = 0;
        this.dropTime = 1000;
        
        this.restart();
    }

    moveLeft() {
        this.pos.x -= 1;

        if (this.board.detectCollision(this)) {
            this.pos.x += 1
        }
    }

    moveRight() {
        this.pos.x += 1;

        if (this.board.detectCollision(this)) {
            this.pos.x -= 1
        }
    }

    moveDown() {
        this.pos.y += 1;

        if (this.board.detectCollision(this)) {
            this.pos.y -= 1;
            this.board.lockPieceOnBoard(this);

            this.restart();

            this.score += this.board.clearFilledRow();
            // updateScore();
            this.game.updateScore(this.score);
        }

        this.dropCounter = 0;
    }

    fastDrop() {
        while (!this.board.detectCollision(this)) {
            this.pos.y += 1;
        }

        if (this.board.detectCollision(this)) {
            this.pos.y -= 1;
            this.board.lockPieceOnBoard(this);
            this.restart();
            this.score += this.board.clearFilledRow();
            // updateScore();
            this.game.updateScore(this.score);
        }
    }

    rotateAction() {
        const posX = this.pos.x;
        let collisionFactor = 1;
        this.rotateShape(this.shape);

        while (this.board.detectCollision(this)) {
            this.pos.x += collisionFactor;
            
            if (collisionFactor > 0) {
                collisionFactor = -(collisionFactor + 1);
            } else {
                collisionFactor = -(collisionFactor + (-1));
            }

            if (collisionFactor > this.shape[0].length) {
                // this.rotateShape(this.shape);
                this.rotateShapeReverse(this.shape);
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

    rotateShapeReverse(pieceShape) {
        for (let i = 0; i < pieceShape.length; i++) {
            for (let j = 0; j < i; j++) {
                [pieceShape[j][i], pieceShape[i][j]] = [pieceShape[i][j], pieceShape[j][i]];
            }
        }

        pieceShape.reverse();
    }

    // shuffle(array) {
    //     array.sort(() => Math.random() - 0.5);
    // }

    // shuffle(a) {
    //     for (let i = a.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [a[i], a[j]] = [a[j], a[i]];
    //     }
    //     return a;
    // }

    // handleRandomShape() {
    //     const shapes = ['T', 'I', 'O', 'J', 'L', 'Z', 'S'];
    //     this.shape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]);
    //     // this.nextShape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]);
    // }

    handleCurrentShape() {
        const shapes = ['T', 'I', 'O', 'J', 'L', 'Z', 'S'];
        this.shape = this.nextShape;
        this.shape === null ? this.shape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]) : this.shape = this.nextShape;
    }

    handleNextShape() {
        const shapes = ['T', 'I', 'O', 'J', 'L', 'Z', 'S'];
        this.nextShape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]);
    }

    updateNextPiece(nextPiece) {
        // document.getElementById('next').innerText = `${nextPiece}`;
        document.getElementById('next-canvas').innerText = `${nextPiece}`;
    }

    ///// HOLD PIECE
    handleHoldShape() {
        // this.holdShape = this.shape;
        // this.restart();

        if (this.holdShape === null) {
            this.holdShape = this.shape;
            // if (this.holdShape[0].includes(3)) {
            //     this.game.drawHoldPiece(this.holdShape, { x: 2, y: 2 });
            // } else if (this.holdShape[0].includes(2)) {
            //     // this.game.drawHoldPiece(this.holdShape, { x: 1.5, y: 1 });
            //     this.game.drawHoldPiece(this.holdShape, { x: 1, y: 1 });
            // } else {
            //     // this.game.drawHoldPiece(this.holdShape, { x: 1.5, y: 2 });
            //     this.game.drawHoldPiece(this.holdShape, { x: 1, y: 2 });
            // }
            this.game.drawHoldPiece(this.holdShape, { x: 2, y: 1 });
            this.restart();
        } else {
            // this.game.drawNextPiece(this.game.board.nextPieceBoard(6, 6), { x: 0, y: 0 })

            this.game.unDrawPreviousHoldShape(this.holdShape);

            // if (this.piece.nextShape[0].includes(3)) {
            //     this.drawNextPiece(this.piece.nextShape, { x: 2, y: 2 });
            // } else if (this.piece.nextShape[0].includes(2)) {
            //     this.drawNextPiece(this.piece.nextShape, { x: 1.5, y: 1 });
            // } else {
            //     this.drawNextPiece(this.piece.nextShape, { x: 1.5, y: 2 });
            // }

            
            // this.game.unDrawPreviousHoldShape(nextAndHoldShapes(this.holdShape));
            this.game.unDrawCurrentShape(this.shape, this.pos);

            // if (this.shape[0].includes(3)) {
            //     this.game.drawHoldPiece(this.shape, { x: 2, y: 2 });
            // } else if (this.shape[0].includes(2)) {
            //     // this.game.drawholdPiece(this.shape, { x: 1.5, y: 1 });
            //     this.game.drawholdPiece(this.shape, { x: 1, y: 1 });
            // } else {
            //     // this.game.drawHoldPiece(this.shape, { x: 1.5, y: 2 });
            //     this.game.drawHoldPiece(this.shape, { x: 1, y: 2 });
            // }
            
            this.game.drawHoldPiece(this.shape, { x: 2, y: 1 });

            // this.intermediateShape = this.holdShape;
            // this.holdShape = this.shape;
            // this.shape = this.intermediateShape;
            [this.shape, this.holdShape] = [this.holdShape, this.shape];

            this.game.drawPiece(this.shape, this.pos);

            let collisionFactor = 1;
            while (this.board.detectCollision(this)) {
                this.pos.x += collisionFactor;
            
                if (collisionFactor > 0) {
                    collisionFactor = -(collisionFactor + 1);
                } else {
                    collisionFactor = -(collisionFactor + (-1));
                }
            }
        }
    }

    updateHoldPiece(holdPiece) {
        document.getElementById('hold-canvas').innerText = `${holdPiece}`;
    }
    /////

    restart() {
        // // const shapes = 'TIOJLZS';
        // const shapes = ['T', 'I', 'O', 'J', 'L', 'Z', 'S'];
        // // let shuffledShapes = this.shuffle(shapes);
        // // this.shape = tetrisShapes(shuffledShapes[Math.floor(Math.random() * shapes.length)]);
        // this.shape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]);

        this.handleCurrentShape();
        this.handleNextShape();
        // if (this.nextShape[0].includes(3)) {
        //   // this.drawNextPiece(this.piece.nextShape, { x: 2, y: 2 });
        //   this.game.unDrawPreviousShape(this.shape, { x: 2, y: 2 });
        // } else if (this.nextShape[0].includes(2)) {
        //   // this.drawNextPiece(this.piece.nextShape, { x: 1.5, y: 1 });
        //   this.game.unDrawPreviousShape(this.shape, { x: 1.5, y: 1 });
        // } else {
        //   // this.drawNextPiece(this.piece.nextShape, { x: 1.5, y: 2 });
        //   this.game.unDrawPreviousShape(this.shape, { x: 1.5, y: 2 });
        // }
        this.updateNextPiece(this.nextShape);
        // this.updateNextPiece(nextAndHoldShape(this.nextShape));

        this.pos.x = Math.floor(this.board.newBoard[0].length / 2) - Math.floor(this.shape[0].length / 2);
        // this.pos.x = Math.floor(this.board.newBoard[0].length / 2) - Math.floor(this.nextShape[0].length / 2);
        this.pos.y = 0;

        if (this.board.detectCollision(this)) {
            // GAMESTATE === GAMEOVER
            if (this.game.gamestate === GAMESTATE.PLAY) {
                this.game.gamestate = GAMESTATE.GAMEOVER;
                alert('GAME OVER! Press ENTER to Restart Game');
                return;
            }
            
            // this.board.forEach((row) => row.fill(0));
            this.board.clearRow();
            this.score = 0;
            // updateScore();
            this.game.updateScore(this.score)
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