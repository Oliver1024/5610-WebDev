import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Square(props) {
    let symbol = props.symbol;
    let className = ""

    if (symbol === 'X') {
        className = "square-human red"

    } else if (symbol === '1') {
        className = "square-human gray safe"
    } else if (symbol === 'U2') {
        className = "square-human blue"
    } else if (symbol === 'X2') {
        className = "square-human blue caught"
    } else if (symbol === 'U3') {
        className = "square-human green"
    } else if (symbol === 'X3') {
        className = "square-human green caught"
    } else if (symbol === 'U4') {
        className = "square-human purple"
    } else if (symbol === 'X4') {
        className = "square-human purple caught"
    } else if (symbol === 'U5') {
        className = "square-human yellow"
    } else if (symbol === 'X5') {
        className = "square-human yellow caught"
    }
    else {
        className = "square-human white"
    }

    return (
        <div className={className}>
        </div>
    )
};