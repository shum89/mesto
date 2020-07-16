import React from "react";
import logo from "../images/Vector.svg";

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <img className="header__logo" src={logo} alt="Логотип"/>
            </header>
        )
    }

}

export default Header