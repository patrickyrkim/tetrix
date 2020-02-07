/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Board {\n    constructor(gameWidth, gameHeight) {\n        const newBoard = [];\n\n        // while (gameHeight !== 0) {\n        //     newBoard.push(new Array(gameWidth).fill(0));\n\n        //     gameHeight -= 1\n        // }\n\n        while (gameHeight--) {\n            newBoard.push(new Array(gameWidth).fill(0));\n        }\n\n        this.newBoard = newBoard;\n    }\n\n    detectCollision(piece) {\n        const [shape, position] = [piece.shape, piece.pos];\n\n        for (let posY = 0; posY < shape.length; posY += 20) {\n            for (let posX = 0; posX < shape[posY].length; posX += 20) {\n                let value = shape[posY][posX];\n                let xCollisionFactor = this.newBoard[posY + position.y];\n                let yCollisionFactor = this.newBoard[posY + position.y][posX + position.x];\n\n                if (value !== 0 && (xCollisionFactor && yCollisionFactor) !== 0) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    }\n\n    clearRow() {\n            board.forEach((row) => row.fill(0));\n    }\n\n    clearFilledRow() {\n        let rowCounter = 1;\n        let score = 0;\n\n        loop1: \n            for (let i = this.newBoard.length - 1; i > 0; i -= 1) {\n        // loop2:  \n                let boardRow = this.newBoard[j];\n                for (let j = 0; j < boardRow.length; j += 1) {\n                    let value = this.newBoard[i][j];\n                    if (value === 0) {\n                        continue loop1;\n                    }\n                }\n\n                const row = this.newBoard.splice(i, 1)[0].fill(0);\n                this.newBoard.unshift(row);\n                i += 1;\n\n                score += rowCount * 10;\n            }\n    }\n\n    lockPieceOnBoard(piece) {\n        piece.shape.forEach((row, j) => {\n            row.forEach((value, i) => {\n                if (value !== 0) {\n                    this.newBoard[j + piece.pos.y][i + piece.pos.x] = value;\n                }\n            })\n        })\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n// class Board {\n//     constructor(game) {\n//         this.gameWidth = game.gameWidth;\n//         this.gameHeight = game.gameHeight;\n\n//         const newBoard = [];\n//         let height = this.gameHeight;\n//         while (height !== 0) {\n//             newBoard.push(new Array(this.gameWidth / 20).fill(0));\n\n//             height -= 20;\n//         }\n\n//         this.newBoard = newBoard;\n\n//         // this.gamePiece = game.piece;\n//     }\n\n//     drawPieceToBoard(piece) {\n//         piece.newPiece.forEach((row, j) => {\n//             row.forEach((value, i) => {\n//                 if (value !== 0) {\n//                     this.newBoard[j + piece.pos.y][i + piece.pos.x] = value;\n//                 }\n//             })\n//         })\n//     }\n\n//     detectCollision(piece) {\n//         // const [shape, position] = [this.gamePiece.gamePieces, this.gamePiece.pos];\n//         const [shape, position] = [piece.gamePieces, piece.pos];\n\n//         for (let posY = 0; posY < shape.length; posY += 20) {\n//             for (let posX = 0; posX < shape[posY].length; posX += 20) {\n//                 let value = shape[posY][posX];\n//                 let xCollisionFactor = this.newBoard[posY + position.y];\n//                 let yCollisionFactor = this.newBoard[posY + position.y][posX + position.x];\n\n//                 if (value !== 0 && (xCollisionFactor && yCollisionFactor) !== 0) {\n//                     return true;\n//                 }\n//             }\n//         }\n//         return false;\n//     }\n// }\n\n// export default Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece */ \"./src/piece.js\");\n\n\n\nclass Game {\n    constructor(canvas) {\n        this.canvas = canvas;\n\n        this.ctx = canvas.getContext('2d');\n\n        this.ctx.scale(20, 20);\n\n        this.pieceColors = [\n            null,\n            'red',\n            'orange',\n            'yellow',\n            'green',\n            'blue',\n            'purple',\n            'pink',\n        ];\n\n        // this.board = new Board(GAME_WIDTH, GAME_HEIGHT);\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas.width / 20, this.canvas.height / 20);\n        this.piece = new _piece__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n\n        let currentTime = 0;\n        const update = (time = 0) => {\n            const deltaTime = time - currentTime;\n            currentTime = time;\n\n            this.piece.update(deltaTime);\n            this.draw();\n            requestAnimationFrame(update);\n        }\n        update();\n    }\n\n    draw() {\n        this.ctx.fillStyle = 'gray';\n        // this.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n\n        this.drawPiece(this.board.newBoard, { x: 0, y: 0 });\n        this.drawPiece(this.piece.shape, this.piece.pos);\n    }\n\n    drawPiece(shape, adjustPos) {\n        shape.forEach((row, i) => {\n            row.forEach((value, j) => {\n                if (value !== 0) {\n                    // this.ctx.fillStyle = 'red';\n                    this.ctx.fillStyle = this.pieceColors[value];\n                    this.ctx.fillRect(j + adjustPos.j, i + adjustPos.i, 1, 1)\n                }\n            })\n        })\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n// import Piece from './piece';\n// import Board from './board';\n\n// const GAMESTATE = {\n//     PAUSED: 0,\n//     PLAY: 1,\n//     GAMEOVER: 2,\n//     MENU: 3,\n// }\n\n// class Game {\n//     constructor(gameWidth, gameHeight, ctx) {\n//         this.ctx = ctx;\n//         this.gameWidth = gameWidth;\n//         this.gameHeight = gameHeight;\n\n//         // this.gamestate = GAMESTATE.MENU;\n\n//         this.board = new Board(this);\n//         this.piece = new Piece(this);\n\n//         this.pieceColors = [\n//             null, \n//             'red',\n//             'orange',\n//             'yellow',\n//             'green',\n//             'blue',\n//             'purple',\n//             'pink',\n//         ]\n\n//         let lastTime = 0;\n//         const updateGame = (time = 0) => {\n//             const deltaTime = time - lastTime;\n//             lastTime = time;\n\n//             this.piece.update(deltaTime);\n\n//             this.draw();\n//             requestAnimationFrame(updateGame);\n//         }\n\n//         updateGame();\n//     }\n\n//     draw() {\n//         this.ctx.fillStyle = 'gray';\n//         this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);\n\n//         this.drawPiece(this.board.newBoard, { x: 0, y: 0 });\n//         this.drawPiece(this.piece.gamePieces, this.piece.pos);\n//     }\n\n//     drawPiece(piece, pos) {\n//         piece.forEach((row, y) => {\n//             row.forEach((val, x) => {\n//                 if (val !== 0) {\n//                     this.ctx.fillStyle = 'red';\n//                     this.ctx.fillRect(x + pos.x, y + pos.y, 1, 1);\n//                 }\n//             })\n//         })\n//     }\n// } \n\n// export default Game\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ \"./src/piece.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById('game-canvas');\n    // const ctx = canvas.getContext('2d');\n\n    // ctx.scale(20, 20);\n\n    const GAME_WIDTH = canvas.width;\n    const GAME_HEIGHT = canvas.height;\n\n    // const piece = new Piece;\n    // const board = new Board(GAME_WIDTH, GAME_HEIGHT);\n    const game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas);\n\n    function updateScore() {\n        document.getElementById('score').innerText = game.piece.score;\n    }\n\n    document.addEventListener('keydown', e => {\n        if (e.keyCode === 37) {\n            // move right\n            game.piece.moveRight();\n        } else if (e.keyCode === 39) {\n            // move left\n            game.piece.moveLeft();\n        } else if (e.keyCode === 40) {\n            // move down\n            game.piece.moveDown();\n        } else if (e.keyCode === 38) {\n            // rotate\n            game.piece.rotateAction();\n        }\n    })\n\n    updateScore();\n    // piece.restart();\n    // update();\n});\n\n// // console.log(\"webpack is working\")\n// import Piece from './piece';\n// import Game from './game';\n// import Board from './board';\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     const canvas = document.getElementById('game-canvas');\n//     const ctx = canvas.getContext('2d');\n\n//     ctx.scale(20, 20);\n\n//     const GAME_WIDTH = 200;\n//     const GAME_HEIGHT = 400;\n//     const ROW = 20;\n//     const COL = 10;\n//     // const SQUARE = 20;\n//     // const EMPTY = \"WHITE\";\n\n//     let game = new Game(GAME_WIDTH, GAME_HEIGHT, ctx);\n//     let piece = new Piece(game);\n\n//     console.log(piece.gamePieces);\n    \n//     // function initializeBoard() {\n//     //     // ctx.fillStyle = \"gray\";\n//     //     // ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n//     //     let initialBoard = [];\n//     //     for (let row = 0; row < ROW; row += 1) {\n//     //         initialBoard[row] = [];\n//     //         for (let col = 0; col < COL; col += 1) {\n//     //             initialBoard[row][col] = \"black\";\n//     //         }\n//     //     }\n\n//     //     for (let row = 0; row < ROW; row += 1) {\n//     //         for (let col = 0; col < COL; col += 1) {\n//     //             piece.drawSquare(ctx, col, row, initialBoard[row][col])\n//     //         }\n//     //     }\n\n//     //     // piece.unDraw();\n//     //     piece.draw();\n//     // }\n\n//     game.draw();\n\n//     // let dropCounter = 0;\n//     // let dropTime = 1000;\n//     let currentTime = 0;\n//     function update(time = 0) {\n//         const deltaTime = time - currentTime;\n//         currentTime = time;\n\n//         // dropCounter += deltaTime;\n\n//         // if (dropCounter > dropTime) {\n//         //     piece.pos.y += 20;\n//         //     dropCounter = 0;\n//         // }\n\n//         piece.restart();\n//         piece.update(deltaTime);\n\n//         // initializeBoard();\n//         requestAnimationFrame(update);\n//     }\n\n//     document.addEventListener(\"keydown\", e => {\n//         if (e.keyCode === 37) {\n//             piece.moveLeft();\n//         } else if (e.keyCode === 39) {\n//             piece.moveRight();\n//         } else if (e.keyCode === 40) {\n//             piece.moveDown();\n//         } else if (e.keyCode === 38) {\n//             piece.rotateAction();\n//         } else if (e.keyCode === 32) {\n//             piece.fastDrop();\n//         }\n//     })\n\n//     update();\n// });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/piece.js":
/*!**********************!*\
  !*** ./src/piece.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _piece_shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece_shapes */ \"./src/piece_shapes.js\");\n\n\nclass Piece {\n    constructor(game) {\n        this.game = game;\n        this.board = game.board;\n        this.pos = {\n            x: 0,\n            y: 0,\n        };\n        this.shape = null;\n        this.score = 0;\n\n        this.dropCounter = 0;\n        this.dropTime = 1000;\n        \n        this.restart();\n    }\n\n    moveLeft() {\n        this.pos.x -= 1;\n\n        if (this.board.detectCollision(this)) {\n            this.pox.x += 1\n        }\n    }\n\n    moveRight() {\n        this.pos.x += 1;\n\n        if (this.board.detectCollision(this)) {\n            this.pox.x -= 1\n        }\n    }\n\n    moveDown() {\n        this.pos.y += 1;\n\n        if (this.board.detectCollision(this)) {\n            this.pos.y += 1;\n            this.board.lockPieceOnBoard(this);\n            this.restart();\n            this.board.clearFilledRow();\n            updateScore();\n        }\n\n        this.dropCounter = 0;\n    }\n\n    fastDrop() {\n        this.dropTime = 0;\n    }\n\n    rotateAction() {\n        const posX = this.pos.x;\n        let offset = 1;\n        this.rotateShape(this.shape);\n\n        while (this.board.detectCollision(this)) {\n            this.pos.x += offset;\n            \n            if (offset > 0) {\n                offset = -(offset + 1);\n            } else {\n                offset = -(offset + (-1));\n            }\n\n            if (offset > this.shape[0].length) {\n                this.rotateShape(this.shape);\n                this.pos.x = posX;\n                return;\n            }\n        }\n    }\n\n    rotateShape(pieceShape) {\n        for (let i = 0; i < pieceShape.length; i++) {\n            for (let j = 0; j < i; j++) {\n                [pieceShape[j][i], pieceShape[i][j]] = [pieceShape[i][j], pieceShape[j][i]];\n            }\n        }\n\n        pieceShape.forEach((row) => row.reverse());\n    }\n\n    restart() {\n        const pieces = 'TIOJLZS';\n        this.shape = Object(_piece_shapes__WEBPACK_IMPORTED_MODULE_0__[\"tetrisShapes\"])(pieces[Math.floor(Math.random() * pieces.length)]);\n        this.pos.x = Math.floor(this.board.newBoard[0].length / 2) - Math.floor(this.shape[0].length / 2);\n\n        if (this.board.detectCollision(this)) {\n            // this.board.forEach((row) => row.fill(0));\n            this.board.clearRow();\n            this.score = 0;\n            updateScore();\n        }\n    }\n\n    update(deltaTime) {\n        this.dropCounter += deltaTime;\n\n        if (this.dropCounter > this.dropTime) {\n            this.moveDown();\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Piece);\n\n// // const gamePieces = [\n// //     [0, 0, 0],\n// //     [1, 1, 1],\n// //     [0, 1, 0],\n// // ]\n\n// import { tetrisShapes } from './piece_shapes';\n\n// class Piece {\n//     constructor(game) {\n//         this.ctx = game.ctx;\n\n//         this.gameWidth = game.gameWidth;\n//         this.gameHeight = game.gameHeight;\n\n//         this.pos = {\n//             // x: this.gameWidth / 2 - 20,\n//             x: Math.floor(this.gameWidth / 2),\n//             y: 0,\n//         }\n\n//         // const shapes = 'TIOJLZS';\n//         this.shapes = 'TIOJLZS';\n//         this.gamePieces = tetrisShapes(this.shapes[Math.floor(Math.random() * this.shapes.length)]);\n\n//         // this.gamePieces = gamePieces;\n//         this.newPiece = null;\n\n//         this.dropCounter = 0;\n//         this.dropTime = 1000;\n\n//         this.board = game.board;\n//     }\n\n//     restart() {\n//         // const shapes = 'TIOJLZS';\n//         this.newPiece = tetrisShapes(this.shapes[Math.floor(Math.random() * this.shapes.length)]);\n//         this.pos.x = (Math.floor(this.board.newBoard[0] / 2)) - Math.floor(this.newPiece[0].length / 2);\n//         this.pos.y = 0;\n//     }\n\n//     // draw() {\n//     //     this.gamePieces.forEach((row, y) => {\n//     //         row.forEach((value, x) => {\n//     //             if (value !== 0) {\n//     //                 this.ctx.fillStyle = 'red';\n//     //                 // this.ctx.fillRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)\n//     //                 this.ctx.fillRect(x, y, 1, 1);\n\n//     //                 // this.ctx.strokeStyle = 'black';\n//     //                 // this.ctx.strokeRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)\n//     //                 // this.ctx.strokeRect(x, y, 1, 1);\n//     //             }\n//     //         })\n//     //     })\n//     // }\n\n//     // unDraw() {\n//     //     this.gamePieces.forEach((row, y) => {\n//     //         row.forEach((value, x) => {\n//     //             if (value !== 0) {\n//     //                 this.ctx.fillStyle = 'black';\n//     //                 this.ctx.fillRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)\n//     //                 // ctx.fillRect(x, y, 1, 1)\n\n//     //                 // this.ctx.strokeStyle = 'white';\n//     //                 this.ctx.strokeStyle = 'gray';\n//     //                 this.ctx.strokeRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)\n//     //             }\n//     //         })\n//     //     })\n//     // }\n\n//     drawSquare(ctx, x, y, color) {\n//         // const SQUARE = 20;\n        \n//         ctx.fillStyle = color;\n//         // ctx.fillRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);\n//         ctx.fillRect(x, y, 1, 1);\n\n//         // ctx.strokeStyle = \"BLACK\";\n//         ctx.strokeStyle = \"gray\";\n//         // ctx.strokeRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);\n//         ctx.strokeRect(x, y, 1, 1);\n//     }\n\n//     moveLeft() {\n//         // this.pos.x -= 20;\n//         this.pos.x -= 1;\n\n//         // if (this.detectCollision(-20, 0, this.gamePieces)) {\n//         //     this.pos.x -= 20;\n//         // }\n//     }\n\n//     moveRight() {\n//         // this.pos.x += 20;\n//         this.pos.x += 1;\n\n//         // if (this.detectCollision(20, 0, this.gamePieces)) {\n//         //     this.pos.x += 20;\n//         // }\n//     }\n\n//     moveDown() {\n//         // this.pos.y += 20;\n//         this.pos.y += 1;\n//         this.dropCounter = 0;\n\n//         // if (this.board.detectCollision()) {\n//         //     this.pos.y -= 20;\n//         // }\n//     }\n\n//     fastDrop() {\n//         this.dropTime = 0;\n//     }\n\n//     rotateAction() {\n//         this.rotatePiece(this.gamePieces);\n\n//         // if (!this.detectCollision(0, 20, this.gamePieces)) {\n//         //     this.rotatePiece(this.gamePieces);\n//         // } \n//     }\n\n//     rotatePiece(pieceShape) {\n//         for (let i = 0; i < pieceShape.length; i++) {\n//             for (let j = 0; j < i; j++) {\n//                 [pieceShape[j][i], pieceShape[i][j]] = [pieceShape[i][j], pieceShape[j][i]];\n//             }\n//         }\n\n//         pieceShape.forEach((row) => row.reverse());\n//     }\n\n//     detectCollision(x, y, piece) {\n//         for (let row = 0; row < piece.length; row += 1) {\n//             for (let col = 0; col < piece[row].length; col += 1) {\n//                 if (this.gamePieces[row][col] !== 0) {\n//                     continue;\n//                 }\n\n//                 let newXPos = this.pos.x + col + x;\n//                 let newYPos = this.pos.y + row + y;\n\n//                 if (newXPos < 0 || newXPos >= this.gameWidth || newYPos >= this.gameHeight) {\n//                     return true;\n//                 }\n\n//                 if (newYPos < 0) {\n//                     continue;\n//                 }\n\n//                 if (this.board[newYPos][newXPos] !== 0) {\n//                     return true;\n//                 }\n//             }\n//         }\n//         return false;\n//     }\n\n//     update(deltaTime) {\n//         this.dropCounter += deltaTime;\n\n//         if (this.dropCounter > this.dropTime) {\n//             this.moveDown();\n//         }\n//     }\n// }\n\n// export default Piece;\n\n//# sourceURL=webpack:///./src/piece.js?");

/***/ }),

