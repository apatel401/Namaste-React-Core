import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import {logo} from '../../assets/ap-logo-1.png'
import { BiFoodMenu, BiCart, BiNotepad, BiCaretDown} from 'react-icons/bi';
import {FaRegUser} from 'react-icons/fa'
import useLocalStorage from '../utils/useLocalStorage';
const Header = ({loggedIn, setLoggedIn}) => {
    const user = useLocalStorage();
    return (
        <header className="flex font-medium">
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
                        <Link to="/account"><FaRegUser />{user}<BiCaretDown /> </Link>
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
