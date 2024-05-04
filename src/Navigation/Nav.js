import React, { useState } from 'react';
import ReactGA from 'react-ga';
import "./Nav.css";
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

const Nav = ({ handleInputChange }) => {
  const [displayedInput, setDisplayedInput] = useState('');
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
    setDisplayedInput(value);
    
    // Split the input value into individual words
    const words = value.trim().split(/\s+/);
  
    // Replace non-word characters and spaces with empty string for each word
    const sanitizedValue = words.map(word => word.replace(/[^\w]/gi, '')).join(' ');
    setQuery(sanitizedValue);
    
    handleInputChange(sanitizedValue);
    trackInputChange(sanitizedValue);
  };

  return (
    <nav>
      <div className="nav-container">
        <TextField
          className="search-input"
          type="text"
          onChange={handleChange}
          value={displayedInput} 
          placeholder="Enter your search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
