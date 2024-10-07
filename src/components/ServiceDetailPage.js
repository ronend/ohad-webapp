import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { individualServices, bundleServices } from '../data/ServicesData';
import './ServiceDetailPage.css';

function ServiceDetailPage() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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

  const nextImage = () => {
    if (service && service.images) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % service.images.length
      );
    }
  };

  const prevImage = () => {
    if (service && service.images) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex - 1 + service.images.length) % service.images.length
      );
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!service) return <div>Loading...</div>;

  return (
    <div className="ServiceDetailPage">
      <div className="service-detail-content">
        <Link to="/services" className="back-button">← Back to services</Link>
        <div className="image-carousel">
          <img 
            src={service.images[currentImageIndex]} 
            alt={service.title} 
            onClick={openModal}
          />
          <button onClick={prevImage} className="carousel-button prev">&#10094;</button>
          <button onClick={nextImage} className="carousel-button next">&#10095;</button>
        </div>
        <div className="service-info">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <p className="price">{service.price}</p>
          {service.bundleDetails && (
            <div className="bundle-details">
              <h2>This bundle includes:</h2>
              <ul>
                {service.bundleDetails.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={copyToClipboard} className="message-button">
            {copied ? "Copied!" : "Message Me On Discord"}
          </button>
        </div>
      </div>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={service.images[currentImageIndex]} alt={service.title} />
            <button className="close-button" onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceDetailPage;
