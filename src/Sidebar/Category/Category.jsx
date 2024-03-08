import styles from "./Category.module.css";
import Input from "../../components/Input";
import React, { useEffect, useState } from "react";

const categoriesData = [
  {
    category: "Agritech",
    subCategory: ["Agritech"],
  },
  {
    category: "Climate & Sustainability",
    subCategory: ["Circular Economy"],
  },
  {
    category: "Consumer Tech",
    subCategory: [
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
    subCategory: ["Creator Economy"],
  },
  {
    category: "Empowerment",
    subCategory: ["Blue Collar Workforce"],
  },
  {
    category: "EV & Renewables",
    subCategory: ["BatteryTech", "EV"],
  },
  {
    category: "Financial Services",
    subCategory: ["Fintech", "SME Credit"],
  },
  {
    category: "Healthcare",
    subCategory: ["Mental Health", "Chronic Care"],
  },
  {
    category: "Human Resources",
    subCategory: ["Talent Trends"],
  },
  {
    category: "India Stack",
    subCategory: ["DPI"],
  },
  {
    category: "Infrastructure & Security",
    subCategory: ["Dev tools"],
  },
  {
    category: "Insurance",
    subCategory: ["Insurtech"],
  },
  {
    category: "Social & Advertising",
    subCategory: ["Adtech", "Social Media", "Short form video (SFV)"],
  },
  {
    category: "Software",
    subCategory: ["Cybersecurity", "HRTech", "Indian SaaS"],
  },
  {
    category: "Venture Capital & Private Equity",
    subCategory: ["Funding Trends", "VC Returns", "Termsheets"],
  },
];
function Category({
  handleChange,
  selectedCategory,
  setSelectedCategory,
  setSelectedSubCategory,
  selectedSubCategory
}) {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((prevCategory) => prevCategory !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubCategory((prevSubCategory) => {
      if (prevSubCategory.includes(subcategory)) {
        return prevSubCategory.filter((prevSubcategory) => prevSubcategory !== subcategory);
      } else {
        return [...prevSubCategory, subcategory];
      }
    });
  };

  const handleViewMoreClick = () => {
    setShowAllCategories(true);
  };

  return (
    <div className={styles.categories}>
      <span className={styles.filterLabel}>Categories</span>
      {categoriesData.map(({ category, subCategory }) => (
        <div key={category} className={styles.checklistMain}>
          <label className={styles.checkboxLabel}>
            <div className={styles.checklistinput}>
              <input
                type="checkbox"
                name="category"
                value={category}
                checked={selectedCategory.includes(category)}
                onChange={() => handleCategoryClick(category)}
              />
            </div>
            <span> {category}</span>
          </label>
          <div className={styles.subCategory}>
            <span className={styles.subCategoryHeading}>Subcategories</span>
            {subCategory.map((subcategory) => (
              <label key={subcategory} className={styles.checkboxLabel}>
                <div className={styles.checklistinput}>
                  <input
                    type="checkbox"
                    value={subcategory}
                    onChange={() => handleSubcategoryClick(subcategory)}
                    checked={selectedSubCategory.includes(subcategory)}
                  />
                </div>
                <span> {subcategory}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      {!showAllCategories && categoriesData.length > 5 && (
        <button className={styles.viewMoreButton} onClick={handleViewMoreClick}>
          View More
        </button>
      )}
    </div>
  );
}

export default Category;