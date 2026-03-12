import { useContext } from "react";
import Cell from "../cell/Cell";
import styles from './PlayArea.module.css';
import { Context } from "../../Context";

export default function PlayArea() {
    const { gameMatrix } = useContext(Context);
   
    return (
        <ul className={styles.box}>
            {gameMatrix.map((row, indexY) => {
                return <ul key={indexY} className={styles.row}>
                    {row.map((cell, indexX) => {
                        return <Cell key={indexX} x={indexX} y={indexY} />
                    })}
                </ul>
            })}
        </ul>
    )
}