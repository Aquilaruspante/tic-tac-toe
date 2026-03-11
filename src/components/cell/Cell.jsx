import { useState } from 'react';
import styles from './Cell.module.css';

export default function Cell({x, y, activePlayer, gameMatrix, setActivePlayer}) {
    const [matrix, setMatrix] = useState(gameMatrix.matrix);

    function manageClick() {
        console.log(x, y, activePlayer);
        setMatrix(matrix => gameMatrix.editMatrix(x, y, activePlayer));
        if (activePlayer === 'O') {
            setActivePlayer('X');
        } else {
            setActivePlayer('O');
        };
    };

    return (
        <div className={styles.cell} onClick={manageClick}>{matrix[y][x] === 'X' ? 'X' : matrix[y][x] === 'O' ? 'O' : ''}</div>
    );
};