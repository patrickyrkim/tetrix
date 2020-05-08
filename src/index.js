import Piece from './piece';
import Board from './board';
import Game from './game';

// const GAMESTATE = {
//     PAUSED: 0,
//     PLAY: 1,
//     GAMEOVER: 2,
//     MENU: 3,
// }

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    const nextCanvas = document.getElementById('next-canvas');
    const nextCtx = nextCanvas.getContext('2d');

    const nextSecondCanvas = document.getElementById("second-next-canvas");
    const nextSecondCtx = nextCanvas.getContext('2d');

    const nextThirdCanvas = document.getElementById("third-next-canvas");
    const nextThirdCtx = nextCanvas.getContext('2d');

    const holdCanvas = document.getElementById('hold-canvas');
    const holdCtx = holdCanvas.getContext('2d');

    // const game = new Game(canvas, nextCanvas, holdCanvas);

    // ctx.scale(20, 20);

    const GAME_WIDTH = canvas.width;
    const GAME_HEIGHT = canvas.height;

    ////////// MENU STATE DISPLAY //////////
    ctx.rect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = '#5D5C61';
    // ctx.fillStyle = '#7395AE';
    // ctx.fillStyle = '3f';
    ctx.fillStyle = '#98B4D4';
    ctx.fill();

    // ctx.font = '18px arial';
    ctx.font = "16px monospace";
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    // ctx.fillText("Press ENTER To Start", canvas.width / 2, canvas.height / 2);
    ctx.fillText("Press ENTER To Start", canvas.width / 2, 120);
    ctx.fillText("LEFT - move left", canvas.width / 2, 160);
    ctx.fillText("RIGHT - move right", canvas.width / 2, 180);
    ctx.fillText("DOWN - move down", canvas.width / 2, 200);
    ctx.fillText("UP - rotate", canvas.width / 2, 220);
    ctx.fillText("SPACE - hard drop", canvas.width / 2, 240);
    ctx.fillText("SHIFT - hold", canvas.width / 2, 260);
    ctx.fillText("P - pause", canvas.width / 2, 280);
    
    // function gamestateText() {
    //     if (game.gamestate === GAMESTATE.MENU) {
    //         ctx.font = '18px arial';
    //         ctx.fillStyle = 'white';
    //         ctx.textAlign = 'center';
    //         ctx.fillText("Press ENTER To Start", canvas.width / 2, canvas.height / 2);
    //     } else if (game.gamestate === GAMESTATE.PAUSED) {
    //         ctx.font = '18px arial';
    //         ctx.fillStyle = 'white';
    //         ctx.textAlign = 'center';
    //         ctx.fillText("PAUSED", canvas.width / 2, canvas.height / 2);
    //     } else if (game.gamestate === GAMESTATE.GAMEOVER) {
    //         ctx.font = '18px arial';
    //         ctx.fillStyle = 'white';
    //         ctx.textAlign = 'center';
    //         ctx.fillText("GAMEOVER", canvas.width / 2, canvas.height / 2);
    //     }
    // }
    ///////////

    /////////// NEXT PIECE CANVAS //////////
    nextCtx.rect(0, 0, nextCanvas.width, nextCanvas.height);
    nextCtx.fillStyle = '#001f3f'
    nextCtx.fill();
    ///////////

    nextSecondCtx.rect(0, 0, nextSecondCanvas.width, nextSecondCanvas.height);
    nextSecondCtx.fillStyle = '#001f3f';
    nextSecondCtx.fill();

    nextThirdCtx.rect(0, 0, nextThirdCanvas.width, nextThirdCanvas.height);
    nextThirdCtx.fillStyle = '#001f3f';
    nextThirdCtx.fill();

    /////////// HOLD PIECE CANVAS //////////
    holdCtx.rect(0, 0, holdCanvas.width, holdCanvas.height);
    holdCtx.fillStyle = '#001f3f'
    holdCtx.fill();
    ///////////

    // const piece = new Piece(game);
    // const board = new Board(GAME_WIDTH, GAME_HEIGHT);
    // const game = new Game(canvas);
    const game = new Game(canvas, nextCanvas, holdCanvas, nextSecondCanvas, nextThirdCanvas);

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
        } else if (e.keyCode === 16) {
            game.holdPiece();
        } else if (e.keyCode === 80) {
            game.toggleGamePause();
        } else if (e.keyCode === 32) {
            game.piece.fastDrop();
        }
    });

    var scoreForty = document.getElementById("score-tetrix");
    scoreForty.hidden = true;

    // let menu = document.getElementById('menu').style.display
    // menu.hidden = true
    // function toggleMenuButton() {
    //     if (menu.hidden === true) {
    //         menu.hidden = false;
    //     }
    // }

    // function toggleHidden() {
    //     var introScreen = document.getElementById('intro-contents');
    //     var gameScreen = document.getElementById('game-contents');

    //     if (gameScreen.style.display === 'none') {
    //         introScreen.style.display === 'none';
    //         gameScreen.style.display === 'block';
    //     }
    // }

    // document.addEventListener('click', (e) => {
    //     toggleHidden();
    // })

    // const restartButton = document.getElementById('restart-button');
    // restartButton.addEventListener('click', () => {
    //     game.toggleGameStart();
    //     game.start();
    // })

    // gamestateText();
    // game.start();
});