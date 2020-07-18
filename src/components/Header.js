import React from "react";
import logo from "../images/Vector.svg";

/**
 * Header component
 * @returns {string} - HTML-markup for a Header
 */
function Header() {

        return (
            <header className="header">
                <img className="header__logo" src={logo} alt="Логотип"/>
            </header>
        )

}

export default Header