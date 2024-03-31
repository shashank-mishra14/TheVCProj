import React, { useState } from 'react';
import ReactGA from 'react-ga';
import "./Nav.css";

const Nav = ({ handleInputChange }) => {
  const [query, setQuery] = useState('');

  const trackInputChange = (value) => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'Input Change',
      label: 'Search Input Change',
      value: value
    });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    handleInputChange(value); // Pass the query to the parent component
    trackInputChange(value);
  };

  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleChange}
          value={query}
          placeholder="Enter your search"
        />
      </div>
    </nav>
  );
};

export default Nav;
