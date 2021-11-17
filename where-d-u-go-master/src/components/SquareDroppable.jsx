import React, { useState } from "react";
import { ItemTypes } from "components/ItemTypes";
import { useSelector, useDispatch } from "react-redux";
import Sheep from "components/Sheep"
import Pig from "components/Pig"
import Pig2 from "components/Pig2"
import Cow from "components/Cow"
import Chicken from "components/Chicken"

import { useDrop, useDrag } from 'react-dnd'

export default function Square({ onChange, containers, boardstate, symbol, children, x, y }) {
    const draggingItem = useSelector((state) => state.dragItem)
    const dispatch = useDispatch()

    const [{ a, pos }, drop] = useDrop(() => ({
        accept: ItemTypes.SQUARE,
        canDrop: (item) => {
            if (x + item.strictX < boardstate.length && y + item.strictY < boardstate[0].length && handleCanDrop(x, y, item.strictX, item.strictY, boardstate)) return true;
            else return false;
        },
        drop: (item) => {
            let preX = containers.positions[item.id][0];
            let preY = containers.positions[item.id][1];
            containers.movePosition(item.id, x, y)
            setCurBaord(preX, preY, item.strictX, item.strictY, boardstate, '0')
            setCurBaord(x, y, item.strictX, item.strictY, boardstate, item.key)
            onChange([...boardstate])
        },
        collect: (monitor) => ({
            pos: monitor.getClientOffset()
        })
    }))

    function setCurBaord(x, y, lenx, leny, boardstate, key) {
        for (let i = x; i <= x + lenx; i++) {
            for (let j = y; j <= y + leny; j++) {
                boardstate[i][j] = key
            }
        }
    }

    function handleCanDrop(x, y, lenx, leny, boardstate) {
        for (let i = x; i <= x + lenx; i++) {
            for (let j = y; j <= y + leny; j++) {
                if (boardstate[i][j] != '0') return false;
            }
        }
        return true;
    }


    let isSquareHere = 0;
    const positions = containers.positions
    if (positions["sheep"][0] === x && positions["sheep"][1] === y) {
        isSquareHere = 1;
    } else if (positions["pig"][0] === x && positions["pig"][1] === y) {
        isSquareHere = 2;
    } else if (positions["cow"][0] === x && positions["cow"][1] === y) {
        isSquareHere = 3;
    } else if (positions["pig2"][0] === x && positions["pig2"][1] === y) {
        isSquareHere = 4;
    } else if (positions["chicken"][0] === x && positions["chicken"][1] === y) {
        isSquareHere = 5;
    }
    else {
        isSquareHere = 0;
    }

    function renderSquare(isSquareHere) {
        if (isSquareHere === 1) {
            return (<Sheep />)
        } else if (isSquareHere === 2) {
            return (<Pig />)
        } else if (isSquareHere === 3) {
            return (<Cow />)
        } else if (isSquareHere === 4) {
            return (<Pig2 />)
        } else if (isSquareHere === 5) {
            return (<Chicken />)
        } else {
            return ("")
        }
    }

    return (
        <div ref={drop} className="square-empty" >
            {renderSquare(isSquareHere)}
        </div>
    )
};