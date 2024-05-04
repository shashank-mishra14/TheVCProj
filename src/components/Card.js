import React from "react";
import "./Card.css";

const Card = ({
  img,
  title,
  companyName,
  subcategory,
  year,
  category,
  month,
  link,
  toggleModal,
  submitted,
}) => {
  const MAX_TITLE_LENGTH = 40;

  let displayedTitle = title;

  if (title.length > MAX_TITLE_LENGTH) {
    displayedTitle = title.substring(0, MAX_TITLE_LENGTH) + "...";
  }

  const MAX_CATEGORY_LENGTH = 15;
  let displayedCategory = subcategory;
  if (subcategory.length > MAX_CATEGORY_LENGTH) {
    let lastSpaceIndex = MAX_CATEGORY_LENGTH;
    for (let i = MAX_CATEGORY_LENGTH - 1; i >= 0; i--) {
      if (subcategory[i] === " ") {
        lastSpaceIndex = i;
        break;
      }
    }
    displayedCategory = subcategory.substring(0, lastSpaceIndex) + "...";
  }

  const handleReadMoreClick = () => {
    if (submitted) {
      // If the details are submitted, navigate to the URL
      window.location.assign(link);
    } else {
      // If the modal details are not submitted, toggle the modal and pass the link
      toggleModal(true, link);
    }
  };

  return (
    <section className="card" onClick={handleReadMoreClick}>
      <div className="square">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{displayedTitle}</h3>
          <div className="card-company">by {companyName}</div>
          <button className="tag-button">{category}</button>
          <button className="tag-button">{displayedCategory}</button>
          <button className="tag-button">{year}</button>
          {/* <button className="tag-button">{month}</button> */}
          <div className="card-adjustment">
            <hr className="horizontal-line" />
            <button className="readmore-button">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
