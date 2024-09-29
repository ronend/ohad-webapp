import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { individualServices, bundleServices } from '../data/ServicesData';
import './ServiceDetailPage.css';

function ServiceDetailPage() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const allServices = [...individualServices, ...bundleServices];
    const foundService = allServices.find(s => s.id === parseInt(id));
    setService(foundService);
  }, [id]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("Duacky").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!service) return <div>Loading...</div>;

  return (
    <div className="ServiceDetailPage">
      <Link to="/services" className="back-button">← Back to services</Link>
      <div className="image-carousel">
        {/* Placeholder for image carousel */}
        <img src={service.imageUrl} alt={service.title} />
      </div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <p className="price">{service.price}</p>
      <button onClick={copyToClipboard} className="message-button">
        {copied ? "Copied!" : "Message Me On Discord"}
      </button>
    </div>
  );
}

export default ServiceDetailPage;
