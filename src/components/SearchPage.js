import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { individualServices, bundleServices } from '../data/ServicesData';
import './SearchPage.css';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    if (query) {
      const allServices = [...individualServices, ...bundleServices];
      const filteredServices = allServices.filter(service => {
        const title = String(service.title).toLowerCase();
        const description = String(service.description).toLowerCase();
        const searchTerm = query.toLowerCase();
        
        return title.includes(searchTerm) || description.includes(searchTerm);
      });
      setSearchResults(filteredServices);
    }
  }, [location.search]);

  return (
    <div className="SearchPage">
      <h1>Search Results</h1>
      {searchResults.length > 0 ? (
        <div className="search-results">
          {searchResults.map(service => (
            <Link to={`/services/${service.id}`} key={service.id} className="search-result-item">
              <h2>{service.title}</h2>
              <p>{String(service.description)}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p>No results found. Try a different search term.</p>
      )}
    </div>
  );
}

export default SearchPage;
