// Minesweeper.js
// Kevin Cochran

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];
    for(let i = 0; i < numberOfRows; i++) {
        board.push([]);
        for(let j = 0; j < numberOfColumns; j++) {
            board[i].push(' ');
        }
    }
    return board;
}
const printBoard = board => {
    console.log('Current board: ');
    for(let i = 0; i < board.length; i++) {
        console.log(board[i].join('|'));
    }
}

// console.log(generatePlayerBoard(5,4));
printBoard(generatePlayerBoard(5,4));
