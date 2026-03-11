import { useState } from "react";
import Cell from "../cell/Cell";
import styles from './PlayArea.module.css';

const matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];

export default function PlayArea({ activePlayer, setActivePlayer, gameInitialized }) {
    const [gameMatrix, setMatrix] = useState(matrix);
   
    return (
        <ul className={styles.box}>
            {gameMatrix.map((row, indexY) => {
                return <ul key={indexY} className={styles.row}>
                    {row.map((cell, indexX) => {
                        return <Cell key={indexX} gameInitialized={gameInitialized} x={indexX} y={indexY} activePlayer={activePlayer} gameMatrix={gameMatrix} setActivePlayer={setActivePlayer} setMatrix={setMatrix} />
                    })}
                </ul>
            })}
        </ul>
    )
}