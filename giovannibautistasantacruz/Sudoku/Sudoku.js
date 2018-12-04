let puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

let initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const puzzleResolve = (puzzle) => {

    for (let i = 0; i < 9; i++) {

        for (let pz = 0; pz < 9; pz++) {

            if (puzzle[i][pz] == 0) {

                let pRow = pSolution(puzzle[i]);

                let column = generateColumns(puzzle, pz);

                let pColumn = pSolution(column);

                let grid = generateGrid(puzzle, i, pz);

                let pGrid = pSolution(grid);

                let result = combine(pGrid, pColumn, pRow);

                if (result.length == 1) {

                    puzzle[i][pz] = result[0];

                    i = -1;
                    break;
                }
            }
        }
    }
    return puzzle;
};


const generateGrid = (puzzle, x, y) => {

    const numbers = [];
    const startRow = Math.floor(x / 3) * 3;
    const startColumn = Math.floor(y / 3) * 3;
    for (let row = startRow; row < startRow + 3; row++) {
        for (let column = startColumn; column < startColumn + 3; column++) {
            numbers.push(puzzle[row][column]);
        }
    }
    return numbers;
};

const pSolution = (dataArray) => {
    let result = initialArray.filter(p => dataArray.indexOf(p) < 0);
    return result;

};

const generateColumns = (puzzle, posicion) => {
    let column = [];
    for (let i = 0; i < puzzle.length; i++) {
        column.push(puzzle[i][posicion]);
    }
    return column;
};


const combine = (...arrays) => {

    let result = [];

    for (const array of arrays) {
        result = result.length === 0 ? array : result.filter(number => {
            return array.includes(number);
        });
    }

    return result;
};



puzzleResolve(puzzle);