import React, { useEffect, useState, useMemo } from "react";
import SquareEmpty from "./SquareEmpty"
import SquareTest from "./SquareTest"
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Piece } from "components/Piece"
import { Game, Game2 } from 'components/Game'


export default function Board() {
    const game = useMemo(() => new Game(), []);
    const game2 = useMemo(() => new Game2(), []);
    const boardState = useSelector((state) => state.drag)
    const boardComponent = [];
    const [[boat1X, boat1Y], setBoatPos] = useState(game.boatPosition);
    useEffect(() => game.observe(setBoatPos));
    const [[boat2X, boat2Y], setBoatPos2] = useState(game2.boatPosition);
    useEffect(() => game2.observe(setBoatPos2));
    function renderSquare(i) {
        
        const boatPos = [[boat1X, boat1Y], [boat2X, boat2Y]]

        const x = i % 10
        const y = Math.floor(i / 10);
        let isBoat = false;
        let name = 0;
        for (let i = 0; i < boatPos.length; i++) {
            isBoat = boatPos[i][0] === x && boatPos[i][1] === y
            name = isBoat === true ? i : 0;
            if (isBoat === true) break;
        }
        let gameInput = [game, game2];
        return (
            <div key={i} style={{ width: '10%', height: '10%' }} >
                <SquareEmpty x={x} y={y} game={gameInput} name={1}>
                    <Piece isBoat={isBoat} />
                </SquareEmpty>
            </div>
        )
    }

    for (let i = 0; i < 100; i++) {
        boardComponent.push(renderSquare(i));
    }

    // for (let i = 0; i < boardState.length; i++) {
    //     let row = boardState[i];
    //     for (let j = 0; j < row.length; j++) {
    //         boardComponent.push((
    //             <SquareEmpty key={i * 10 + j} symbol={boardState[i][j]} x={i} y={j} >
    //             </SquareEmpty>
    //         ))
    //     }
    // }



    return (
        <React.Fragment>
            <DndProvider backend={HTML5Backend}>
                <div className="board">
                    {boardComponent}
                </div>
            </DndProvider>

        </React.Fragment>
    )
};