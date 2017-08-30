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
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let maxBombs = numberOfRows * numberOfColumns;
    // Check that their is room to add all bombs
    if(numberOfBombs > maxBombs) {
        numberOfBombs = maxBombs;
    }

    // Create board
    let board = [];
    for(let i = 0; i < numberOfRows; i++) {
        board.push([]);
        for(let j = 0; j < numberOfColumns; j++) {
            board[i].push(null);
        }
    }

    // populate board with bombs
    let bombCount = 0;
    while(bombCount < numberOfBombs) {
        // TODO: prevent placing bombs on top of already existing bombs
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = 'b';
        bombCount++;
    }
    return board;
};
const printBoard = board => {
    console.log('Current board: ');
    for(let i = 0; i < board.length; i++) {
        console.log(board[i].join('|'));
    }
};


// console.log(generatePlayerBoard(5,4));
printBoard(generatePlayerBoard(5,4));
printBoard(generateBombBoard(2,3,24));
