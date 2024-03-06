import "./Card.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Card = ({ img, title, companyName, subcategory, year,category,month,link }) => {
    const MAX_TITLE_LENGTH = 60;
  
    let displayedTitle = title;
    if (title.length > MAX_TITLE_LENGTH) {
      displayedTitle = title.substring(0, MAX_TITLE_LENGTH) + "...";
    }
    
    const handleReadMoreClick = () => {
      window.open(link, '_blank');; // Redirect to the link stored in your database
  };

    return (
      <>
        <section className="card" onClick={
              handleReadMoreClick
            }>
          <div className="square">
          <img src={img} alt={title} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{displayedTitle}</h3>
            <div className="card-company">by {companyName}</div>
            <button className="tag-button">{category}</button>
            <button className="tag-button">{subcategory}</button>
            <button className="tag-button">{year}</button>
            <button className="tag-button">{month}</button>
            <hr className="horizontal-line" />
            <button className="readmore-button" >Read More</button>

          </div>
          </div>
          
        </section>
      </>
    );
  };
  
  export default Card;