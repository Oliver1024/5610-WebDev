import React, { useState } from "react";
import SquareDraggable from "components/SquareDraggable";
import { ItemTypes } from "components/ItemTypes";

import { useDrag } from 'react-dnd'
import { useDispatch } from "react-redux";


function Pig() {
    const dispatch = useDispatch()

    const symbol = "pig2"

    const [{ pos }, drag] = useDrag(() => ({
        type: ItemTypes.SQUARE,
        item: { id: symbol, key: "U3", strictX: 2, strictY: 0 },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            pos: monitor.getClientOffset()
        })
    }))



    return (
        <div ref={drag} className="pig">
            <SquareDraggable symbol={symbol} />
            <SquareDraggable symbol={symbol} />
            <SquareDraggable symbol={symbol} />
        </div>
    )
}

export default Pig
