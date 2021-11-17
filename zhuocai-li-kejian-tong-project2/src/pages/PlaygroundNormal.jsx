import React from 'react';
import Navbar from 'components/NavbarNormal';
import Panel from 'components/Panel';
import Board from 'components/Board';
import BoardPlayer from 'components/BoardPlayer';
import { useSelector } from 'react-redux';
import WinPanel from 'components/WinPanel';
import LosePanel from 'components/LosePanel';

export default function PlaygroundNormal() {
    const winHuman = useSelector((state) => state.winClickNormal)
    const aiBoardState = useSelector((state) => state.gamePlayer)
    let winAI = 0;
    for (let i = 0; i < aiBoardState.length; i++) {
        let row = aiBoardState[i]
        for (let j = 0; j < aiBoardState[0].length; j++) {
            if (row[j] === 'X2' || row[j] === 'X3' || row[j] === 'X4' || row[j] === 'X5') winAI += 1;
        }
    }
    console.log(winAI)

    return (
        <React.Fragment>
            <Navbar />
            <Panel />
            <div className="page-wrapper">
                <div className="playground-double-wrapper playground">
                    {winHuman >= 1 ? (<WinPanel />) : ""}
                    {winAI >= 17 ? (<LosePanel />) : ""}
                    <div className="board-wrapper board-ai">
                        <div className="board-background"></div>
                        <Board />
                    </div>
                    <div className="board-wrapper board-human">
                        <div className="board-background"></div>
                        <BoardPlayer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}