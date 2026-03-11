import Cell from "../cell/Cell";
import styles from './PlayArea.module.css';

export default function PlayArea({ gameMatrix, activePlayer, setActivePlayer }) {
   
    return (
        <ul className={styles.box}>
            {gameMatrix.matrix.map((row, indexY) => {
                return <ul key={indexY} className={styles.row}>
                    {row.map((cell, indexX) => {
                        return <Cell key={indexX} x={indexX} y={indexY} activePlayer={activePlayer} gameMatrix={gameMatrix} setActivePlayer={setActivePlayer} />
                    })}
                </ul>
            })}
        </ul>
    )
}