import React from 'react'
import Square from 'components/SquareTest'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function Boat() {
    return (
        <div>
            <Square />
        </div>
    )
}

export default Boat
