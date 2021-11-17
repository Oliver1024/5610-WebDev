import React from 'react'
import { Link } from 'react-router-dom'
import { removeLocalStorage } from 'components/Store'

function WinPanel() {
    return (
        <div className="win-wrapper">
            <div className="win-wrapper-background">

            </div>
            <div className="win-text-wrapper win-text">
                <p id="con">Congratulations!</p>
                You have found all the animals!
                <Link to="/" className="control-win" id="free-play" onClick={() => {
                    window.location.replace("/");
                    removeLocalStorage();
                }}>
                    <div class="tooltiptext-win">
                        <div className="tip-wrapper-win">
                            Back to Homepage
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default WinPanel
