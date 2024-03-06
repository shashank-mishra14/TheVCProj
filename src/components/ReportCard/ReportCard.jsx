import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../../Navigation/Nav";
import Products from "../../Products/Products";
import Sidebar from "../../Sidebar/Sidebar";
import Card from "../Card";
import "./ReportCard.css";

const ReportCard = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState(""); // State for selected author
  const [cardData, setCardData] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/reports");
      setCardData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Filter data based on selected category, subcategory, year, author, and query
  const filterData = () => {
    let filteredProducts = [...cardData];

    // Apply filtering logic based on selected category, subcategory, year, author, and query
    if (
      selectedCategory.length > 0 ||
      selectedSubCategory.length > 0 ||
      query ||
      selectedYear ||
      selectedAuthor
    ) {
      filteredProducts = filteredProducts.filter(
        ({
          category,
          subcategory,
          title,
          year,
          authors, // Assuming the author information is stored as an array
        }) =>
          (selectedCategory.length === 0 ||
            selectedCategory.includes(category)) &&
          (selectedSubCategory.length === 0 ||
            selectedSubCategory.includes(subcategory)) &&
          (!query || title.toLowerCase().includes(query.toLowerCase())) &&
          (!selectedYear || year.toString() === selectedYear) &&
          (!selectedAuthor || authors.includes(selectedAuthor))
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
    setCurrentPage(1);
  };

  // Handle author change
  const handleAuthorChange = (author) => {
    setSelectedAuthor(author);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts = filterData();

  return (
    <div>
      <Sidebar
        handleCategoryChange={setSelectedCategory}
        handleSubCategoryChange={setSelectedSubCategory}
        handleYearChange={setSelectedYear}
        handleAuthorChange={handleAuthorChange}
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
            link,
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
      <div className="pagination-button">
        <button
          className="button-pagination"
          onClick={() =>
            setCurrentPage((prev) => Math.max(prev - 1, 1))
          }
        >
          Previous
        </button>
        <button
          className="button-pagination"
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(cardData.length / itemsPerPage))
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReportCard;
