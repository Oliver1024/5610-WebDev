import React, { useMemo, useState } from 'react';
import Navbar from 'components/Navbar';
import Panel from 'components/Panel';
import Board from 'components/BoardDraggable';
import { useSelector, useDispatch } from 'react-redux';
import { Containers } from "components/SquareContainers"
import { Link } from 'react-router-dom'

export default function PlaygroundFreeplay() {
    const win = useSelector((state) => state.winClick)
    const containers = useMemo(() => new Containers(), [])

    const [boardState, setBoard] = useState([
        ['U4', 'U3', 'U2', 'U2', 'U3', '0', '0', '0', '0', '0'],
        ['U4', 'U3', '0', '0', 'U3', '0', '0', '0', '0', '0'],
        ['U4', 'U3', '0', '0', 'U3', '0', '0', '0', '0', '0'],
        ['U4', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['U5', 'U5', 'U5', 'U5', 'U5', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
    ])
    console.log(boardState)
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div className="page-wrapper">
                <Panel />
                <Navbar />
                <div className="playground-mid-wrapper playground drag-wrapper">
                    <div className="board-wrapper board-ai">
                        <div className="board-background"></div>
                        <Board containers={containers} boardState={boardState} setBoard={setBoard} />
                    </div>
                    <Link to="/playground-normal" className="btn-set" id="set" onClick={() => {
                        dispatch({
                            type: 'set',
                            board: boardState
                        })
                        dispatch({
                            type: 'first-open',
                            active: "true"
                        })
                    }}>Done</Link>
                </div>

            </div>

        </React.Fragment>
    )
}