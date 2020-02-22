import { tetrisShapes } from './piece_shapes';

const GAMESTATE = {
    PAUSED: 0,
    PLAY: 1,
    GAMEOVER: 2,
    MENU: 3,
}

const SHAPESYMBOL = ['T', 'I', 'O', 'J', 'L', 'Z', 'S'];

class Piece {
    constructor(game) {
        this.game = game;
        this.board = game.board;
        this.pos = {
            x: 0,
            y: 0
        };
        this.shape = null;

        this.nextShape = null;

        this.nextSecondShape = null;
        this.nextThirdShape = null;

        this.holdShape = null;
        // this.intermediateShape = null;

        this.score = 0;

        this.dropCounter = 0;
        this.dropTime = 1000;

        // if ((this.score / 10) % 10 === 0) {
        //     this.droptime += 1000;
        // }
        
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

        document.getElementById("score-tetrix").hidden = true;

        if (this.board.detectCollision(this)) {
            this.pos.y -= 1;
            this.board.lockPieceOnBoard(this);

            this.restart();

            this.score += this.board.clearFilledRow();
            // updateScore();
            this.game.updateScore(this.score);

            if ((this.score / 10) % 10 === 0) {
              this.droptime += 1000;
            }
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
            
            if ((this.score / 10) % 10 === 0) {
              this.droptime += 1000;
            }
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
        // this.shape = this.nextShape;
        this.shape === null ? this.shape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]) : this.shape = this.nextShape;
    }

    handleNextShape() {
        // const shapes = ['T', 'I', 'O', 'J', 'L', 'Z', 'S'];
        // this.nextShape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]);

        const shapes = ["T", "I", "O", "J", "L", "Z", "S"];
        // this.nextShape = this.nextSecondShape;
        this.nextShape === null ? this.nextShape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]) : this.nextShape = this.nextSecondShape;

    }

    handleSecondShape() {
        const shapes = ["T", "I", "O", "J", "L", "Z", "S"];
        // this.nextSecondShape = this.nextThirdShape;
        this.nextSecondShape === null ? this.nextSecondShape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]) : this.nextSecondShape = this.nextThirdShape;

    }

    handleThirdShape() {
        const shapes = ['T', 'I', 'O', 'J', 'L', 'Z', 'S'];
        this.nextThirdShape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]);
    }

    updateNextPiece(nextPiece) {
        document.getElementById('next-canvas').innerText = `${nextPiece}`;
    }

    updateSecondNextPiece(nextPiece) {
        document.getElementById('second-next-canvas').innerText = `${nextPiece}`;
    }

    updateThirdNextPiece(nextPiece) {
        document.getElementById('third-next-canvas').innerText = `${nextPiece}`;
    }

    ///// HOLD PIECE
    handleHoldShape() {

        if (this.holdShape === null) {
            this.holdShape = this.shape;
            this.game.drawHoldPiece(this.holdShape, { x: 2, y: 1 });
            this.restart();
        } else {
            this.game.unDrawPreviousHoldShape(this.holdShape);
            this.game.unDrawCurrentShape(this.shape, this.pos);
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
        this.handleSecondShape();
        this.handleThirdShape();

        this.updateNextPiece(this.nextShape);
        this.updateSecondNextPiece(this.nextSecondShape);
        this.updateThirdNextPiece(this.nextThirdShape);

        this.pos.x = Math.floor(this.board.newBoard[0].length / 2) - Math.floor(this.shape[0].length / 2);
        this.pos.y = 0;

        if (this.board.detectCollision(this)) {
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

        // document.getElementById("score-tetrix").hidden = true;

        if (this.dropCounter > this.dropTime) {
            this.moveDown();
        }
    }
}

export default Piece;