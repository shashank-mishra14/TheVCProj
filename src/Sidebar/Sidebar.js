import { useState } from "react";
import Category from "./Category/Category";
import Author from "./Authors/Author";
import SubCategory from "./Category/subcategory";
import "./Sidebar.css";

const Sidebar = ({
  handleCategoryChange,
  handleSubCategoryChange,
  handleYearChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [selectedYear, setSelectedYear] = useState(""); // State for selected year

  const handleYearSelection = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
    handleYearChange(selectedYear); // Notify parent component about the year change
  };

  return (
    <section className="sidebar">
      <div className="logo-container"></div>
      <div className="sidebar-content">
        {/* Dropdown menu for selecting year */}
        <div className="year-dropdown">
          <label htmlFor="year">Select Year:</label>
          <select
            id="year"
            value={selectedYear}
            onChange={handleYearSelection}
          >
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
            setSelectedCategory(category);
            handleCategoryChange(category); // Notify parent component about the category change
            setSelectedYear(""); // Reset selected year when category changes
            setSelectedSubCategory(null); // Reset selected subcategory when category changes
          }}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          selectedSubCategory={selectedSubCategory}
        />

        <Author
          handleChange={(author) => {
            handleSubCategoryChange(author); // Notify parent component about the author change
          }}
        />
      </div>
    </section>
  );
};

export default Sidebar;
