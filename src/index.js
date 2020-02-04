// console.log("webpack is working")
import Piece from './piece';
import Game from './game';
import Board from './board';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    // ctx.scale(20, 20);

    const GAME_WIDTH = 200;
    const GAME_HEIGHT = 400;
    const ROW = 20;
    // const ROW = 1;
    const COL = 10;
    // const COL = 0.5;
    const SQUARE = 20;
    const EMPTY = "WHITE";

    let game = new Game(GAME_WIDTH, GAME_HEIGHT, ctx);
    let piece = new Piece(game);

    // console.log(game.createBoard());
    // console.table(game.createBoard());

    // game.drawPieceToBoard();

    function drawPieceToBoard() {
        piece.gamePieces.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value === 1) {
                    game.createBoard()[y + piece.pos.y][x + piece.pos.x] = value;
                }
            })
        })
    }

    drawPieceToBoard();
    // console.table(drawPieceToBoard());

    // let board = new Board(GAME_WIDTH, GAME_HEIGHT);
    // console.log(board.draw());
    // console.table(board.draw());

    // let board = [];
    // for (let row = 0; row < ROW; row += 1) {
    //     board[row] = [];
    //     for (let col = 0; col < COL; col += 1) {
    //         board[row][col] = EMPTY;
    //     }
    // }

    // function drawBoard() {
    //     for (let row = 0; row < ROW; row += 1) {
    //         for (let col = 0; col < COL; col += 1) {
    //             piece.drawSquare(ctx, col, row, board[row][col])
    //         }
    //     }
    // }

    function initializeBoard() {
        ctx.fillStyle = "gray";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        piece.draw();
    }

    let dropCounter = 0;
    let dropTime = 1000;
    let currentTime = 0;
    function update(time = 0) {
        const deltaTime = time - currentTime;
        currentTime = time;

        dropCounter += deltaTime;

        // if (dropCounter > dropTime) {
        //     piece.pos.y += 20;
        //     dropCounter = 0;
        // }

        piece.update(deltaTime);

        initializeBoard();
        requestAnimationFrame(update);
    }

    document.addEventListener("keydown", e => {
        if (e.keyCode === 37) {
            piece.moveLeft();
        } else if (e.keyCode === 39) {
            piece.moveRight();
        } else if (e.keyCode === 40) {
            piece.moveDown();
        } else if (e.keyCode === 38) {
            piece.rotateAction();
        }
    })

    // initializeBoard();
    // piece.draw();
    // piece.drop();
    update();
});