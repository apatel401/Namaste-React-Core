import React from 'react'
import logo from './assets/ap-logo.png'

import {BiUserCircle, BiSearchAlt} from 'react-icons/bi'
function Header() {
  return (
    <div className='header'>
        <div className='header-inner'>
        <img src={logo} />
        <div className='search'>
        <form>
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit">
        <BiSearchAlt />
        </button>
    </form>
        </div>
        <div className='user'>
            <BiUserCircle />
        </div>
        </div>
    </div>
  )
}

export default Header