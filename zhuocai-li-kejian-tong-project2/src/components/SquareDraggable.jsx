import React from "react";

export default function Square(props) {
    let symbol = props.symbol;
    let className = ""

    if (symbol === "sheep") {
        className = "square-human purple"
    } else if (symbol === "pig") {
        className = "square-human green"
    }
    else if (symbol === "pig2") {
        className = "square-human green"
    } else if (symbol === "cow") {
        className = "square-human blue"
    } else if (symbol === "chicken") {
        className = "square-human yellow"
    }

    return (
        <div className={className} >
        </div>
    )
};