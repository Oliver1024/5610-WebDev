import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Square(props) {
    let symbol = props.symbol;
    let className = ""

    if (symbol === 'X') {
        className = "square red"

    } else if (symbol === '1') {
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
        className = "square white canclick"
    }
    const dispatch = useDispatch()



    function handleTimeOut() {
        let a = document.getElementsByClassName('canclick');
        for (let i = 0; i < a.length; i++) {
            a[i].style.pointerEvents = "none";
        }
        setTimeout(() => {
            dispatch(
                {
                    type: "click2"
                }
            )
        }, 1000);
    }

    return (
        <div onClick={() => {
            dispatch(
                {
                    type: "click",
                    symbol: symbol,
                    x: props.x,
                    y: props.y
                }
            )
            handleTimeOut();
        }
        } className={className}>
        </div>
    )
};