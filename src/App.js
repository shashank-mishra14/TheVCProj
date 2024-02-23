import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import {data} from "./db/data";
// import Recommended from "./Recommended/Recommended";
import subCategory from "./Sidebar/Category/subcategory";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  function filteredData(data, selected, query) {
    let filteredProducts = data;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, companyName, title,authors,subcategory }) =>
          category === selected ||
          
          companyName === selected ||
          
          authors=== selected ||

          title === selected || 

          subcategory === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, companyName,authors,subcategory }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          companyName={companyName}
          author={authors}
          subcategory={subcategory}
        />
      )
    );
  }

  const result = filteredData(data, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      {/* <Recommended handleClick={handleClick} /> */}

      <subCategory handleChange={handleChange} />
      <Products result={result} />
    </>
  );
}

export default App;