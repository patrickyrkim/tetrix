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
eval("__webpack_require__.r(__webpack_exports__);\nclass Board {\n    constructor(gameWidth, gameHeight) {\n        const newBoard = [];\n\n        while (gameHeight !== 0) {\n            newBoard.push(new Array(gameWidth).fill(0));\n\n            gameHeight -= 1\n        }\n\n        // while (gameHeight--) {\n        //     newBoard.push(new Array(gameWidth).fill(0));\n        // }\n\n        this.newBoard = newBoard;\n    }\n\n    nextPieceBoard(width, height) {\n        const nextBoard = [];\n\n        while (height !== 0) {\n            nextBoard.push(new Array(width).fill(0));\n\n            height -= 1\n        }\n\n        return nextBoard;\n    }\n\n    detectCollision(piece) {\n        const [shape, position] = [piece.shape, piece.pos];\n\n        for (let posY = 0; posY < shape.length; posY++) {\n            for (let posX = 0; posX < shape[posY].length; posX++) {\n                // const value = shape[posY][posX];\n                // const xCollisionFactor = this.newBoard[posY + position.y];\n                // const yCollisionFactor = this.newBoard[posY + position.y][posX + position.x];\n\n                // if (value !== 0 && (xCollisionFactor && yCollisionFactor) !== 0) {\n                //     return true;\n                // }\n\n                if (shape[posY][posX] !== 0 && (this.newBoard[posY + position.y] && this.newBoard[posY + position.y][posX + position.x]) !== 0) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    }\n\n    clearRow() {\n        this.newBoard.forEach((row) => row.fill(0));\n    }\n\n    // clearNextPiece() {\n    //     this.nextPieceBoard().forEach((row) => row.fill(0));\n    // }\n\n    clearFilledRow() {\n        let rowCounter = 1;\n        let score = 0;\n\n        loop1: \n            for (let i = this.newBoard.length - 1; i > 0; i -= 1) {\n        // loop2:  \n                let boardRow = this.newBoard[i];\n                for (let j = 0; j < boardRow.length; j += 1) {\n                    let value = this.newBoard[i][j];\n                    if (value === 0) {\n                        continue loop1;\n                    }\n                }\n\n                const row = this.newBoard.splice(i, 1)[0].fill(0);\n                this.newBoard.unshift(row);\n                i += 1;\n\n                score += rowCounter * 10;\n            }\n            return score;\n    }\n\n    lockPieceOnBoard(piece) {\n        piece.shape.forEach((row, j) => {\n            row.forEach((value, i) => {\n                if (value !== 0) {\n                    this.newBoard[j + piece.pos.y][i + piece.pos.x] = value;\n                }\n            })\n        })\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece */ \"./src/piece.js\");\n\n\n\nconst GAMESTATE = {\n    PAUSED: 0,\n    PLAY: 1,\n    GAMEOVER: 2,\n    MENU: 3,\n}\n\nclass Game {\n    constructor(canvas, nextCanvas, holdCanvas) {\n        this.canvas = canvas;\n        this.nextCanvas = nextCanvas;\n        this.holdCanvas = holdCanvas;\n\n        this.ctx = canvas.getContext('2d');\n        this.nextCtx = nextCanvas.getContext('2d');\n        this.holdCtx = holdCanvas.getContext('2d');\n\n        this.ctx.scale(20, 20);\n        // this.ctx.scale(30, 30);\n        this.nextCtx.scale(20, 20);\n        this.holdCtx.scale(20, 20)\n\n        this.gamestate = GAMESTATE.MENU;\n\n        this.pieceColors = [\n            null,\n            'purple',\n            'cyan',\n            'yellow',\n            'blue',\n            'orange',\n            'red',\n            'green',\n        ];\n\n        // this.board = new Board(GAME_WIDTH, GAME_HEIGHT);\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas.width / 20, this.canvas.height / 20);\n        this.piece = new _piece__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n\n        let currentTime = 0;\n        // this.currentTime = 0;\n        this.update = (time = 0) => {\n            const deltaTime = time - currentTime;\n            currentTime = time;\n\n            this.unDrawPreviousShape(this.piece.shape);\n            this.piece.update(deltaTime);\n            this.draw();\n            requestAnimationFrame(this.update);\n        }\n        // this.update();\n        // this.updateScore(0);\n    }\n\n    start() {\n        this.update();\n        this.updateScore(0);\n    }\n\n    holdPiece() {\n        this.piece.handleHoldShape();\n    }\n\n    // update(time = 0) {\n    //         const deltaTime = time - this.currentTime;\n    //         this.currentTime = time;\n\n    //         this.piece.update(deltaTime);\n    //         this.draw();\n    //         requestAnimationFrame(this.update);\n    // }\n\n    toggleGameStart() {\n        if (this.gamestate === GAMESTATE.MENU) {\n            this.gamestate = GAMESTATE.RUNNING;\n        }\n    }\n\n    draw() {\n        // this.ctx.fillStyle = 'gray';\n        // // this.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);\n        // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n        // // this.ctx.strokeStyle = 'black';\n        // // this.ctx.strokeRect(0, 0, 20, 20)\n\n        // this.drawPiece(this.board.newBoard, { x: 0, y: 0 });\n        // this.drawPiece(this.piece.shape, this.piece.pos);\n\n        if (this.gamestate === GAMESTATE.MENU) {\n            this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);\n            // this.ctx.fillStyle = '#5D5C61';\n            // this.ctx.fillStyle = '#7395AE';\n            // this.ctx.fillStyle = '#001f3f';\n            this.ctx.fillStyle = '#98B4D4';\n            this.ctx.fill();\n\n            this.ctx.font = '30px arial';\n            this.ctx.fillStyle = 'white';\n            this.ctx.textAlign = 'center';\n            this.ctx.fillText(\"Press ENTER To Start\", this.canvas.width / 2, this.canvas.height / 2);\n        }\n\n        if (this.gamestate === GAMESTATE.RUNNING) {\n            this.ctx.fillStyle = '#001f3f';\n            // this.ctx.fillStyle = '#98B4D4';\n            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n\n            // this.nextCtx.rect(0, 0, this.nextCanvas.width, this.nextCanvas.height);\n            // this.nextCtx.fillStyle = '#001f3f'\n            // this.nextCtx.fill();\n\n            this.drawPiece(this.board.newBoard, { x: 0, y: 0 });\n            this.drawPiece(this.piece.shape, this.piece.pos);\n\n            // this.unDrawPreviousShape();\n            this.drawNextPiece(this.board.nextPieceBoard(this.nextCanvas.width / 20, this.nextCanvas.height / 20), { x: 0, y: 0 })\n            // this.drawNextPiece(this.piece.nextShape, { x: this.piece.nextShape[0].length / 2, y: 1 });\n            this.drawNextPiece(this.piece.nextShape, { x: 1, y: 1 });\n            \n            this.drawNextPiece(this.board.nextPieceBoard(this.holdCanvas.width / 20, this.holdCanvas.height / 20), { x: 0, y: 0 })\n        }\n    }\n\n    drawPiece(shape, adjustPos) {\n        shape.forEach((row, i) => {\n            row.forEach((value, j) => {\n                if (value !== 0) {\n                    // this.ctx.fillStyle = 'red';\n                    this.ctx.fillStyle = this.pieceColors[value];\n                    this.ctx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1)\n                    // this.ctx.strokeStyle = 'black';\n                    // this.ctx.strokeRect(j + adjustPos.x, i + adjustPos.y, 1, 1);\n                }\n            })\n        })\n    }\n\n    drawNextPiece(nextShape, adjustPos) {\n        nextShape.forEach((row, i) => {\n            row.forEach((value, j) => {\n                if (value !== 0) {\n                    this.nextCtx.fillStyle = this.pieceColors[value];\n                    this.nextCtx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1)\n                }\n            })\n        })\n    }\n\n    // unDrawPreviousShape() {\n    //     this.board.nextPieceBoard((this.nextCanvas.width / 20, this.nextCanvas.height / 20), { x: 0, y: 0 }).forEach((row, i) => {\n    //         row.forEach((value, j) => {\n    //             this.nextCtx.fillStyle = '#001f3f';\n    //             // this.nextCtx.rect(0, 0, this.nextCanvas.width, this.nextCanvas.height);\n    //             this.nextCtx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1);\n    //             this.nextCtx.fill()\n    //         })\n    //     })\n    // }\n\n    unDrawPreviousShape(shape) {\n       shape.forEach((row, i) => {\n            row.forEach((value, j) => {\n                this.nextCtx.fillStyle = '#001f3f';\n                // this.nextCtx.rect(0, 0, this.nextCanvas.width, this.nextCanvas.height);\n                this.nextCtx.fillRect(j + 1, i + 1, 1, 1);\n                // this.nextCtx.fill()\n            })\n        })\n    }\n\n    ///// HOLD /////\n    drawHoldPiece(nextShape, adjustPos) {\n        nextShape.forEach((row, i) => {\n            row.forEach((value, j) => {\n                if (value !== 0) {\n                    this.holdCtx.fillStyle = this.pieceColors[value];\n                    this.holdCtx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1)\n                }\n            })\n        })\n    }\n\n    unDrawPreviousHoldShape(shape) {\n        shape.forEach((row, i) => {\n            row.forEach((value, j) => {\n                this.holdCtx.fillStyle = '#001f3f';\n                // this.holdCtx.rect(0, 0, this.nextCanvas.width, this.nextCanvas.height);\n                this.holdCtx.fillRect(j + 1, i + 1, 1, 1);\n                // this.holdCtx.fill()\n            })\n        })\n    }\n\n    updateScore(score) {\n        // document.getElementById('score').innerText = `Score: ${game.piece.score}`;\n        // document.getElementById('score').innerText = `Score: ${score}`;\n        document.getElementById('score').innerText = `${score}`;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ \"./src/piece.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d');\n\n    const nextCanvas = document.getElementById('next-canvas');\n    const nextCtx = nextCanvas.getContext('2d');\n\n    const holdCanvas = document.getElementById('hold-canvas');\n    const holdCtx = holdCanvas.getContext('2d');\n\n    // ctx.scale(20, 20);\n\n    const GAME_WIDTH = canvas.width;\n    const GAME_HEIGHT = canvas.height;\n\n    ////////// MENU STATE DISPLAY //////////\n\n    ctx.rect(0, 0, canvas.width, canvas.height);\n    // ctx.fillStyle = '#5D5C61';\n    // ctx.fillStyle = '#7395AE';\n    // ctx.fillStyle = '3f';\n    ctx.fillStyle = '#98B4D4';\n    ctx.fill();\n\n    ctx.font = '18px arial';\n    ctx.fillStyle = 'white';\n    ctx.textAlign = 'center';\n    ctx.fillText(\"Press ENTER To Start\", canvas.width / 2, canvas.height / 2);\n\n    ///////////\n\n    /////////// NEXT PIECE CANVAS //////////\n\n    nextCtx.rect(0, 0, nextCanvas.width, nextCanvas.height);\n    nextCtx.fillStyle = '#001f3f'\n    nextCtx.fill();\n\n    ///////////\n\n    /////////// HOLD PIECE CANVAS //////////\n\n    holdCtx.rect(0, 0, holdCanvas.width, holdCanvas.height);\n    holdCtx.fillStyle = '#001f3f'\n    holdCtx.fill();\n\n    ///////////\n\n    // const piece = new Piece(game);\n    // const board = new Board(GAME_WIDTH, GAME_HEIGHT);\n    // const game = new Game(canvas);\n    const game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas, nextCanvas, holdCanvas);\n\n    document.addEventListener('keydown', e => {\n        if (e.keyCode === 37) {\n            game.piece.moveLeft();\n        } else if (e.keyCode === 39) {\n            game.piece.moveRight();\n        } else if (e.keyCode === 40) {\n            game.piece.moveDown();\n        } else if (e.keyCode === 38) {\n            game.piece.rotateAction();\n        } else if (e.keyCode === 13) {\n            game.toggleGameStart();\n            game.start();\n        } else if (e.keyCode === 16) {\n            // hold piece\n            game.holdPiece();\n        }\n        // else if (e.keyCode === 32) {\n        //     game.piece.fastDrop();\n        // }\n    });\n\n    // game.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/piece.js":
/*!**********************!*\
  !*** ./src/piece.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _piece_shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece_shapes */ \"./src/piece_shapes.js\");\n\n\nclass Piece {\n    constructor(game) {\n        this.game = game;\n        this.board = game.board;\n        this.pos = {\n            x: 0,\n            y: 0\n        };\n        this.shape = null;\n        // this.shuffledShapes = null;\n\n        // this.prevShape = null;\n        this.nextShape = null;\n\n        this.holdShape = null;\n\n        this.score = 0;\n\n        this.pieceColors = [\n            null,\n            'purple',\n            'cyan',\n            'yellow',\n            'blue',\n            'orange',\n            'red',\n            'green',\n        ];\n\n        this.dropCounter = 0;\n        this.dropTime = 1000;\n        \n        this.restart();\n    }\n\n    moveLeft() {\n        this.pos.x -= 1;\n\n        if (this.board.detectCollision(this)) {\n            this.pos.x += 1\n        }\n    }\n\n    moveRight() {\n        this.pos.x += 1;\n\n        if (this.board.detectCollision(this)) {\n            this.pos.x -= 1\n        }\n    }\n\n    moveDown() {\n        this.pos.y += 1;\n\n        if (this.board.detectCollision(this)) {\n            this.pos.y -= 1;\n            this.board.lockPieceOnBoard(this);\n            // this.updateNextPiece(this.shape);\n\n            // this.handleRandomShape();\n\n            // this.updatePieceStates();\n            // this.updateNextPiece(this.shape);\n\n            // this.handleCurrentShape();\n            // this.handleNextShape();\n            // this.updateNextPiece();\n\n            this.restart();\n\n            // this.handleNextShape();\n            // this.updateNextPiece();\n\n            this.score += this.board.clearFilledRow();\n            // updateScore();\n            this.game.updateScore(this.score);\n        }\n\n        this.dropCounter = 0;\n    }\n\n    fastDrop() {\n        // this.dropTime = 0;\n        this.pos.y += (20 - this.shape.length);\n        // this.pos.y = 20\n\n        if (this.board.detectCollision(this)) {\n            this.pos.y -= 1;\n            this.board.lockPieceOnBoard(this);\n            this.restart();\n            this.score += this.board.clearFilledRow();\n            // updateScore();\n        }\n\n        this.dropCounter = 0;\n        // this.dropTime = 1000;\n    }\n\n    rotateAction() {\n        const posX = this.pos.x;\n        let collisionFactor = 1;\n        this.rotateShape(this.shape);\n\n        while (this.board.detectCollision(this)) {\n            this.pos.x += collisionFactor;\n            \n            if (collisionFactor > 0) {\n                collisionFactor = -(collisionFactor + 1);\n            } else {\n                collisionFactor = -(collisionFactor + (-1));\n            }\n\n            if (collisionFactor > this.shape[0].length) {\n                // this.rotateShape(this.shape);\n                this.rotateShapeReverse(this.shape);\n                this.pos.x = posX;\n                return;\n            }\n        }\n    }\n\n    rotateShape(pieceShape) {\n        for (let i = 0; i < pieceShape.length; i++) {\n            for (let j = 0; j < i; j++) {\n                [pieceShape[j][i], pieceShape[i][j]] = [pieceShape[i][j], pieceShape[j][i]];\n            }\n        }\n\n        pieceShape.forEach((row) => row.reverse());\n    }\n\n    rotateShapeReverse(pieceShape) {\n        for (let i = 0; i < pieceShape.length; i++) {\n            for (let j = 0; j < i; j++) {\n                [pieceShape[j][i], pieceShape[i][j]] = [pieceShape[i][j], pieceShape[j][i]];\n            }\n        }\n\n        pieceShape.reverse();\n    }\n\n    // shuffle(array) {\n    //     array.sort(() => Math.random() - 0.5);\n    // }\n\n    // shuffle(a) {\n    //     for (let i = a.length - 1; i > 0; i--) {\n    //         const j = Math.floor(Math.random() * (i + 1));\n    //         [a[i], a[j]] = [a[j], a[i]];\n    //     }\n    //     return a;\n    // }\n\n    // handleRandomShape() {\n    //     const shapes = ['T', 'I', 'O', 'J', 'L', 'Z', 'S'];\n    //     this.shape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]);\n    //     // this.nextShape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]);\n    // }\n\n    handleCurrentShape() {\n        const shapes = ['T', 'I', 'O', 'J', 'L', 'Z', 'S'];\n\n        this.shape = this.nextShape;\n        this.shape === null ? this.shape = Object(_piece_shapes__WEBPACK_IMPORTED_MODULE_0__[\"tetrisShapes\"])(shapes[Math.floor(Math.random() * shapes.length)]) : this.shape = this.nextShape;\n    }\n\n    handleNextShape() {\n        const shapes = ['T', 'I', 'O', 'J', 'L', 'Z', 'S'];\n        this.nextShape = Object(_piece_shapes__WEBPACK_IMPORTED_MODULE_0__[\"tetrisShapes\"])(shapes[Math.floor(Math.random() * shapes.length)]);\n    }\n\n    updateNextPiece(nextPiece) {\n        // document.getElementById('next').innerText = `${nextPiece}`;\n        document.getElementById('next-canvas').innerText = `${nextPiece}`;\n    }\n\n    ///// HOLD PIECE\n    handleHoldShape() {\n        // this.holdShape = this.shape;\n        // this.restart();\n\n        if (this.holdShape === null) {\n            this.holdShape = this.shape;\n            this.game.drawHoldPiece(this.holdShape, { x: 1, y: 1 });\n            this.restart();\n        } else {\n            this.game.unDrawPreviousHoldShape(this.holdShape);\n            this.holdShape = this.shape;\n            this.game.drawHoldPiece(this.holdShape, { x: 1, y: 1 });\n            this.shape = this.holdShape;\n            // undraw current shape\n            // draw new current shape that is the previous shape\n        }\n    }\n\n    // drawHoldPiece(nextShape, adjustPos) {\n    //     nextShape.forEach((row, i) => {\n    //         row.forEach((value, j) => {\n    //             if (value !== 0) {\n    //                 this.holdCtx.fillStyle = this.pieceColors[value];\n    //                 this.holdCtx.fillRect(j + adjustPos.x, i + adjustPos.y, 1, 1)\n    //             }\n    //         })\n    //     })\n    // }\n\n    // unDrawPreviousHoldShape(shape) {\n    //     shape.forEach((row, i) => {\n    //         row.forEach((value, j) => {\n    //             this.holdCtx.fillStyle = '#001f3f';\n    //             // this.holdCtx.rect(0, 0, this.nextCanvas.width, this.nextCanvas.height);\n    //             this.holdCtx.fillRect(j + 1, i + 1, 1, 1);\n    //             // this.holdCtx.fill()\n    //         })\n    //     })\n    // }\n\n    updateHoldPiece(holdPiece) {\n        document.getElementById('hold-canvas').innerText = `${holdPiece}`;\n    }\n    /////\n\n    restart() {\n        // // const shapes = 'TIOJLZS';\n        // const shapes = ['T', 'I', 'O', 'J', 'L', 'Z', 'S'];\n        // // let shuffledShapes = this.shuffle(shapes);\n        // // this.shape = tetrisShapes(shuffledShapes[Math.floor(Math.random() * shapes.length)]);\n        // this.shape = tetrisShapes(shapes[Math.floor(Math.random() * shapes.length)]);\n\n        this.handleCurrentShape();\n        this.handleNextShape();\n        this.updateNextPiece(this.nextShape);\n\n        this.pos.x = Math.floor(this.board.newBoard[0].length / 2) - Math.floor(this.shape[0].length / 2);\n        // this.pos.x = Math.floor(this.board.newBoard[0].length / 2) - Math.floor(this.nextShape[0].length / 2);\n        this.pos.y = 0;\n\n        if (this.board.detectCollision(this)) {\n            // this.board.forEach((row) => row.fill(0));\n            this.board.clearRow();\n            this.score = 0;\n            // updateScore();\n            this.game.updateScore(this.score)\n        }\n    }\n\n    update(deltaTime) {\n        this.dropCounter += deltaTime;\n\n        if (this.dropCounter > this.dropTime) {\n            this.moveDown();\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Piece);\n\n//# sourceURL=webpack:///./src/piece.js?");

