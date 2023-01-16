import React from 'react';
import { Link } from 'react-router-dom';
import {logo} from '../../assets/ap-logo-1.png'

const Header = () => {
    return (
        <header className="header">
            <div>
                <img src={logo} alt="" />
            </div>
            <nav className="nav-bar custom-row">
                <ul className="nav-list">
                    <li>
                        <Link className="nav-item" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/account">Account</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
