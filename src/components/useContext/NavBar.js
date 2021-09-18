import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" to="./" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink exact activeClassName="active" to="./login" className="nav-link">
                        Login
                    </NavLink>
                    <NavLink exact activeClassName="active" to="./about" className="nav-link">
                        About
                    </NavLink>
                </div>
            </div>
        </div>
        </nav>
    )
}
