import React, { setState } from "react";
import { ItemTypes } from "components/ItemTypes"
import { useSelector, useDispatch } from "react-redux";
import { useDrag } from 'react-dnd'

export default function Square(props) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.SQUARE,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }), []);

    return (
        // <span ref={drag} className="boat5 red" onDragStart={
        //     dispatch({
        //         type: "dragStart",
        //         symbol: props.symbol
        //     })
        // }>
        // </span>
        <span ref={drag} style={{ opacity: isDragging ? 1 : 0.5 }} className="boat5 red"></span>

    )
};