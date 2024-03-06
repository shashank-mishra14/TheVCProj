import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../../Navigation/Nav";
import Products from "../../Products/Products";
import Sidebar from "../../Sidebar/Sidebar";
import Card from "../Card";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './ReportCard.css';

  const ReportCard = () => {
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState([]);
    const [selectedYear, setSelectedYear] = useState(""); // State for selected year
    const [cardData, setCardData] = useState([]);
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const [itemsPerPage] = useState(10); // Number of items per page
  
    // Fetch data from the server
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/reports");
        setCardData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // Filter data based on selected category, subcategory, and year
    const filterData = () => {
      let filteredProducts = [...cardData];
    
      // Apply filtering logic based on selected category, subcategory, and year
     if (
    selectedCategory.length > 0 ||
    selectedSubCategory.length > 0 ||
    query ||
    selectedYear
  ) {
    filteredProducts = filteredProducts.filter(
      ({ category, subcategory, title, year }) =>
        (selectedCategory.length === 0 ||
          selectedCategory.includes(category)) &&
        (selectedSubCategory.length === 0 ||
          selectedSubCategory.includes(subcategory)) &&
        (!query || title.toLowerCase().includes(query.toLowerCase())) &&
        (!selectedYear || year === parseInt(selectedYear)) // Convert selectedYear to integer for comparison
    );
  }
  
      // Pagination logic
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      return filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    };
  
    // Handle input change for search query
    const handleInputChange = (event) => {
      setQuery(event.target.value);
      setCurrentPage(1); // Reset pagination when search query changes
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
    setCurrentPage(1); // Reset pagination when category or subcategory changes
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts = filterData();

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
        result={filteredProducts.map(
          ({
            imgsrc,
            title,
            author,
            authors,
            subcategory,
            year,
            category,
            month,
            link
          }) => (
            <Card
              key={Math.random()}
              img={imgsrc}
              title={title}
              companyName={author}
              author={authors}
              subcategory={subcategory}
              category={category}
              year={year}
              month={month}
              link={link}
            />
          )
        )}
      />
      {/* Pagination controls */}
      <div className="pagination-button">
        <button className="button-pagination" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous</button>
        {/* <span className="currentPage">{currentPage}</span> */}
        <button className="button-pagination" onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(cardData.length / itemsPerPage)))}>Next</button>
      </div>
    </div>
  );
};

export default ReportCard;
