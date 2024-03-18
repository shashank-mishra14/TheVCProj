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
    title: "RedSeer",
  },
  {
    value: "peakxv",
    title: "Peak XV",
  },
  {
    value: "bcg",
    title: "BCG",
  },
  {
    value: "kpmg",
    title: "KPMG",
  },
  {
    value:"bain",
    title:"Bain & Company"
  },
  {
    value:"yourstory",
    title:"Yourstory"
  },
  {
    value:"matrix",
    title:" Matrix Partners India"
  },
  {
    value:"lattice",
    title:" 1Lattice"
  },
  {
    value:"ey",
    title:"EY"
  },
  {
    value:"temasek",
    title:" Temasek"
  }
  ,
  {
    value:"google",
    title:"Google "
  }
  ,
  {
    value:"bigbasket",
    title:" BigBasket"
  }
  ,
  {
    value:"omidyar",
    title:" Omidyar Network"
  }
  ,
  {
    value:"lumikaifund",
    title:"Lumikai Fund"
  }
  ,
  {
    value:"getvantage",
    title:" GetVantage"
  }
  ,
  {
    value:"ficci",
    title:"FICCI"
  }
  ,
  {
    value:"chirataeventures",
    title:" Chiratae Ventures"
  }
];

const Author = ({ handleChange, selectedAuthors, setSelectedAuthors }) => {
  const [showAllAuthors, setShowAllAuthors] = useState(false);

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

  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title-author-title">Authors</h2>
        <label className="sidebar-label-container">
          <input
            type="checkbox"
            checked={selectedAuthors.length === 0}
            className="checkboxauthorInput"
            onChange={() => setSelectedAuthors([])}
          />
          <span className="checkmark">All</span>
        </label>
        <div className="checklistauthorbox">
          {authorData.slice(0, showAllAuthors ? authorData.length : 10).map(({ value, title }) => (
            <label className="checklistauthor" key={value}>
              <div className="checklistinputauthor">
                <input
                  type="checkbox"
                  value={value}
                  checked={selectedAuthors.includes(title)}
                  className="checklistauthorInput"
                  onChange={() => handleAuthorChange(title)}
                />
              </div>
              {title}
            </label>
          ))}
        </div>
        {!showAllAuthors && authorData.length > 10 && (
          <button className="viewMoreButton" onClick={() => setShowAllAuthors(true)}>
            View More
          </button>
        )}
      </div>
    </>
  );
};

export default Author;
