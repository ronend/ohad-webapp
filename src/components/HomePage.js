import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import placeholderVideo from '../assets/1536315-hd_1920_1080_30fps.mp4'; // You'll need to add this video to your assets
import { clientsData } from '../data/ClientsData';

function HomePage() {
  const animatedSections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    animatedSections.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      animatedSections.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !animatedSections.current.includes(el)) {
      animatedSections.current.push(el);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="HomePage">
      <section className="hero">
        <video autoPlay loop muted className="background-video">
          <source src={placeholderVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Professional Video Editing Services</h1>
          <p>Send the script and voiceover, we'll do the rest.</p>
          <Link to="/showreel" className="cta-button">Watch Our Showreel</Link>
        </div>
        <div className="scroll-down" onClick={scrollToContent}>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </section>

      <section ref={addToRefs} className="features">
        <div className="feature">
          <i className="fas fa-cut"></i>
          <h2>Expert Editing</h2>
          <p>Skilled editors bring your vision to life</p>
        </div>
        <div className="feature">
          <i className="fas fa-magic"></i>
          <h2>Creative Effects</h2>
          <p>Enhance your videos with stunning visuals</p>
        </div>
        <div className="feature">
          <i className="fas fa-clock"></i>
          <h2>Quick Turnaround</h2>
          <p>Fast delivery without compromising quality</p>
        </div>
      </section>

      <section ref={addToRefs} className="testimonials">
        <h2>Worked With</h2>
        <div className="clients-grid">
          {clientsData.map((client) => (
            <div key={client.id} className="client-card">
              <div className="profile-image">
                <img src={client.image} alt={client.name} />
              </div>
              <div className="client-info">
                <h3>{client.name}</h3>
                <p className="subscriber-count">{client.subscribers}</p>
                <p className="view-count">{client.views}</p>
                <div className="youtube-icon">
                  <i className="fab fa-youtube"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={addToRefs} className="about">
        <h2>About Us</h2>
        <p>We are a team of passionate video editors dedicated to helping content creators shine. With years of experience and a keen eye for detail, we transform raw footage into engaging, professional-quality videos that captivate audiences.</p>
      </section>

      <section ref={addToRefs} className="cta">
        <h2>Ready to elevate your content?</h2>
        <Link to="/services" className="cta-button">Get Started</Link>
      </section>
    </div>
  );
}

export default HomePage;
