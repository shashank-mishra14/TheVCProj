import  "./Category.css";
import Input from "../../components/Input";
import React, { useEffect, useState } from "react";



const categoriesData = [
  {
    category: "Agritech",
    subcategories: ["Agritech"],
  },
  {
    category: "Climate & Sustainability",
    subcategories: ["Circular Economy"],
  },
  {
    category: "Consumer Tech",
    subcategories: [
      "Gaming",
      "Marketplaces",
      "Edtech",
      "Indian Consumer",
      "Beauty & Personal care",
      "Ecommerce",
      "Foodtech",
      "B2B",
      "D2C",
    ],
  },
  {
    category: "Content & Media",
    subcategories: ["Creator Economy"],
  },
  {
    category: "Employment",
    subcategories: ["Blue Collar Workforce"],
  },
  {
    category: "EV & Renewables",
    subcategories: ["BatteryTech", "EV"],
  },
  {
    category: "Financial Services",
    subcategories: ["Fintech", "SME Credit"],
  },
  {
    category: "Healthcare",
    subcategories: ["Mental Health", "Chronic Care"],
  },
  {
    category: "Human Resources",
    subcategories: ["Talent Trends"],
  },
  {
    category: "India Stack",
    subcategories: ["DPI"],
  },
  {
    category: "Infrastructure & Security",
    subcategories: ["Dev tools"],
  },
  {
    category: "Insurance",
    subcategories: ["Insurtech"],
  },
  {
    category: "Social & Advertising",
    subcategories: ["Adtech", "Social Media", "Short form video (SFV)"],
  },
  {
    category: "Software",
    subcategories: ["Cybersecurity", "HRTech", "Indian SaaS"],
  },
  {
    category: "Venture Capital & Private Equity",
    subcategories: ["Funding Trends", "VC Returns", "Termsheets"],
  },
];
function Category({ handleChange }) {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);


  const handleCategoryClick = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter(
          (prevCategory) => prevCategory !== category
        );
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategories((prevSubcategories) => {
      if (prevSubcategories.includes(subcategory)) {
        return prevSubcategories.filter(
          (prevSubcategory) => prevSubcategory !== subcategory
        );
      } else {
        return [...prevSubcategories, subcategory];
      }
    });
  };
    
  const handleViewMoreClick = () => {
    setShowAllCategories(true);
  };
  
  return (
    
      <div className="categories">
      <span className="filterlabel">Categories</span>
      {categoriesData
        .slice(0, showAllCategories ? categoriesData.length : 5)
        .map(({ category, subcategories }) => (
          <div key={category}>
            <label className="checkboxLabel">
              <input
                type="checkbox"
                name="category"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryClick(category)}
              />
              <span> {category}</span>
            </label>
          </div>
        ))}

      {!showAllCategories && categoriesData.length > 5 && (
        <button
          className="viewMoreButton"
          onClick={handleViewMoreClick}
        >
          View More
        </button>
      )}

      {selectedCategories.length > 0 && (
        <div className="subcategories">
          <span className="filterLabel">Subcategories</span>
          {categoriesData
            .filter((cat) => selectedCategories.includes(cat.category))
            .map((cat) =>
              cat.subcategories.map((subcategory) => (
                <label key={subcategory} className="checkboxLabel">
                  <input
                    type="checkbox"
                    value={subcategory}
                    onChange={() => handleSubcategoryClick(subcategory)}
                  />
                  <span> {subcategory}</span>
                </label>
              ))
            )}
        </div>
      )}
    </div>
  );
}

export default Category;