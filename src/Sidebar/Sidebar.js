import { useState } from 'react';
import Category from "./Category/Category";
import Author from "./Authors/Author";
import SubCategory from "./Category/subcategory";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // If the same category is clicked again, hide the subcategory
    } else {
      setSelectedCategory(category); // Otherwise, set the selected category
    }
  };

  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>The VC Project</h1>
      </div>
      <div className="sidebar-content">
        <Category handleChange={(category) => { handleChange(category); handleCategoryChange(category); }} />
        {selectedCategory && <SubCategory handleChange={handleChange} selectedCategory={selectedCategory} />}
        <Author handleChange={handleChange} />
      </div>
    </section>
  );
};

export default Sidebar;
