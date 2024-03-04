import React, { useState ,useEffect} from "react";
import axios from "axios";
import Navigation from "../../Navigation/Nav";
import Products from "../../Products/Products";
import Sidebar from "../../Sidebar/Sidebar";
import Card from "../../components/Card";

const ReportCard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cardData, setCardData] = useState([]);
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    console.log("ini")
    setQuery(event.target.value);
  };

  const filteredItems = cardData.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log("gau");
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/reports");
      setCardData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function filteredData(data, selected, query) {
    let filteredProducts = data;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, companyName, title, authors, subcategory }) =>
          category === selected ||
          companyName === selected ||
          authors === selected ||
          title === selected ||
          subcategory === selected
      );
    }

    return cardData
      .slice(0, 10)
      .map(({ imgsrc, title, author, authors, subcategory, year }) => (
        <Card
          key={Math.random()}
          img={imgsrc}
          title={title}
          companyName={author}
          author={authors}
          subcategory={subcategory}
          year={year}
        />
      ));
  }

  const result = filteredData(cardData, selectedCategory, query);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products result={result} />
    </div>
  );
};

export default ReportCard;
