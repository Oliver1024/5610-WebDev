import React, { useState } from "react";
import SquareDraggable from "components/SquareDraggable";
import { ItemTypes } from "components/ItemTypes";

import { useDrag } from 'react-dnd'
import { useDispatch } from "react-redux";


function Cow() {
    const symbol = "cow"

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.SQUARE,
        item: { id: symbol, key: "U2", strictX: 0, strictY: 1 },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            pos: monitor.getClientOffset()
        })
    }))



    return (
        <div className="cow" ref={drag} >
            <SquareDraggable symbol={symbol} isDragging={isDragging} />
            <SquareDraggable symbol={symbol} />
        </div>
    )
}

export default Cow
