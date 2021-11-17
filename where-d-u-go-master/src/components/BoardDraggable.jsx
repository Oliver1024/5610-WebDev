import React, { useState } from "react";
import SquareDroppable from "./SquareDroppable";
import { useSelector } from "react-redux"


export default function Board({ containers, boardState, setBoard }) {

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((
                <SquareDroppable containers={containers} symbol={boardState[i][j]} boardstate={boardState} x={i} y={j} onChange={setBoard} />
            ))
        }
    }


    return (
        <React.Fragment>
            <div className="board">
                {boardComponent}
            </div>
        </React.Fragment>
    )
};