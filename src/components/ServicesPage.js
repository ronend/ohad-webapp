import React, { useState } from 'react';
import './ServicesPage.css'; // We'll create this CSS file for styling
import { individualServices, bundleServices } from '../data/ServicesData';

function ServiceCard({ title, description, price, imageUrl }) {
  return (
    <div className="service-card">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
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
        {(activeCategory === 'individual' ? individualServices : bundleServices).map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
