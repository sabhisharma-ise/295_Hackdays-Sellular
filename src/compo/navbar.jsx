import React, { useState } from 'react';
import logo from '../asserts/logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';
import Intro from './intro';
import ButtonGroup from './Join';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth'});
  }


  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={showMenu ? 'nav-links show' : 'nav-links'}>
      <li><Link to="/" onClick={() => handleLinkClick({Intro})}>Feed</Link></li>
        <li><Link to="./static/index.html/index.html" target={'_blank'}>Sign UP/Log In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
