import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ShowreelPage from './components/ShowreelPage';
import ServiceDetailPage from './components/ServiceDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
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
