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

const Author = ({ handleChange, setAuthor, author }) => {
  const handleAuthorChange = (author) => {
    setAuthor((prevAuthors) => {
      if (prevAuthors.includes(author)) {
        return prevAuthors.filter((prevAuthor) => prevAuthor !== author);
      } else {
        return [...prevAuthors, author];
      }
    });
  };
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title-author-title">Authors</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="checkbox" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <div className="checklistauthorbox">
          {authorData.map(({ value, title }) => (
            <label className="checklistauthor" htmlFor="checklist">
              <div className="checklistinputauthor">
                <input
                  type="checkbox"
                  id="checklist"
                  name="checklist"
                  value={value}
                  className="checklistauthorInput"
                  onChange={() => handleAuthorChange(title)}
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
