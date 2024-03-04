import "./Card.css";

const Card = ({ img, title, companyName, subcategory, year,category,month }) => {
    const MAX_TITLE_LENGTH = 20;
  
    let displayedTitle = title;
    if (title.length > MAX_TITLE_LENGTH) {
      displayedTitle = title.substring(0, MAX_TITLE_LENGTH) + "...";
    }
  
    return (
      <>
        <section className="card">
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