import "./Card.css";
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Card = ({ img, title, companyName, subcategory, year, category, month, link }) => {
  const MAX_TITLE_LENGTH = 60;
    const MIN_TITLE_LENGTH = 20;

    let displayedTitle = title;

    // Check if the length of the title is less than 20 characters
    if (title.length < MIN_TITLE_LENGTH) {
        const spacesToAdd = MIN_TITLE_LENGTH - title.length + 10;
        displayedTitle = (
            <React.Fragment>
                {title}
                {' '.repeat(spacesToAdd)}
            </React.Fragment>
        );
    } else if (title.length > MAX_TITLE_LENGTH) {
        displayedTitle = title.substring(0, MAX_TITLE_LENGTH) + "...";
    }


  const MAX_CATEGORY_LENGTH = 15;
  let displayedCategory = subcategory;
  if (subcategory.length > MAX_CATEGORY_LENGTH) {
      // Find the index of the last space within the maximum length
      let lastSpaceIndex = MAX_CATEGORY_LENGTH;
      for (let i = MAX_CATEGORY_LENGTH - 1; i >= 0; i--) {
          if (subcategory[i] === " ") {
              lastSpaceIndex = i;
              break;
          }
      }

      // Truncate at the last space index or simply at the maximum length
      displayedCategory = subcategory.substring(0, lastSpaceIndex) + "...";
  }

  const handleReadMoreClick = () => {
      window.open(link, '_blank'); // Redirect to the link stored in your database
  };

  return (
      <>
          <section className="card" onClick={handleReadMoreClick}>
              <div className="square">
                  <img src={img} alt={title} className="card-img" />
                  <div className="card-details">
                      <h3 className="card-title">{displayedTitle}</h3>
                      <div className="card-company">by {companyName}</div>
                      <button className="tag-button">{category}</button>
                      <button className="tag-button">{displayedCategory}</button>
                      <button className="tag-button">{year}</button>
                      <button className="tag-button">{month}</button>
                      <div className="card-adjustment">
                      <hr className="horizontal-line" />
                      <button className="readmore-button">Read More</button>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
};

export default Card;