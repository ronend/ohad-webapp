import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

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
          <div className="navbar-brand">Creative Cuts</div>
        </div>
        <div className="navbar-section right">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
