import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {logo} from '../../assets/ap-logo-1.png'
import { BiFoodMenu, BiCart, BiAccessibility, BiNotepad } from 'react-icons/bi';
import {FaRegUser} from 'react-icons/fa'
const Header = ({loggedIn, setLoggedIn}) => {
    return (
        <header className="header">
            <div>
                <img src={logo} alt="" />
            </div>
            <nav className="nav-bar custom-row">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about"><BiNotepad /> About</Link>
                    </li>
                    <li  className="nav-item">
                        <Link to="/menu"><BiFoodMenu /> Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart"><BiCart /> Cart</Link>
                    </li>
                    {loggedIn ? (<li className="nav-item">
                        <Link to="/account"><FaRegUser /> Account</Link>
                    </li>) : null}
                    {loggedIn ? (<li className="nav-item" onClick={() => setLoggedIn(false)}>
                    Logout
                    </li>) : (<li className="nav-item">
                    <Link to="/login">Login</Link>
                    </li>)}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
