import React from 'react'
import { useDispatch } from 'react-redux';
import { removeLocalStorage } from 'components/Store'
import { Link } from 'react-router-dom'

function Navbar() {

    const dispatch = useDispatch()

    return (
        <div className="nav-bar">
            <div className="nav-bar-title">
                <Link to="/" className="btn-navbar btn-home" style={{ textDecoration: 'none' }}>Homepage</Link>
            </div>
            <div className="nav-bar-content">
                <div className="btn-navbar" onClick={() => dispatch({
                    type: "panel-click",
                    active: "true"
                })}>Help</div>
                <Link to="/preparation" className="btn-navbar" id="reset" onClick={() => {
                    window.location.assign("/preparation")
                    removeLocalStorage();
                }}>Reset</Link>
            </div>
        </div>
    )
}

export default Navbar
