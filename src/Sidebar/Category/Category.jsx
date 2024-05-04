import styles from "./Category.module.css";
import Input from "../../components/Input";
import React, { useEffect, useState } from "react";
import Checkbox from "@mui/joy/Checkbox";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
const categoriesData = [
  {
    category: "Agritech",
    subCategory: ["Agritech"],
  },
  {
    category: "Climate & Sustainability",
    subCategory: ["Circular Economy", "ESG", "Energy Transition"],
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
      "Logistics Tech",
      "Fintech",
      "Travel Tech",
      "Rehab Tech",
      "Social Commerce",
      "Super Apps",
      "Ride Hailing",
      "Consumer Spending",
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
    subCategory: [
      "Fintech",
      "SME Credit",
      "Lending",
      "Asset based Financing",
      "Venture Debt",
    ],
  },
  {
    category: "Healthcare",
    subCategory: [
      "Mental Health",
      "Chronic Care",
      "Health & Wellness",
      "Preventive Care",
    ],
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
    subCategory: ["Dev tools", "Data Centres"],
  },
  {
    category: "Insurance",
    subCategory: ["Insurtech", "Retail Insurance"],
  },
  {
    category: "Social & Advertising",
    subCategory: ["Adtech", "Social Media", "Short form video"],
  },
  {
    category: "Software",
    subCategory: [
      "Cybersecurity",
      "HRTech",
      "Indian SaaS",
      "Cloud Services",
      "Quality Assurance & Testing",
      "No Code",
      "Information Technology (IT)",
      "Platform as a Service",
      "SaaS",
      "Data & Analytics",
      "BPO",
    ],
  },
  {
    category: "Venture Capital & Private Equity",
    subCategory: [
      "Funding Trends",
      "VC Returns",
      "Termsheets",
      "Sectors Review",
      "Distressed & Insolvency",
      "Startup ecosystem",
    ],
  },
  {
    category: "Hospitality, QSR & Food",
    subCategory: ["Restaurants", "Health Food"],
  },
  {
    category: "Retail",
    subCategory: ["Fashion", "Grocery & Staples", "Retail-Tech"],
  },
  {
    category: "AI & Deeptech",
    subCategory: [
      "Internet of Things (IoT)",
      "AI & Analytics",
      "Automations & Robotics",
      "Gen AI",
    ],
  },
  {
    category: "Industrials, Materials & Manufacturing",
    subCategory: ["Chemicals", "Raw Materials Sourcing", "Packaging"],
  },
  {
    category: "Space & Aerospaces",
    subCategory: ["Spacetech", "Drone tech"],
  },
  {
    category: "IT & Outsourcing",
    subCategory: ["Global Services Delivery"],
  },
];
function Category({
  selectedCategory,
  setSelectedCategory,
  setSelectedSubCategory,
  selectedSubCategory,
}) {
  const [showAll, setShowAll] = useState(false);
  const [showAllSubcategories, setShowAllSubcategories] = useState(false);
  const [categorySearchQuery, setCategorySearchQuery] = useState("");
  const [subcategorySearchQuery, setSubcategorySearchQuery] = useState("");
  const [categorySearchActive, setCategorySearchActive] = useState(false);
  const [subcategorySearchActive, setSubcategorySearchActive] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategories) => {
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
    setSelectedSubCategory((prevSubCategory) => {
      if (prevSubCategory.includes(subcategory)) {
        return prevSubCategory.filter(
          (prevSubcategory) => prevSubcategory !== subcategory
        );
      } else {
        return [...prevSubCategory, subcategory];
      }
    });
  };

  const handleCategorySearchChange = (event) => {
    const query = event.target.value;
    setCategorySearchQuery(query);
  };

  const handleSubcategorySearchChange = (event) => {
    const query = event.target.value;
    setSubcategorySearchQuery(query);
  };

  const clearCategorySearch = () => {
    setCategorySearchQuery("");
    setCategorySearchActive(false);
  };

  const clearSubcategorySearch = () => {
    setSubcategorySearchQuery("");
    setSubcategorySearchActive(false);
  };

  const filteredCategories = categoriesData.filter((category) =>
    category.category.toLowerCase().includes(categorySearchQuery.toLowerCase())
  );

  const filteredSubcategories = categoriesData
    .flatMap(({ subCategory }) => subCategory)
    .filter((subcategory) =>
      subcategory.toLowerCase().includes(subcategorySearchQuery.toLowerCase())
    );

  const categoriesToDisplay = showAll
    ? filteredCategories
    : filteredCategories.slice(0, 10);
  const subcategoriesToDisplay = showAllSubcategories
    ? filteredSubcategories
    : filteredSubcategories.slice(0, 10);

  return  (
    <div className={styles.categories}>
      <div className={styles.checklistMain}>
        <h2 className={styles.heading}>Categories</h2>
        <div className={`search-bar ${categorySearchActive ? 'active' : ''}`}>
          <div className="search-icon" onClick={() => setCategorySearchActive(true)}>
            <SearchIcon />
          </div>
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search categories"
              value={categorySearchQuery}
              onChange={handleCategorySearchChange}
              className={`search-input-author ${categorySearchActive ? 'active' : ''}`}
            />
            {categorySearchQuery && categorySearchActive && (
              <div className="close-icon" onClick={clearCategorySearch}>
                <CloseIcon />
              </div>
            )}
          </div>
        </div>
        {categoriesToDisplay.map(({ category }) => (
          <label key={category} className={styles.checkboxLabel}>
            <div className={styles.checklistinput}>
              <Checkbox
                type="checkbox"
                label={category}
                name="category"
                size="lg"
                value={category}
                checked={selectedCategory.includes(category)}
                onChange={() => handleCategoryClick(category)}
                className={styles.checkboxcategory}
              />
            </div>
            <span className={styles.catFont}> </span>
          </label>
        ))}
        {!showAll && filteredCategories.length > 10 && (
          <button
            className={styles.viewMoreButton}
            onClick={() => setShowAll(true)}
          >
            View More
          </button>
        )}
      </div>
      <div className={styles.subCategoryList}>
        <h2 className={styles.heading}>Subcategories</h2>
        <div className={`search-bar ${subcategorySearchActive ? 'active' : ''}`}>
          <div className="search-icon" onClick={() => setSubcategorySearchActive(true)}>
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search subcategories"
            value={subcategorySearchQuery}
            onChange={handleSubcategorySearchChange}
            className={`search-input-author ${subcategorySearchActive ? 'active' : ''}`}
          />
          {subcategorySearchQuery && subcategorySearchActive && (
            <div className="close-icon" onClick={clearSubcategorySearch}>
              <CloseIcon />
            </div>
          )}
        </div>
        {subcategoriesToDisplay.map((subcategory) => (
          <label key={subcategory} className={styles.checkboxLabel}>
            <div className={styles.checklistinput}>
              <Checkbox
                type="checkbox"
                value={subcategory}
                size="lg"
                label={subcategory}
                onChange={() => handleSubcategoryClick(subcategory)}
                checked={selectedSubCategory.includes(subcategory)}
                className={styles.checkboxcategory}
              />
            </div>
          </label>
        ))}
        {!showAllSubcategories && filteredSubcategories.length > 10 && (
          <button
            className={styles.viewMoreButton}
            onClick={() => setShowAllSubcategories(true)}
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
}

export default Category;