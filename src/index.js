import Piece from './piece';
import Board from './board';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    // const ctx = canvas.getContext('2d');

    // ctx.scale(20, 20);

    const GAME_WIDTH = canvas.width;
    const GAME_HEIGHT = canvas.height;

    // const piece = new Piece;
    // const board = new Board(GAME_WIDTH, GAME_HEIGHT);
    const game = new Game(canvas);

    document.addEventListener('keydown', e => {
        if (e.keyCode === 37) {
            game.piece.moveLeft();
        } else if (e.keyCode === 39) {
            game.piece.moveRight();
        } else if (e.keyCode === 40) {
            game.piece.moveDown();
        } else if (e.keyCode === 38) {
            game.piece.rotateAction();
        } else if (e.keyCode === 13) {
            game.toggleGameStart();
        }
        // else if (e.keyCode === 32) {
        //     game.piece.fastDrop();
        // }
    });

    game.start();
});

// // console.log("webpack is working")
// import Piece from './piece';
// import Game from './game';
// import Board from './board';

// document.addEventListener("DOMContentLoaded", () => {
//     const canvas = document.getElementById('game-canvas');
//     const ctx = canvas.getContext('2d');

//     ctx.scale(20, 20);

//     const GAME_WIDTH = 200;
//     const GAME_HEIGHT = 400;
//     const ROW = 20;
//     const COL = 10;
//     // const SQUARE = 20;
//     // const EMPTY = "WHITE";

//     let game = new Game(GAME_WIDTH, GAME_HEIGHT, ctx);
//     let piece = new Piece(game);

//     console.log(piece.gamePieces);
    
//     // function initializeBoard() {
//     //     // ctx.fillStyle = "gray";
//     //     // ctx.fillRect(0, 0, canvas.width, canvas.height);

//     //     let initialBoard = [];
//     //     for (let row = 0; row < ROW; row += 1) {
//     //         initialBoard[row] = [];
//     //         for (let col = 0; col < COL; col += 1) {
//     //             initialBoard[row][col] = "black";
//     //         }
//     //     }

//     //     for (let row = 0; row < ROW; row += 1) {
//     //         for (let col = 0; col < COL; col += 1) {
//     //             piece.drawSquare(ctx, col, row, initialBoard[row][col])
//     //         }
//     //     }

//     //     // piece.unDraw();
//     //     piece.draw();
//     // }

//     game.draw();

//     // let dropCounter = 0;
//     // let dropTime = 1000;
//     let currentTime = 0;
//     function update(time = 0) {
//         const deltaTime = time - currentTime;
//         currentTime = time;

//         // dropCounter += deltaTime;

//         // if (dropCounter > dropTime) {
//         //     piece.pos.y += 20;
//         //     dropCounter = 0;
//         // }

//         piece.restart();
//         piece.update(deltaTime);

//         // initializeBoard();
//         requestAnimationFrame(update);
//     }

//     document.addEventListener("keydown", e => {
//         if (e.keyCode === 37) {
//             piece.moveLeft();
//         } else if (e.keyCode === 39) {
//             piece.moveRight();
//         } else if (e.keyCode === 40) {
//             piece.moveDown();
//         } else if (e.keyCode === 38) {
//             piece.rotateAction();
//         } else if (e.keyCode === 32) {
//             piece.fastDrop();
//         }
//     })

//     update();
// });