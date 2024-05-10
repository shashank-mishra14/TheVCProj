import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../../Navigation/Nav";
import Products from "../../Products/Products";
import Sidebar from "../../Sidebar/Sidebar";
import Card from "../Card";
import HotReports from "./HotReports";
import "./ReportCard.css";
import Modal from "../Homepage/Modal";

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
  const [showHotReports, setShowHotReports] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/reportspage");
      setCardData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterData = () => {
    let filteredProducts = [...cardData];

    // Remove spaces from the query
    const trimmedQuery = query.replace(/\s+/g, "");

    if (
      selectedCategory.length > 0 ||
      selectedSubCategory.length > 0 ||
      trimmedQuery || // Use trimmedQuery instead of query
      selectedAuthors.length > 0 ||
      selectedYear.length > 0 // Check if a year is selected
    ) {
      filteredProducts = filteredProducts.filter(
        ({ category, subcategory, title, year, author }) =>
          (selectedCategory.length === 0 ||
            selectedCategory.includes(category)) &&
          (selectedSubCategory.length === 0 ||
            selectedSubCategory.includes(subcategory)) &&
          (!trimmedQuery || // Use trimmedQuery instead of query
            title.toLowerCase().includes(trimmedQuery.toLowerCase())) &&
          (selectedYear.length === 0 || selectedYear.includes(`${year}`)) && // Filter by selected year(s)
          (selectedAuthors.length === 0 ||
            selectedAuthors.some((selectedAuthor) =>
              author.includes(selectedAuthor)
            ))
      );
    }

    return filteredProducts;
  };

  const handleInputChange = (value) => {
    setQuery(value); // Set the search query
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (name === "category") {
      setSelectedCategory(value);
      setSelectedSubCategory([]);
    } else if (name === "subcategory") {
      setSelectedSubCategory(value);
    } else if (name === "year") {
      if (checked) {
        setSelectedYear((prevYears) => [...prevYears, value]);
      } else {
        setSelectedYear((prevYears) =>
          prevYears.filter((year) => year !== value)
        );
      }
    } else if (name === "author") {
      const authorValue = value;
      setSelectedAuthors((prevAuthors) => {
        if (checked) {
          return [...prevAuthors, authorValue];
        } else {
          return prevAuthors.filter((author) => author !== authorValue);
        }
      });
    } else if (name === "search") {
      setQuery(value);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredProducts = filterData();
    setDisplayedReports(filteredProducts.slice(0, startIndex + itemsPerPage));
  }, [
    cardData,
    startIndex,
    itemsPerPage,
    selectedCategory,
    selectedSubCategory,
    query,
    selectedYear,
    selectedAuthors,
  ]);

  const handleViewMore = () => {
    const nextStartIndex = startIndex + itemsPerPage;
    const nextReportsToShow = filteredProducts.slice(
      nextStartIndex,
      nextStartIndex + itemsPerPage
    );
    setDisplayedReports((prevDisplayedReports) => [
      ...prevDisplayedReports,
      ...nextReportsToShow,
    ]);
    setStartIndex(nextStartIndex);
  };

  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   const hasVisitedBefore = sessionStorage.getItem("visitedBefore");

  //   if (!hasVisitedBefore) {
  //     setShowModal(true);
  //     sessionStorage.setItem("visitedBefore", true);
  //   }
  // }, []);

  // const handleBeforeUnload = () => {
  //   sessionStorage.removeItem("visitedBefore");
  // };

  // useEffect(() => {
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  const handleRedirect = (link) => {
    window.location.assign(link);
  };

  const [linkToShow, setLinkToShow] = useState("");

  const toggleModal = (show, link) => {
    setShowModal(show);
    setLinkToShow(link);
  };

  const handleToggleHotReports = () => {
    setShowHotReports(!showHotReports); // Toggle showHotReports
    setShowCards(false); // Ensure showCards is set to false when switching to hot reports
    setDisplayedReports([]); // Clear displayed reports when switching to hot reports
  };

  const dummyCardData = [
    {
      img: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/14.png",
      title: "Indus Valley Annual Report 2022",
      companyName: "Blume Ventures",
      subcategory: "Indian Consumer",
      category: "Consumer Tech",
      year: 2022,
      // month: "January",
      link: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/Reports/BlumeVentures/Indus%20Valley%20Annual%20Report%202022.pdf",
    },
    {
      img: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/15.png",
      title: "Indus Valley Annual Report 2023",
      companyName: "Blume Ventures",
      subcategory: "Indian Consumer",
      category: "Consumer Tech",
      // month: "January",
      year: "2023",
      link: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/Reports/BlumeVentures/Indus%20Valley%20Annual%20Report%202023.pdf",
    },
  ];

  return (
    <>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          linkToShow={linkToShow}
        />
      )}
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
          setShowCards={setShowCards}
          showCards={showCards}
        />
        <Navigation handleInputChange={handleInputChange} />
        {!showHotReports && !showCards ? (
  <div className="card-container">
    {dummyCardData.map((card, index) => (
      <Card key={index} {...card} toggleModal={toggleModal} />
    ))}
  </div>
) : null}
{showHotReports ? (
  <div className="card-container">
    {dummyCardData.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
) : null}
{!showHotReports && showCards ? (
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
          toggleModal={toggleModal} // Ensure toggleModal is passed as a prop
        />
      )
    )}
  />
) : null}
        {showHotReports
          ? null
          : displayedReports.length > 10 && (
              <div className="view-more-button">
                <button className="button-pagination" onClick={handleViewMore}>
                  View More
                </button>
              </div>
            )}
      </div>
    </>
  );
};

export default ReportCard;
