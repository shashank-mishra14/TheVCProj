import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../../Navigation/Nav";
import Products from "../../Products/Products";
import Sidebar from "../../Sidebar/Sidebar";
import Card from "../Card";
const ReportCard = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
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
    console.log(filteredProducts);
    console.log(selectedCategory);
    // Filtering by category
    if (selectedCategory.length > 0) {
      filteredProducts = filteredProducts.filter(({ category }) =>
        selectedCategory.includes(category)
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

  // Handle category change
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setResult(filterData());
  }, [cardData, selectedCategory, query]);

  return (
    <div>
      <Sidebar
        handleChange={handleChange}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products
        result={result.map(
          ({ imgsrc, title, author, authors, subcategory, year }) => (
            <Card
              key={Math.random()}
              img={imgsrc}
              title={title}
              companyName={author}
              author={authors}
              subcategory={subcategory}
              year={year}
            />
          )
        )}
      />
    </div>
  );
};

export default ReportCard;
