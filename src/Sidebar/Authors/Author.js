import Input from "../../components/Input";
import "./Author.css";
import React, { useState } from "react";
import Checkbox from "@mui/joy/Checkbox";
// import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';


const authorData = [
  {id:1,
    value: "bain",
    title: "Bain & Company",
  },
  {
    id:2,
    value: "ey",
    title: "EY",
  },
  {
    id:3,
    value: "redseer",
    title: "RedSeer",
  },
  {
    id:4,
    value: "bcg",
    title: "BCG",
  },
  {
    id:5,
    value: "kearney",
    title: "Kearney",
  },
  {
    id:6,
    value: "lattice",
    title: " 1Lattice",
  },
  {
    id:7,
    value: "ficci",
    title: "FICCI",
  },
  {
    id:8,
    value: "avenduscapital",
    title: "Avendus Capital",
  },
  {
    id:9,
    value: "inc42",
    title: "Inc42",
  },
  {
    id:10,
    value: "yourstory",
    title: "Yourstory",
  },
  {
    id:11,
    value: "elevationcapital",
    title: "Elevation Capital",
  },

  {
    id:12,
    value: "blumeventures",
    title: "Blume Ventures",
  },

  {
    id:13,
    value: "kalaaricapital",
    title: "Kalaari Capital",
  },
  {
    id:14,
    value: "dsgconsumerparteners",
    title: "DSG Consumer Parteners",
  },
  {
    id:15,
    value: "eximusventures",
    title: "Eximus Ventures",
  },
  {
    id:16,
    value: "strideventures",
    title: "Stride Ventures",
  },
  {
    id:17,
    value: "temasek",
    title: " Temasek",
  },
  {
    id:18,
    value: "matrixpartnersindia",
    title: "Matrix Partners India",
  },
  {
    id:19,
    value: "chirataeventures",
    title: " Chiratae Ventures",
  },

  {
    id:20,
    value: "peakxv",
    title: "Peak XV",
  },
  {
    id:21,
    value: "lumikaifund",
    title: "Lumikai Fund",
  },
  {
    id:22,
    value: "google",
    title: "Google ",
  },
  {
    id:23,
    value: "getvantage",
    title: " GetVantage",
  },
  {
    id:24,
    value: "tracxn",
    title: "Tracxn",
  },
];

const Author = ({ handleChange, selectedAuthors, setSelectedAuthors }) => {
  const [showAllAuthors, setShowAllAuthors] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false)
  const handleAuthorChange = (authorValue) => {
    setSelectedAuthors((prevAuthors) => {
      const isSelected = prevAuthors.includes(authorValue);

      if (isSelected) {
        return prevAuthors.filter((author) => author !== authorValue);
      } else {
        return [...prevAuthors, authorValue];
      }
    });
  };

 

  const filteredAuthors = authorData.filter((author) =>
    author.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const authorsToDisplay = showAllAuthors ? filteredAuthors : filteredAuthors.slice(0, 10);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchActive(false);
  };
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title-author-title">Authors</h2>
        <div className={`search-bar ${searchActive ? 'active' : ''}`}>
          <div className="search-icon" onClick={() => setSearchActive(true)}>
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search authors"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input-author"
          />
          {searchActive && (
            <div className="close-icon" onClick={() => setSearchActive(false)}>
              <CloseIcon />
            </div>
          )}
        </div>
        <div className="checklistauthorbox">
          {authorsToDisplay.map(({ value, title }) => (
            <label className="checklistauthor" key={value}>
              <div className="checklistinputauthor">
                <Checkbox
                  label={title}
                  type="checkbox"
                  size="lg"
                  value={value}
                  checked={selectedAuthors.includes(title)}
                  className="checklistauthorInput"
                  onChange={() => handleAuthorChange(title)}
                />
              </div>
            </label>
          ))}
        </div>
        {!showAllAuthors && filteredAuthors.length > 10 && (
          <button
            className="viewMoreButton"
            onClick={() => setShowAllAuthors(true)}
          >
            View More
          </button>
        )}
      </div>
    </>
  );
};

export default Author;