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
  setAuthor,author
}) => {
  // const [selectedSubCategory, setSelectedSubCategory] = useState(null);

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

      </div>
      <div className="sidebar-content">
        <Category
          handleChange={(category) => {
            handleChange(category);
            handleCategoryChange(category);
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
