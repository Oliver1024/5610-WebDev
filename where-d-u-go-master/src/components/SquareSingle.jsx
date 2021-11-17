import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Square(props) {
    let symbol = props.symbol;
    let className = ""

    if (symbol === '1') {
        className = "square black"
    } else if (symbol === 'X2') {
        className = "square blue"
    } else if (symbol === 'X3') {
        className = "square green"
    } else if (symbol === 'X4') {
        className = "square purple"
    } else if (symbol === 'X5') {
        className = "square yellow"
    }
    else {
        className = "square white"
    }
    const dispatch = useDispatch()

    return (
        <div onClick={() => {
            dispatch(
                {
                    type: "clickSingle",
                    symbol: symbol,
                    x: props.x,
                    y: props.y
                }
            )
        }
        } className={className}>
        </div>
    )
};