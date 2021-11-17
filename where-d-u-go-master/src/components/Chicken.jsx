import React, { useState } from "react";
import SquareDraggable from "components/SquareDraggable";
import { ItemTypes } from "components/ItemTypes";

import { useDrag } from 'react-dnd'
import { useDispatch } from "react-redux";


function Chicken() {
    const symbol = "chicken"

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.SQUARE,
        item: { id: symbol, key: "U5", strictX: 0, strictY: 4 },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            pos: monitor.getClientOffset()
        })
    }))



    return (
        <div className="chicken" ref={drag} >
            <SquareDraggable symbol={symbol} />
            <SquareDraggable symbol={symbol} />
            <SquareDraggable symbol={symbol} />
            <SquareDraggable symbol={symbol} />
            <SquareDraggable symbol={symbol} />
        </div>
    )
}

export default Chicken
