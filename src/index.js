import Piece from './piece';
import Board from './board';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    // ctx.scale(20, 20);

    const GAME_WIDTH = canvas.width;
    const GAME_HEIGHT = canvas.height;

    ctx.rect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = '#5D5C61';
    // ctx.fillStyle = '#7395AE';
    // ctx.fillStyle = '3f';
    ctx.fillStyle = '#98B4D4';
    ctx.fill();

    ctx.font = '18px arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText("Press ENTER To Start", canvas.width / 2, canvas.height / 2);

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
            game.start();
        }
        // else if (e.keyCode === 32) {
        //     game.piece.fastDrop();
        // }
    });

    // game.start();
});