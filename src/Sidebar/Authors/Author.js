import Input from "../../components/Input";
import "./Author.css";
import React, { useState } from "react";

const authorData = [
  {
    value: "elevationcapital",
    title: "Elevation Capital",
  },
  {
    value: "tracxn",
    title: "Tracxn",
  },
  {
    value: "blumeventures",
    title: "Blume Ventures",
  },
  {
    value: "redseer",
    title: "Red Seer",
  },
  {
    value: "peakxv",
    title: "Peak XV",
  },
  {
    value: "kaalari",
    title: "Kaalari Capital",
  },
];

const Author = ({ handleChange, selectedAuthors, setSelectedAuthors }) => {
  const handleAuthorChange = (authorValue) => {
    setSelectedAuthors((prevAuthors) => {
      console.log(prevAuthors)
      // Check if the authorValue is already included in selectedAuthors
      const isSelected = prevAuthors.includes(authorValue);
  
      if (isSelected) {
        // If author is already selected, remove it
        return prevAuthors.filter((author) => author !== authorValue);
      } else {
        // If author is not selected, add it
        return [...prevAuthors, authorValue];
      }
    });
  };
  

  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title-author-title">Authors</h2>
        <label className="sidebar-label-container">
          <input
            type="checkbox"
            checked={selectedAuthors.length === 0}
            onChange={() => setSelectedAuthors([])}
          />
          <span className="checkmark"></span>All
        </label>
        <div className="checklistauthorbox">
          {authorData.map(({ value, title }) => (
            <label className="checklistauthor" key={value}>
              <div className="checklistinputauthor">
                <input
                  type="checkbox"
                  value={value}
                  checked={selectedAuthors.includes(value)}
                  className="checklistauthorInput"
                  onChange={() => handleAuthorChange(value)}
                />
              </div>
              {title}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Author;