'use strict';

// Minesweeper.js
// Kevin Cochran

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
    var board = [];
    for (var i = 0; i < numberOfRows; i++) {
        board.push([]);
        for (var j = 0; j < numberOfColumns; j++) {
            board[i].push(' ');
        }
    }
    return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    // Check that their is room to
    var board = [];
    for (var i = 0; i < numberOfRows; i++) {
        board.push([]);
        for (var j = 0; j < numberOfColumns; j++) {
            board[i].push(null);
        }
    }
    return board;
};
var printBoard = function printBoard(board) {
    console.log('Current board: ');
    for (var i = 0; i < board.length; i++) {
        console.log(board[i].join('|'));
    }
};

// console.log(generatePlayerBoard(5,4));
//printBoard(generatePlayerBoard(5,4));
printBoard(generateBombBoard(2, 3));