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
eval("__webpack_require__.r(__webpack_exports__);\nclass Board {\n    constructor(game) {\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n    }\n\n    draw() {\n        const newBoard = [];\n        let height = this.gameHeight;\n        while (height !== 0) {\n            newBoard.push(new Array(this.gameWidth).fill(0));\n\n            height -= 20;\n        }\n        return newBoard;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ \"./src/piece.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\n\nconst GAMESTATE = {\n    PAUSED: 0,\n    PLAY: 1,\n    GAMEOVER: 2,\n    MENU: 3,\n}\n\nclass Game {\n    constructor(gameWidth, gameHeight, ctx) {\n        this.ctx = ctx;\n        this.gameWidth = gameWidth;\n        this.gameHeight = gameHeight;\n\n        // this.gamestate = GAMESTATE.MENU;\n\n        this.piece = new _piece__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    }\n\n    createBoard() {\n        const newBoard = [];\n        let height = this.gameHeight;\n        while (height !== 0) {\n            newBoard.push(new Array(this.gameWidth).fill(0));\n\n            height -= 20;\n        }\n        return newBoard;\n\n        // this.board.draw();\n    }\n\n    // drawPieceToBoard() {\n    //     this.createBoard().forEach((row, y) => {\n    //         row.forEach((value, x) => {\n    //             if (value === 1) {\n    //                 this.board[y + this.piece.pos.y][x + this.piece.pos.x] = value;\n    //             }\n    //         })\n    //     })\n    // }\n} \n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ \"./src/piece.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n// console.log(\"webpack is working\")\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d');\n\n    // ctx.scale(20, 20);\n\n    const GAME_WIDTH = 200;\n    const GAME_HEIGHT = 400;\n    const ROW = 20;\n    // const ROW = 1;\n    const COL = 10;\n    // const COL = 0.5;\n    const SQUARE = 20;\n    const EMPTY = \"WHITE\";\n\n    let game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](GAME_WIDTH, GAME_HEIGHT, ctx);\n    let piece = new _piece__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game);\n\n    // console.log(game.createBoard());\n    // console.table(game.createBoard());\n\n    // game.drawPieceToBoard();\n\n    function drawPieceToBoard() {\n        piece.gamePieces.forEach((row, y) => {\n            row.forEach((value, x) => {\n                if (value === 1) {\n                    game.createBoard()[y + piece.pos.y][x + piece.pos.x] = value;\n                }\n            })\n        })\n    }\n\n    drawPieceToBoard();\n    // console.table(drawPieceToBoard());\n\n    // let board = new Board(GAME_WIDTH, GAME_HEIGHT);\n    // console.log(board.draw());\n    // console.table(board.draw());\n\n    // let board = [];\n    // for (let row = 0; row < ROW; row += 1) {\n    //     board[row] = [];\n    //     for (let col = 0; col < COL; col += 1) {\n    //         board[row][col] = EMPTY;\n    //     }\n    // }\n\n    // function drawBoard() {\n    //     for (let row = 0; row < ROW; row += 1) {\n    //         for (let col = 0; col < COL; col += 1) {\n    //             piece.drawSquare(ctx, col, row, board[row][col])\n    //         }\n    //     }\n    // }\n\n    function initializeBoard() {\n        ctx.fillStyle = \"gray\";\n        ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n        piece.draw();\n    }\n\n    let dropCounter = 0;\n    let dropTime = 1000;\n    let currentTime = 0;\n    function update(time = 0) {\n        const deltaTime = time - currentTime;\n        currentTime = time;\n\n        dropCounter += deltaTime;\n\n        // if (dropCounter > dropTime) {\n        //     piece.pos.y += 20;\n        //     dropCounter = 0;\n        // }\n\n        piece.update(deltaTime);\n\n        initializeBoard();\n        requestAnimationFrame(update);\n    }\n\n    document.addEventListener(\"keydown\", e => {\n        if (e.keyCode === 37) {\n            piece.moveLeft();\n        } else if (e.keyCode === 39) {\n            piece.moveRight();\n        } else if (e.keyCode === 40) {\n            piece.moveDown();\n        } else if (e.keyCode === 38) {\n            piece.rotateAction();\n        }\n    })\n\n    // initializeBoard();\n    // piece.draw();\n    // piece.drop();\n    update();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/piece.js":
/*!**********************!*\
  !*** ./src/piece.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst gamePieces = [\n    [0, 0, 0],\n    [1, 1, 1],\n    [0, 1, 0],\n]\n\nclass Piece {\n    constructor(game) {\n        this.ctx = game.ctx;\n\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n\n        this.pos = {\n            // x: 60,\n            x: this.gameWidth / 2 - 20,\n            y: 0,\n        }\n\n        this.gamePieces = gamePieces;\n\n        this.dropCounter = 0;\n        this.dropTime = 1000;\n    }\n\n    draw() {\n        this.gamePieces.forEach((row, y) => {\n            row.forEach((value, x) => {\n                if (value === 1) {\n                    this.ctx.fillStyle = 'red';\n                    this.ctx.fillRect(x * 20 + this.pos.x, y * 20 + this.pos.y, 20, 20)\n                    // ctx.fillRect(x, y, 1, 1)\n                }\n            })\n        })\n    }\n\n    drawSquare(ctx, x, y, color) {\n        const SQUARE = 20;\n        \n        ctx.fillStyle = color;\n        ctx.fillRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);\n        // ctx.fillRect(x, y, 1, 1);\n\n        ctx.strokeStyle = \"BLACK\"\n        ctx.strokeRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);\n        // ctx.strokeRect(x, y, 1, 1);\n    }\n\n    moveLeft() {\n        this.pos.x -= 20;\n    }\n\n    moveRight() {\n        this.pos.x += 20;\n    }\n\n    moveDown() {\n        this.pos.y += 20;\n        this.dropCounter = 0;\n    }\n\n    rotateAction() {\n\n    }\n\n    rotatePiece() {\n\n    }\n\n    update(deltaTime) {\n        this.dropCounter += deltaTime;\n\n        if (this.dropCounter > this.dropTime) {\n            this.moveDown();\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Piece);\n\n//# sourceURL=webpack:///./src/piece.js?");

/***/ })

/******/ });