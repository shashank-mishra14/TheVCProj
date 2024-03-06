import { useState } from "react";
import Category from "./Category/Category";
import Author from "./Authors/Author";
import SubCategory from "./Category/subcategory";
import "./Sidebar.css";

const Sidebar = ({
  handleCategoryChange,
  handleSubCategoryChange,
  handleYearChange,
  handleAuthorChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");

  const handleYearSelection = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
    handleYearChange(selectedYear);
    setSelectedAuthor(""); // Reset selected author when year changes
  };

  return (
    <section className="sidebar">
      <div className="logo-container"></div>
      <div className="sidebar-content">
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
            handleCategoryChange(category);
            setSelectedYear("");
            setSelectedSubCategory(null);
            setSelectedAuthor("");
          }}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          selectedSubCategory={selectedSubCategory}
        />

        <Author
          handleChange={(author) => {
            setSelectedAuthor(author);
            handleAuthorChange(author);
            setSelectedYear("");
            setSelectedSubCategory(null);
            setSelectedCategory([]);
          }}
          selectedAuthor={selectedAuthor}
        />
      </div>
    </section>
  );
};

export default Sidebar;
