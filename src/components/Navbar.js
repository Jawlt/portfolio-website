import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        JP
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <Link to="home" smooth={true} duration={1} onClick={toggleMenu}>Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="projects" smooth={true} duration={1} onClick={toggleMenu}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
