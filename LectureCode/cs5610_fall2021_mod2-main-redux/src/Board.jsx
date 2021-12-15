import React, { useState } from 'react';
import { Square } from "./Square"
import './Board.css'
import { useSelector } from 'react-redux';

export default function Board() {
    const clickCount = useSelector((state) => state.clickCount)
    const boardState = useSelector((state) => state.game)
    // const [boardState, setBoard] = useState([
    //     ['','X',''],
    //     ['','',''],
    //     ['X','','0'],
    // ])

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square symbol={boardState[i][j]} x={i} y={j} />))
            // boardComponent.push((<Square symbol={boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
        }
    }

    return (
        <div>
            <h1>{clickCount}</h1>
                <div id="board">
            {boardComponent}
            </div>
        </div>
    )
}