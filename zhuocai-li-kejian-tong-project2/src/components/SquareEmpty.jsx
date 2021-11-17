import React from "react";
import { ItemTypes } from "components/ItemTypes"
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from 'react-dnd'

export default function SquareEmpty({ x, y, children, game, name }) {
    // const x = props.x;
    // const y = props.y;
    // const dispatch = useDispatch()
    // const item = useSelector((state) => state.dragItem)
    // const boardState = useSelector((state) => state.drag)

    // const isSquareHere = x === itemPosition[0] && y === itemPosition[1]

    const curGame = game[name];

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: ItemTypes.SQUARE,
        canDrop: () => curGame.canMoveBoat(x, y, 0),
        drop: () => curGame.moveBoat(x, y),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }) || {},
    }), [game]);

    return (
        <div ref={drop} role="Space" data-testid={`(${x},${y})`} className="square-empty">
            {children}
        </div>
    )
};