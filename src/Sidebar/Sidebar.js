import { useState } from "react";
import Category from "./Category/Category";
import Author from "./Authors/Author";
import SubCategory from "./Category/subcategory";
import "./Sidebar.css";

const Sidebar = ({
  handleChange,
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  setAuthor,
  author, setSelectedYear,
  selectedYear
}) => {
   // State for selected year

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value); // Update selected year state
  };

  return (
    <section className="sidebar">
      <div className="logo-container"></div>
      <div className="sidebar-content">
        {/* Dropdown menu for selecting year */}
        <div className="year-dropdown">
          <label htmlFor="year" className="yearSelect">Select Year:</label>
          <select id="year" value={selectedYear} onChange={handleYearChange}>
            <option value="">Select</option>
            {[...Array(2024 - 2019 + 1).keys()].map((index) => (
              <option key={index} value={2019 + index}>
                {2019 + index}
              </option>
            ))}
          </select>
        </div>

        <Category
          handleChange={(category) => {
            handleChange(category);
            setSelectedYear(""); // Reset selected year when category changes
            setSelectedCategory(category);
            setSelectedSubCategory(null); // Reset selected subcategory when category changes
          }}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          selectedSubCategory={selectedSubCategory}
        />

        <Author handleChange={handleChange} setAuthor={setAuthor} author={author} />
      </div>
    </section>
  );
};

export default Sidebar;
