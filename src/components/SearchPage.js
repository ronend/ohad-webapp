import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { individualServices, bundleServices } from '../data/ServicesData';
import { commonWords } from '../data/commonWords';
import './SearchPage.css';
import './ServicesPage.css'; // Import the ServicesPage styles

function ServiceCard({ id, title, description, price, images }) {
  const renderDescription = (description) => {
    return { __html: description };
  };

  return (
    <Link to={`/services/${id}`} className="service-card">
      <div className="card-image">
        <img src={images[0]} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={renderDescription(description)} />
        <p className="price">{price}</p>
      </div>
    </Link>
  );
}

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [spellCheckSuggestion, setSpellCheckSuggestion] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    if (query) {
      performSearch(query);
    }
  }, [location.search]);

  const performSearch = (query) => {
    const allServices = [...individualServices, ...bundleServices];
    const filteredServices = allServices.filter(service => {
      const title = String(service.title).toLowerCase();
      const description = String(service.description).toLowerCase();
      const searchTerm = query.toLowerCase();
      
      return title.includes(searchTerm) || description.includes(searchTerm);
    });

    setSearchResults(filteredServices);

    // Simple spell check
    if (filteredServices.length === 0) {
      const words = query.toLowerCase().split(' ');
      const correctedWords = words.map(word => {
        if (!commonWords.includes(word)) {
          const suggestion = commonWords.find(commonWord => 
            commonWord.startsWith(word) || 
            levenshteinDistance(word, commonWord) <= 2
          );
          return suggestion || word;
        }
        return word;
      });

      const correctedQuery = correctedWords.join(' ');
      if (correctedQuery !== query.toLowerCase()) {
        setSpellCheckSuggestion(correctedQuery);
      } else {
        setSpellCheckSuggestion(null);
      }
    } else {
      setSpellCheckSuggestion(null);
    }
  };

  const handleCorrectedSearch = () => {
    if (spellCheckSuggestion) {
      navigate(`/search?q=${encodeURIComponent(spellCheckSuggestion)}`);
    }
  };

  // Levenshtein distance function for finding similar words
  const levenshteinDistance = (a, b) => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }

    return matrix[b.length][a.length];
  };

  return (
    <div className="SearchPage ServicesPage">
      <h1>Search Results</h1>
      {spellCheckSuggestion && (
        <div className="spell-check-suggestion">
          <p>Did you mean: <strong>{spellCheckSuggestion}</strong>?</p>
          <button onClick={handleCorrectedSearch}>Search with correction</button>
        </div>
      )}
      {searchResults.length > 0 ? (
        <div className="service-grid">
          {searchResults.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      ) : (
        <p>No results found. Try a different search term.</p>
      )}
    </div>
  );
}

export default SearchPage;