/***/ "./src/piece_shapes.js":
/*!*****************************!*\
  !*** ./src/piece_shapes.js ***!
  \*****************************/
/*! exports provided: tetrisShapes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tetrisShapes\", function() { return tetrisShapes; });\nfunction tetrisShapes(shape) {\n    if (shape === 'T') {\n        return [\n            [0, 0, 0],\n            [1, 1, 1],\n            [0, 1, 0],\n        ]\n    } else if (shape === 'I') {\n        return [\n            [0, 1, 0, 0],\n            [0, 1, 0, 0],\n            [0, 1, 0, 0],\n            [0, 1, 0, 0],\n        ]\n    } else if (shape = 'O') {\n        return [\n            [1, 1],\n            [1, 1],\n        ]\n    } else if (shape === 'J') {\n        return [\n            [0, 0, 0],\n            [1, 0, 0],\n            [1, 1, 1],\n        ]\n    } else if (shape === 'L') {\n        return [\n            [0, 0, 0],\n            [0, 0, 1],\n            [1, 1, 1],\n        ]\n    } else if (shape === 'Z') {\n        return [\n            [0, 0, 0],\n            [1, 1, 0],\n            [0, 1, 1],\n        ]\n    } else if (shape === 'S') {\n        return [\n            [0, 0, 0],\n            [0, 1, 1],\n            [1, 1, 0],\n        ]\n    }\n}\n\n//# sourceURL=webpack:///./src/piece_shapes.js?");

/***/ })

/******/ });