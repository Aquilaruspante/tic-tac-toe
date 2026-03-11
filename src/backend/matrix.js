class Matrix {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    editMatrix(x, y, activePlayer) {
        const newMatrix = [...this.matrix];
        if (activePlayer === 'O' && this.matrix[y][x] === null) newMatrix[y][x] = 'O';
        if (activePlayer === 'X' && this.matrix[y][x] === null) newMatrix[y][x] = 'X';

        return newMatrix;
    };
};

export default Matrix;