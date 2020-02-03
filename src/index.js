// console.log("webpack is working")
import Piece from './piece';
import Game from './game';

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

    let board = [];
    for (let row = 0; row < ROW; row += 1) {
        board[row] = [];
        for (let col = 0; col < COL; col += 1) {
            board[row][col] = EMPTY;
        }
    }

    let game = new Game(GAME_WIDTH, GAME_HEIGHT, ctx);

    // let piece = new Piece(GAME_WIDTH, GAME_HEIGHT);
    let piece = new Piece(game);

    function drawBoard() {
        for (let row = 0; row < ROW; row += 1) {
            for (let col = 0; col < COL; col += 1) {
                piece.drawSquare(ctx, col, row, board[row][col])
            }
        }
    }

    drawBoard();
    piece.draw();
    // piece.drop();
});