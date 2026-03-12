import { useState } from "react";
import PlayArea from "../playArea/PlayArea";
import styles from './MainPage.module.css';

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

    function manageNewGameClick() {
        if (!gameInitialized) {
            const playerIndex = randomizeActivePlayer();
            if (playerIndex === 0) setActivePlayer('O');
            if (playerIndex === 1) setActivePlayer('X');
            setGameInitialized(true);
        };
    };

    function manageRestart() {
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
            <div className={styles.infoPanel}>{activePlayer ? `Active Player: ${activePlayer}` : 'Start new game'}</div>
            <PlayArea activePlayer={activePlayer} setActivePlayer={setActivePlayer} gameInitialized={gameInitialized} gameMatrix={gameMatrix} setMatrix={setMatrix} />
            {!gameInitialized && <button className={styles.button} onClick={manageNewGameClick}>New Game</button>}
            {gameInitialized && <button className={styles.restartButton} onClick={manageRestart}>Restart</button>} 
        </>
    )
}