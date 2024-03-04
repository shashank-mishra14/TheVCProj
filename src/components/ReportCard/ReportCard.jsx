import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../../Navigation/Nav";
import Products from "../../Products/Products";
import Sidebar from "../../Sidebar/Sidebar";
import Card from "../Card";

const ReportCard = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  // Fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/reports");
      setCardData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Filter data based on selected category and query
  const filterData = () => {
    let filteredProducts = [...cardData];
    
    // Filtering by category and subcategory
    if (selectedCategory.length > 0) {
      filteredProducts = filteredProducts.filter(({ category, subcategory }) =>
        selectedCategory.includes(category) && 
        (selectedSubCategory.length === 0 || selectedSubCategory.includes(subcategory))
      );
    }

    // Filtering by query
    if (query) {
      filteredProducts = filteredProducts.filter(
        ({ title, authors }) =>
          title.toLowerCase().includes(query.toLowerCase()) ||
          authors.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Limit to first 10 results
    return filteredProducts;
  };

  // Handle input change for search query
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Handle category and subcategory change
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "category") {
      setSelectedCategory(value);
      // Clear selected subcategories when category changes
      setSelectedSubCategory([]);
    } else if (name === "subcategory") {
      setSelectedSubCategory(value);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setResult(filterData());
  }, [cardData, selectedCategory, selectedSubCategory, query]);

  return (
    <div>
      <Sidebar
        handleChange={handleChange}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSubCategory={selectedSubCategory}
        setSelectedSubCategory={setSelectedSubCategory}
      />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products
        result={result.map(
          ({ imgsrc, title, author, authors, subcategory, year, category }) => (
            <Card
              key={Math.random()}
              img={imgsrc}
              title={title}
              companyName={author}
              author={authors}
              subcategory={subcategory}
              category={category}
              year={year}
            />
          )
        )}
      />
    </div>
  );
};

export default ReportCard;
