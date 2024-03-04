import { useState } from "react";
import Category from "./Category/Category";
import Author from "./Authors/Author";
import SubCategory from "./Category/subcategory";
import "./Sidebar.css";

const Sidebar = ({ handleChange, selectedCategory, setSelectedCategory }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleCategoryChange = (category) => {
    if (selectedSubCategory === category) {
      setSelectedSubCategory(null); // If the same category is clicked again, hide the subcategory
    } else {
      setSelectedSubCategory(category); // Otherwise, set the selected category
    }
  };

  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>The VC Project</h1>
      </div>
      <div className="sidebar-content">
        <Category
          handleChange={(category) => {
            handleChange(category);
            handleCategoryChange(category);
          }}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {selectedSubCategory && (
          <SubCategory
            handleChange={handleChange}
            selectedSubCategory={selectedSubCategory}
          />
        )}
        <Author handleChange={handleChange} />
      </div>
    </section>
  );
};

export default Sidebar;
