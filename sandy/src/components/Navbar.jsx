import React from 'react'
import {Link} from "react-scroll"
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul className='navbar-contents-container'>
        <Link to="play-game-section" smooth={true} duration={800}>Play Games</Link>
        <Link >Register</Link>
        <Link>Chat</Link>
        <Link>Games</Link>
      </ul>
    </div>
  )
}

export default Navbar