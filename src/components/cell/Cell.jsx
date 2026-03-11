import styles from './Cell.module.css';

export default function Cell({x, y, activePlayer, gameMatrix, setActivePlayer, setMatrix, gameInitialized}) {

    function editMatrix(x, y, activePlayer) {
        const newMatrix = [...gameMatrix];
        if (activePlayer === 'O' && gameMatrix[y][x] === null) newMatrix[y][x] = 'O';
        if (activePlayer === 'X' && gameMatrix[y][x] === null) newMatrix[y][x] = 'X';

        return newMatrix;
    };
    
    function manageClick() {
        if (gameInitialized) {
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