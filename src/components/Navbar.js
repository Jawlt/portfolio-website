import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Projects" activeClassName="active-link">Projects</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Skills" activeClassName="active-link">Skills</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/About" activeClassName="active-link">About</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Contact" activeClassName="active-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
