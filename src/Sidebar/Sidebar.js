import { useState } from "react";
import Category from "./Category/Category";
import Author from "./Authors/Author";
import "./Sidebar.css";
import Checkbox from '@mui/joy/Checkbox';
import HotReports from "../components/ReportCard/HotReports";

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
  selectedYear,
  setShowCards, // Receive setShowCards as a prop
  showCards,
}) => {
  const [selectedYears, setSelectedYears] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to track if sidebar is open

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedYears((prevSelectedYears) => {
      if (checked) {
        return [...prevSelectedYears, value];
      } else {
        return prevSelectedYears.filter((year) => year !== value);
      }
    });
    handleChange(event);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
       <span className="filterreports"> Filter Reports </span><ion-icon size="large" name="chevron-down-outline"></ion-icon>
      </button>
      <div class="sidebar-content visible">
        <div className="logo-container">
          Filter your reports<ion-icon size="large" name="funnel-outline"></ion-icon>
          <br />
        </div>
        <div className="hot-reports">
        <HotReports
          showCards={showCards}
          setShowCards={setShowCards}
        />
        </div>
        <div className="year-checklist">
          <label className="yearSelect">Select Year</label>
          {[...Array(2024 - 2017 + 1).keys()].map((index) => (
            <div role="group" className=" container-yearlist" key={index}>
              <Checkbox
                size="lg"
                label={2017 + index}
                type="checkbox"
                id={`year-${2017 + index}`}
                name="year"
                value={2017 + index}
                checked={selectedYears.includes(`${2017 + index}`)}
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
            setSelectedYears([]);
            setSelectedCategory(category);
            setSelectedSubCategory(null);
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
