import { useState } from "react";
import PlayArea from "../playArea/PlayArea";
import styles from './MainPage.module.css';
import { Context } from "../../Context";

function randomizeActivePlayer() {
    const index = Math.floor(Math.random() * 2);
    return index;
}

const matrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function MainPage() {
    const [activePlayer, setActivePlayer] = useState();
    const [gameInitialized, setGameInitialized] = useState(false);
    const [gameMatrix, setMatrix] = useState(matrix);
    const [winner, setWinner] = useState(false);

    function manageNewGameClick() {
        if (!gameInitialized) {
            setWinner(false);
            const playerIndex = randomizeActivePlayer();
            if (playerIndex === 0) setActivePlayer('O');
            if (playerIndex === 1) setActivePlayer('X');
            setGameInitialized(true);
        };
    };

    function manageRestart() {
        setWinner(false);
        setMatrix([
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]);
        const playerIndex = randomizeActivePlayer();
        if (playerIndex === 0) setActivePlayer('O');
        if (playerIndex === 1) setActivePlayer('X');
        setGameInitialized(true);
    };

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>Tic Tac Toe</h1>
            </header>
            {!winner && <div className={styles.infoPanel}>{activePlayer ? `Active Player: ${activePlayer}` : 'Start new game'}</div>}
            {winner && <div className={styles.infoPanel}>{`Player ${winner} won`}</div>}
            <Context value={{ activePlayer, winner, setActivePlayer, gameInitialized, gameMatrix, setMatrix, setWinner }}>
                <PlayArea />
            </Context>
            {!gameInitialized && <button className={styles.button} onClick={manageNewGameClick}>New Game</button>}
            {gameInitialized && <button className={styles.restartButton} onClick={manageRestart}>Restart</button>} 
        </>
    )
}