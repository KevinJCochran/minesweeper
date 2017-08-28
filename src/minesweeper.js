// Minesweeper.js
// Kevin Cochran

const printBoard = board => {
    console.log('Current board: ');
    console.log(board[0].join('|'));
}


let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
]
console.log(printBoard(board));
