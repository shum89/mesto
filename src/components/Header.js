import React from "react";
import logo from "../images/Vector.svg";

/**
 * Header component
 * @return {JSX.Element}
 */
function Header() {

        return (
            <header className="header">
                <img className="header__logo" src={logo} alt="Логотип"/>
            </header>
        )

}

export default Header