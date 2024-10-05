import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation();

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-section left">
          <ul className="navbar-links">
            <li>
              <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/services" className={location.pathname.startsWith("/services") ? "active" : ""}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/showreel" className={location.pathname === "/showreel" ? "active" : ""}>Showreel</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-section center">
          <div className="navbar-brand">Video Editing Pro</div>
        </div>
        <div className="navbar-section right"></div>
      </nav>
    </div>
  );
}

export default NavBar;
