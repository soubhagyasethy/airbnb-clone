import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src="../images/airbnb-logo.png" alt="airbnb" />
            <div className="login"><img className="login-image" src="../images/login.svg" alt="login-icon"/>Login</div>
        </nav>
    )
}