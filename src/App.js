import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/contactpage/Contact";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import UseAddReports from "./components/addReports/addReports";
import { data } from "./db/data";
import Homepage from "./components/Homepage/Homepage";
// import Recommended from "./Recommended/Recommended";
import subCategory from "./Sidebar/Category/subcategory";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import axios from "axios";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cardData,setCardData] = useState([]);
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
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

  fetchData();

  
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

    return cardData.map(
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
    );
  }

  const result = filteredData(data, selectedCategory, query);

  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Homepage />} />
        <Route
          exact
          path="/reportspage"
          element={
            <>
              <Sidebar handleChange={handleChange} />
              <Navigation query={query} handleInputChange={handleInputChange} />
              <Products result={result} />
            </>
          }
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/reports" element={<UseAddReports />} />
      </Routes>
    </Router>
  );
}

export default App;
