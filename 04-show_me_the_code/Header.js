import React from 'react'
import logo from './assets/ap-logo-1.png'

import {BiUserCircle, BiSearchAlt} from 'react-icons/bi'
function Header() {
  return (
    <div className='header'>
        <div className='header-inner'>
        <img src={logo} />
        <ul className='nav-list'>
<li>Home</li>
<li>About</li>
<li>Cart</li>
        </ul>
        </div>
    </div>
  )
}

export default Header