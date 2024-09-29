import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css'; // We'll create this CSS file for styling
import { individualServices, bundleServices } from '../data/ServicesData';

function ServiceCard({ id, title, description, price, images }) {
  return (
    <Link to={`/services/${id}`} className="service-card">
      <div className="card-image">
        <img src={images[0]} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price">{price}</p>
      </div>
    </Link>
  );
}

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('individual');

  return (
    <div className="ServicesPage">
      <div className="category-switch">
        <button 
          className={activeCategory === 'individual' ? 'active' : ''}
          onClick={() => setActiveCategory('individual')}
        >
          Individual
        </button>
        <button 
          className={activeCategory === 'bundles' ? 'active' : ''}
          onClick={() => setActiveCategory('bundles')}
        >
          Bundles
        </button>
      </div>
      <div className="service-grid">
        {(activeCategory === 'individual' ? individualServices : bundleServices).map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
