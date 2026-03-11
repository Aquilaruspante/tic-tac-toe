import { useState } from "react";
import PlayArea from "../playArea/PlayArea";

function randomizeActivePlayer() {
    const index = Math.floor(Math.random() * 2);
    return index;
}

export default function MainPage() {
    const [activePlayer, setActivePlayer] = useState();
    const [gameInitialized, setGameInitialized] = useState(false);

    function manageNewGameClick() {
        if (!gameInitialized) {
            const playerIndex = randomizeActivePlayer();
            if (playerIndex === 0) setActivePlayer('O');
            if (playerIndex === 1) setActivePlayer('X');
            setGameInitialized(true);
        };
    };

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <PlayArea activePlayer={activePlayer} setActivePlayer={setActivePlayer} gameInitialized={gameInitialized} />
            <button onClick={manageNewGameClick}>New Game</button>
        </>
    )
}