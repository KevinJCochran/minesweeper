// Kevin Cochran

export default class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = (numberOfColumns * numberOfRows);

        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard() {
        return this._playerBoard;
    }

    flipTile(rowIndex, columnIndex) {
        if(this._playerBoard[rowIndex][columnIndex] !== ' ') {
            console.log('This tile has already been flipped!');
        } else if(this._bombBoard[rowIndex][columnIndex] === 'B') {
            this._playerBoard[rowIndex][columnIndex] = 'B';
        } else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex,columnIndex);
            this._numberOfTiles--;
        }
    }

    hasSafeTiles() {
        return this._numberOfBombs !== this._numberOfTiles;
    }

    getNumberOfNeighborBombs(rowIndex, columnIndex) {
        const numberOfRows = this._bombBoard.length;
        const numberOfColumns = this._bombBoard[0].length;
        const neighborOffsets = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1]
        ];
        let numberOfBombs = 0;
        neighborOffsets.forEach( offset => {
            const neighborRowIndex = rowIndex + offset[0];
            const neighborColumnIndex = columnIndex + offset[1];
            if(neighborRowIndex >= 0
                && neighborRowIndex < numberOfRows
                && neighborColumnIndex >= 0
                && neighborColumnIndex < numberOfColumns) {
                if(this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                    numberOfBombs++;
                }
            }
        });
        return numberOfBombs;
    }

    static generatePlayerBoard(numberOfRows, numberOfColumns) {
        let board = [];
        for(let i = 0; i < numberOfRows; i++) {
            board.push([]);
            for(let j = 0; j < numberOfColumns; j++) {
                board[i].push(' ');
            }
        }
        return board;
    }

    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
                board[i].push(' ');
            }
        }
        // populate board with bombs
        let bombCount = 0;
        while(bombCount < numberOfBombs) {
            let randomRowIndex = Math.floor(Math.random() * numberOfRows);
            let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
            if(board[randomRowIndex][randomColumnIndex] === ' ') {
                board[randomRowIndex][randomColumnIndex] = 'B';
                bombCount++;
            }
        }
        return board;
    }

    printBoard() {
        for(let i = 0; i < this._playerBoard.length; i++) {
            console.log(this._playerBoard[i].join('|'));
        }
    }
}