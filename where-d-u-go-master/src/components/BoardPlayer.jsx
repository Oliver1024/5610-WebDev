import React from "react";
import SquarePlayer from "./SquarePlayer"
import { useSelector } from 'react-redux';

export default function Board() {
    const boardState = useSelector((state) => state.gamePlayer)

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((
                <SquarePlayer symbol={boardState[i][j]} x={i} y={j} />
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