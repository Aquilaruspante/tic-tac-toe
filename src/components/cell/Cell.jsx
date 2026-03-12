import styles from './Cell.module.css';

export default function Cell({x, y, activePlayer, gameMatrix, setActivePlayer, setMatrix, gameInitialized, setWinner, winner}) {

    function checkEndGame(matrix) {
        if (
            (matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2] && matrix[0][0] != null)
            ||
            (matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2] && matrix[1][0] != null)
            ||
            (matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2] && matrix[2][0] != null)
            ||
            (matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0] && matrix[0][0] != null)
            ||
            (matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1] && matrix[0][1] != null)
            ||
            (matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2] && matrix[0][2] != null)
            ||
            (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[0][0] != null)
            ||
            (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[0][2] != null)
        ) {
            setWinner(activePlayer);
        }
    }

    function editMatrix(x, y, activePlayer) {
        const newMatrix = [...gameMatrix];
        if (activePlayer === 'O' && gameMatrix[y][x] === null) newMatrix[y][x] = 'O';
        if (activePlayer === 'X' && gameMatrix[y][x] === null) newMatrix[y][x] = 'X';

        checkEndGame(newMatrix);

        return newMatrix;
    };
    
    function manageClick() {
        if (gameInitialized && !winner) {
            setMatrix(gameMatrix => editMatrix(x, y, activePlayer));
            if (activePlayer === 'O') {
                setActivePlayer('X');
            } else {
                setActivePlayer('O');
            };
        };      
    };

    return (
        <div className={styles.cell} onClick={manageClick}>{gameMatrix[y][x] === 'X' ? 'X' : gameMatrix[y][x] === 'O' ? 'O' : ''}</div>
    );
};