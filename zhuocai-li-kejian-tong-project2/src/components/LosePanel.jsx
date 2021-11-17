import React from 'react'
import { Link } from 'react-router-dom'
import { removeLocalStorage } from 'components/Store'

function LosePanel() {
    return (
        <div className="win-wrapper">
            <div className="win-wrapper-background">

            </div>
            <div className="win-text-wrapper win-text">
                <p id="con">Oh no!</p>
                <p>Bo the Farmer has found</p>
                all his animals already!
                <Link to="/" className="control-win" id="free-play" onClick={() => {
                    window.location.replace("/");
                    removeLocalStorage();
                }}>
                    <div class="tooltiptext">
                        <div className="tip-wrapper">
                            Back to Homepage
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default LosePanel
