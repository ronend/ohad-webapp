import React from 'react';
import './ShowreelPage.css';

function ShowreelPage() {
  return (
    <div className="ShowreelPage">
      <h1>Our Showreel</h1>
      <div className="video-container">
        {/* Replace the src with your actual showreel video URL */}
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/your-video-id" 
          title="Showreel" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      <div className="showreel-description">
        <p>Check out our latest work and see what we can do for you!</p>
        <p>This showreel highlights our best video editing, animation, and visual effects projects.</p>
      </div>
    </div>
  );
}

export default ShowreelPage;
