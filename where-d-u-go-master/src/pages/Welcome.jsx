import React from 'react'
import { Link } from 'react-router-dom'
import 'css/style.css'
import Panel from 'components/Panel'
import { useDispatch } from 'react-redux';


export default function Welcome() {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <Panel />
            <div className="welcome-page-wrapper">
                <div className="title">
                    <div>WHERE'D U HIDE???</div>
                </div>
                <div className="difficulty-selecter-wrapper ">
                    <span className="difficulty">
                        <Link to="/preparation" className="control" style={{ textDecoration: 'none' }} onClick={() => {
                            dispatch({
                                type: "first-open",
                                active: "true"
                            })
                        }}>
                            <div className="btn-difficulty" >
                                Normal Game</div>
                            <span class="tooltiptext">
                                <div className="tip-wrapper">
                                    Compete with Farmer Jo, see who can find all animals first!
                                </div>
                            </span>
                        </Link>

                    </span>
                    <span className="difficulty">
                        <Link to="/playground-freeplay" className="control" id="free-play" style={{ textDecoration: 'none' }} onClick={() => {
                            dispatch({
                                type: "first-open",
                                active: "true"
                            })
                        }}>
                            <div className="btn-difficulty">Free Play</div>
                            <div class="tooltiptext">
                                <div className="tip-wrapper">
                                    Get a free play with no one competing with you!
                                </div>
                            </div>
                        </Link>
                    </span>
                    <span className="difficulty">
                        <button className="btn btn-help" onClick={() => dispatch({
                            type: "panel-click",
                            active: "true"
                        })}>?</button>
                    </span>
                </div>

            </div>
        </React.Fragment>

    )
}