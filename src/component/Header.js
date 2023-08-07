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
                        <li className="nav__item">Home</li>
                        <li className="nav__item">Offers</li>
                        <li className="nav__item">Help</li>
                        <li className="nav__item">Sign in</li>
                        <li className="nav__item">Cart</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;