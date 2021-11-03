import { useDispatch } from "react-redux";
import React from "react";

export default function Square(props) {
    const symbol = props.symbol;
    let className = "square white"

    if (symbol === "1") {
        className = "square black"
    } else {
        className = "square white"
    }
    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(
            {
                type: "click",
                symbol: symbol,
                x: props.x,
                y: props.y
            }
        )} className={className}>
        </div>
    )
};