import React from "react";
import { ReactDOM } from "react-dom/client";
import { Link } from "react-router-dom";
import {CDN_URL} from "../utils/cons";
const Header = () => {
    return (
        <header>
            <div  className="container">
                <div className="logo">
                    <img
                        src={CDN_URL}
                        alt="Swigi's Logo"
                    />
                </div>
                <nav className="nav">
                    <ul className="nav__items">
                        <li className="nav__item"><Link to={"/"}>Home</Link></li>
                        <li className="nav__item">Offers</li>
                        <li className="nav__item"><Link to={"/support"}>Help</Link></li>
                        <li className="nav__item">Sign in</li>
                        <li className="nav__item">Cart</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;