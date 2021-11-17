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
                <div className="btn-navbar" id="reset" onClick={() => {
                    removeLocalStorage();
                    window.location.reload();
                }}>Reset</div>
            </div>
        </div>
    )
}

export default Navbar
