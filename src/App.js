import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ShowreelPage from './components/ShowreelPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import SearchPage from './components/SearchPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/showreel" element={<ShowreelPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
