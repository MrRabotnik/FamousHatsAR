import React from "react"
import '../styles/header.css'

function Header() {
    return (
        <header>
            <div className="menu_icon_container"></div>
            <div className="header_text">
                <img src="public/hbo_max_logo.png" alt="" />
                <h2>FAMOUS HATS</h2>
            </div>
        </header>
    );
}


export default Header