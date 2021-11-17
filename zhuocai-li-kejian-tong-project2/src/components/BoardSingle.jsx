import React from "react";
import Square from "./SquareSingle"
import { useSelector } from 'react-redux';

export default function Board() {
    const boardState = useSelector((state) => state.gameSingle)

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((
                <Square symbol={boardState[i][j]} x={i} y={j} />
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