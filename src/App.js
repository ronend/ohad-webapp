import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ShowreelPage from './components/ShowreelPage';
import ServiceDetailPage from './components/ServiceDetailPage';

function NavBar() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/showreel" className={location.pathname === "/showreel" ? "active" : ""}>Showreel</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
          <h1 className="site-title">Video Editing Pro</h1>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/showreel" element={<ShowreelPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
