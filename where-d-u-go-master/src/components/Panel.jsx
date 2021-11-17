import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const Panel = () => {
    const click = useSelector((state) => state.click)

    const dispatch = useDispatch()

    return (
        <div className={click.className}>
            <div className="over-layer">
            </div>
            <div className="panel">
                <div className="head">
                    <span className="close" active={click.active} onClick={() => dispatch({
                        type: "panel-click",
                        active: "false"
                    })}>x</span>
                </div>
                <div className="text-wrapper">
                    {window.location.pathname === "/preparation" ?
                        <div className="words">
                            <p>Hide Jo's animals to anywhere on board!</p>
                            <br />
                            <p>Remember:</p>
                            <p>They love to stay together, </p>
                            <p>so can only be dragged together!</p>
                        </div>

                        : ""}
                    {window.location.pathname === "/playground-freeplay" ?
                        <div className="words">
                            <p>Find out every one of your animals!</p>
                            <br />
                            <p>Don't rush</p>
                            <p>No one is competing with you! </p>
                        </div>
                        : ""}
                    {window.location.pathname === "/playground-normal" ?
                        <div className="words">
                            <p>Your animals are all hidden on the left</p>
                            <p>Click the bush to find them!</p>
                            <br />
                            <p>Hurry up!</p>
                            <p>Don't let Jo beat you up!</p>
                        </div> : ""}
                    {window.location.pathname === "/" ?
                        <div className="words">
                            <p>Your animals are hiding themselves up!</p>
                            <p>They must be in the bushes!</p>
                            <p>Let's find them out!</p>
                        </div> : ""}
                </div>
            </div>
        </div>
    )
}
export default Panel
