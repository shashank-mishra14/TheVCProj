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
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [query, setQuery] = useState("");
  const [displayedReports, setDisplayedReports] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage] = useState(15);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/reports");
      setCardData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterData = () => {
    let filteredProducts = [...cardData];

    if (
      selectedCategory.length > 0 ||
      selectedSubCategory.length > 0 ||
      query ||
      selectedYear ||
      selectedAuthors.length > 0
    ) {
      filteredProducts = filteredProducts.filter(
        ({ category, subcategory, title, year, author }) =>
          (selectedCategory.length === 0 ||
            selectedCategory.includes(category)) &&
          (selectedSubCategory.length === 0 ||
            selectedSubCategory.includes(subcategory)) &&
          (!query || title.toLowerCase().includes(query.toLowerCase())) &&
          (!selectedYear || year === parseInt(selectedYear)) &&
          (selectedAuthors.length === 0 ||
            selectedAuthors.includes(author))
      );
    }

    return filteredProducts;
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "category") {
      setSelectedCategory(value);
      setSelectedSubCategory([]);
    } else if (name === "subcategory") {
      setSelectedSubCategory(value);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredProducts = filterData();
    setDisplayedReports(filteredProducts.slice(0, startIndex + itemsPerPage));
  }, [cardData, startIndex, itemsPerPage]);

  const handleViewMore = () => {
    setStartIndex((prevStartIndex) => prevStartIndex + itemsPerPage);
  };

  return (
    <div>
      <Sidebar
        handleChange={handleChange}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSubCategory={selectedSubCategory}
        setSelectedSubCategory={setSelectedSubCategory}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedAuthors={selectedAuthors}
        setSelectedAuthors={setSelectedAuthors}
      />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products
        result={displayedReports.map(
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
      {startIndex + itemsPerPage < cardData.length && (
        <div className="view-more-button">
          <button className="button-pagination" onClick={handleViewMore}>
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportCard;
