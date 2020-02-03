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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ \"./src/piece.js\");\n\n\nconst GAMESTATE = {\n    PAUSED: 0,\n    PLAY: 1,\n    GAMEOVER: 2,\n    MENU: 3,\n}\n\nclass Game {\n    constructor(gameWidth, gameHeight, ctx) {\n        this.ctx = ctx;\n        this.gameWidth = gameWidth;\n        this.gameHeight = gameHeight;\n\n        // this.gamestate = GAMESTATE.MENU;\n\n        let piece = new _piece__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    }\n\n    // draw() {\n\n    // }\n} \n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ \"./src/piece.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n// console.log(\"webpack is working\")\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d');\n\n    // ctx.scale(20, 20);\n\n    const GAME_WIDTH = 200;\n    const GAME_HEIGHT = 400;\n    const ROW = 20;\n    // const ROW = 1;\n    const COL = 10;\n    // const COL = 0.5;\n    const SQUARE = 20;\n    const EMPTY = \"WHITE\";\n\n    let board = [];\n    for (let row = 0; row < ROW; row += 1) {\n        board[row] = [];\n        for (let col = 0; col < COL; col += 1) {\n            board[row][col] = EMPTY;\n        }\n    }\n\n    let game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](GAME_WIDTH, GAME_HEIGHT, ctx);\n\n    // let piece = new Piece(GAME_WIDTH, GAME_HEIGHT);\n    let piece = new _piece__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game);\n\n    function drawBoard() {\n        for (let row = 0; row < ROW; row += 1) {\n            for (let col = 0; col < COL; col += 1) {\n                piece.drawSquare(ctx, col, row, board[row][col])\n            }\n        }\n    }\n\n    drawBoard();\n    piece.draw();\n    // piece.drop();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/piece.js":
/*!**********************!*\
  !*** ./src/piece.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Piece {\n    constructor(game) {\n        // this.gameWidth = game.gameWidth;\n        \n        // this.pos = {\n        //     x: game.gameWidth / 2 - this.width / 2,\n        //     y: game.gameHeight - this.height,\n        // }\n\n        // const SQUARE = 20;\n\n        this.ctx = game.ctx;\n\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n\n        this.pos = {\n            // x: 60,\n            x: this.gameWidth / 2 - 20,\n            y: 0,\n        }\n    }\n\n    draw() {\n        // ctx.fillStyle = '#000';\n        // ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);\n\n        const gamePieces = [\n            [0, 0, 0],\n            [1, 1, 1],\n            [0, 1, 0],\n        ]\n\n        gamePieces.forEach((row, y) => {\n            row.forEach((value, x) => {\n                if (value === 1) {\n                    this.ctx.fillStyle = 'red';\n                    this.ctx.fillRect(x * 20 + this.pos.x, y * 20, 20, 20)\n                    // ctx.fillRect(x, y, 1, 1)\n                }\n            })\n        })\n    }\n\n    drawSquare(ctx, x, y, color) {\n        const SQUARE = 20;\n        \n        ctx.fillStyle = color;\n        ctx.fillRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);\n        // ctx.fillRect(x, y, 1, 1);\n\n        ctx.strokeStyle = \"BLACK\"\n        ctx.strokeRect(x * SQUARE, y * SQUARE, SQUARE, SQUARE);\n        // ctx.strokeRect(x, y, 1, 1);\n    }\n\n    // moveDown() {\n    //     this.pos.y++;\n    //     this.draw(this.ctx);\n    // }\n\n    // drop() {\n    //     // this.draw(ctx);\n    //     this.moveDown();\n    //     requestAnimationFrame(drop);\n    // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Piece);\n\n//# sourceURL=webpack:///./src/piece.js?");

/***/ })

/******/ });