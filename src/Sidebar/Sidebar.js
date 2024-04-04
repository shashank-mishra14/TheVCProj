import { useState } from "react";
import Category from "./Category/Category";
import Author from "./Authors/Author";
import SubCategory from "./Category/subcategory";
import "./Sidebar.css";
import Checkbox from '@mui/joy/Checkbox';

const Sidebar = ({
  handleChange,
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  selectedAuthors,
  setSelectedAuthors,
  setAuthor,
  author,
  setSelectedYear,
  selectedYear
}) => {
  const [selectedYears, setSelectedYears] = useState([]); // State to store selected years
  // State to control sidebar visibility
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedYears((prevSelectedYears) => {
      if (checked) {
        return [...prevSelectedYears, value];
      } else {
        return prevSelectedYears.filter((year) => year !== value);
      }
    });
    handleChange(event); // Call handleChange to update selected years
  };

  return (
    <section className="sidebar">
      {/* Toggle button only visible on mobile devices */}
      <button className="toggle-button" onClick={toggleSidebar}>Filter Reports</button>
      {/* Sidebar content */}
      <div className={`sidebar-content ${sidebarVisible ? 'visible' : ''}`}>
        <div className="logo-container">
          Filter your reports
          <br />
        </div>
        {/* Checklist for selecting years */}
        <div className="year-checklist">
          <label className="yearSelect">Select Year</label>
          {[...Array(2024 - 2019 + 1).keys()].map((index) => (
            <div role="group" className=" container-yearlist" key={index}>
              <Checkbox
              size="sm"
              label={2019 + index}
                type="checkbox"
                id={`year-${2019 + index}`}
                name="year"
                value={2019 + index}
                checked={selectedYears.includes(`${2019 + index}`)}
                onChange={handleCheckboxChange}
                className="checkbpox-yearinput"
              />

            </div>
          ))}
        </div>
        <Author
          handleChange={handleChange}
          setAuthor={setAuthor}
          author={author}
          selectedAuthors={selectedAuthors}
          setSelectedAuthors={setSelectedAuthors}
        />
        <Category
          handleChange={(category) => {
            handleChange(category);
            setSelectedYears([]); // Reset selected years when category changes
            setSelectedCategory(category);
            setSelectedSubCategory(null); // Reset selected subcategory when category changes
          }}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          selectedSubCategory={selectedSubCategory}
        />
      </div>
    </section>
  );
};

export default Sidebar;