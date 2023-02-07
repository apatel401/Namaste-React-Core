import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets/ap-logo-1.png";
import { BiFoodMenu, BiCart, BiNotepad, BiCaretDown } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import userConfig from "./Context"

const Header = ({ loggedIn, setLoggedIn }) => {
  const config = useContext(userConfig);
  console.log(config)

  return (
    <header className="h-16 bg-white flex items-center ">
      <div>
        <img src={logo} alt="" />
      </div>
      <nav className="flex justify-end w-5/6 mx-auto my-5">
        <ul className="nav-list list-none flex">
          <li className="flex items-center ml-6 h-16 text-base font-semibold">
            <Link to="/" className=" flex items-center text-black no-underline">
              Home
            </Link>
          </li>
          <li className="flex items-center ml-6 h-16 text-base font-semibold">
            <Link
              to="/about"
              className=" flex items-center text-black no-underline"
            >
              <BiNotepad className="mr-1.5" /> About
            </Link>
          </li>
          <li className="flex items-center ml-6 h-16 text-base font-semibold">
            <Link
              to="/menu"
              className=" flex items-center text-black no-underline"
            >
              <BiFoodMenu className="mr-1.5" /> Menu
            </Link>
          </li>
          <li className="flex items-center ml-6 h-16 text-base font-semibold">
            <Link
              to="/cart"
              className=" flex items-center text-black no-underline"
            >
              <BiCart className="mr-1.5" /> Cart
            </Link>
          </li>
          {loggedIn ? (
            <li className="flex items-center ml-6 h-16 text-base font-semibold">
              <Link
                to="/account"
                className=" flex items-center text-black no-underline"
              >
                <FaRegUser className="mr-1.5" />
                {user}
                <BiCaretDown className="mr-1.5" />{" "}
              </Link>
            </li>
          ) : null}
          {loggedIn ? (
            <li
              className="flex items-center ml-6 h-16 text-base font-semibold"
              onClick={() => setLoggedIn(false)}
            >
              Logout
            </li>
          ) : (
            <li className="flex items-center ml-6 h-16 text-base font-semibold">
              <Link
                to="/login"
                className=" flex items-center text-black no-underline"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
