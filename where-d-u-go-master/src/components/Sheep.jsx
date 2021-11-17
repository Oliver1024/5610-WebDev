import React, { useState } from "react";
import SquareDraggable from "components/SquareDraggable";
import { ItemTypes } from "components/ItemTypes";

import { useDrag } from 'react-dnd'
import { useDispatch } from "react-redux";


function Sheep() {
    const dispatch = useDispatch()

    const symbol = "sheep"

    const [{ pos }, drag] = useDrag(() => ({
        type: ItemTypes.SQUARE,
        item: { id: symbol, key: "U4", strictX: 3, strictY: 0 },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            pos: monitor.getClientOffset()
        })
    }))



    return (
        <div ref={drag} className="sheep">
            <SquareDraggable symbol={symbol} />
            <SquareDraggable symbol={symbol} />
            <SquareDraggable symbol={symbol} />
            <SquareDraggable symbol={symbol} />
        </div>
    )
}

export default Sheep