/***/ }),

/***/ "./src/piece_shapes.js":
/*!*****************************!*\
  !*** ./src/piece_shapes.js ***!
  \*****************************/
/*! exports provided: tetrisShapes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tetrisShapes\", function() { return tetrisShapes; });\nfunction tetrisShapes(shape) {\n    if (shape === 'T') {\n        return [\n            [1, 1, 1],\n            [0, 1, 0],\n            [0, 0, 0],\n        ];\n    } else if (shape === 'I') {\n        return [\n            [0, 0, 2, 0],\n            [0, 0, 2, 0],\n            [0, 0, 2, 0],\n            [0, 0, 2, 0],\n        ];\n    } else if (shape = 'O') {\n        return [\n            [3, 3],\n            [3, 3],\n        ];\n    } else if (shape === 'J') {\n        return [\n            [4, 0, 0],\n            [4, 4, 4],\n            [0, 0, 0],\n        ];\n    } else if (shape === 'L') {\n        return [\n            [0, 0, 5],\n            [5, 5, 5],\n            [0, 0, 0],\n        ];\n    } else if (shape === 'Z') {\n        return [\n            [6, 6, 0],\n            [0, 6, 6],\n            [0, 0, 0],\n        ];\n    } else if (shape === 'S') {\n        return [\n            [0, 7, 7],\n            [7, 7, 0],\n            [0, 0, 0],\n        ];\n    }\n}\n\n//# sourceURL=webpack:///./src/piece_shapes.js?");

/***/ })

/******/ });