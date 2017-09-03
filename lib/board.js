'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Kevin Cochran

var Board = function () {
    function Board(numberOfRows, numberOfColumns, numberOfBombs) {
        _classCallCheck(this, Board);

        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfColumns * numberOfRows;

        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    _createClass(Board, [{
        key: 'flipTile',
        value: function flipTile(rowIndex, columnIndex) {
            if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
                console.log('This tile has already been flipped!');
            } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
                this._playerBoard[rowIndex][columnIndex] = 'B';
            } else {
                this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
                this._numberOfTiles--;
            }
        }
    }, {
        key: 'hasSafeTiles',
        value: function hasSafeTiles() {
            return this._numberOfBombs !== this._numberOfTiles;
        }
    }, {
        key: 'getNumberOfNeighborBombs',
        value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
            var _this = this;

            var numberOfRows = this._bombBoard.length;
            var numberOfColumns = this._bombBoard[0].length;
            var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, 1], [1, 0], [1, -1]];
            var numberOfBombs = 0;
            neighborOffsets.forEach(function (offset) {
                var neighborRowIndex = rowIndex + offset[0];
                var neighborColumnIndex = columnIndex + offset[1];
                if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
                    if (_this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                        numberOfBombs++;
                    }
                }
            });
            return numberOfBombs;
        }
    }, {
        key: 'printBoard',
        value: function printBoard() {
            for (var i = 0; i < this._playerBoard.length; i++) {
                console.log(this._playerBoard[i].join('|'));
            }
        }
    }, {
        key: 'playerBoard',
        get: function get() {
            return this._playerBoard;
        }
    }], [{
        key: 'generatePlayerBoard',
        value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
            var board = [];
            for (var i = 0; i < numberOfRows; i++) {
                board.push([]);
                for (var j = 0; j < numberOfColumns; j++) {
                    board[i].push(' ');
                }
            }
            return board;
        }
    }, {
        key: 'generateBombBoard',
        value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
            var maxBombs = numberOfRows * numberOfColumns;
            // Check that their is room to add all bombs
            if (numberOfBombs > maxBombs) {
                numberOfBombs = maxBombs;
            }
            // Create board
            var board = [];
            for (var i = 0; i < numberOfRows; i++) {
                board.push([]);
                for (var j = 0; j < numberOfColumns; j++) {
                    board[i].push(' ');
                }
            }
            // populate board with bombs
            var bombCount = 0;
            while (bombCount < numberOfBombs) {
                var randomRowIndex = Math.floor(Math.random() * numberOfRows);
                var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
                if (board[randomRowIndex][randomColumnIndex] === ' ') {
                    board[randomRowIndex][randomColumnIndex] = 'B';
                    bombCount++;
                }
            }
            return board;
        }
    }]);

    return Board;
}();

exports.default = Board;