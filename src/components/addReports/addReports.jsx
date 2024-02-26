import React, { useState } from "react";

const UseAddReports = () => {
  const [reportData, setreportData] = useState({
    category: "",
    subcategory: "",
    author: "",
    year: "",
    imgsrc: "",
  });

  const handleChange = (e) => {
    const { category, value } = e.target;
    setreportData((prevState) => ({
      ...prevState,
      [category]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending data to a server
    console.log(reportData);
    // Clear form fields after submission
    setreportData({
      category: "",
      subcategory: "",
      author: "",
      year: "",
      imgsrc: "",
    });
  };

  return (
    <div className="reportContainer">
      <form action="" className="submitreport" onSubmit={handleSubmit}>
        <div className="Categoryinput">
          <div className="category">
            <label className="categorychange" htmlFor="name">
              Category
            </label>
            <input
              className="inputCategory"
              type="text"
              id="category"
              name="category"
              value={reportData.category}
              placeholder="Category"
              onChange={handleChange}
              required
            />
          </div>

          <div className="subcategory">
            <label className="subcategorychange" htmlFor="name">
              Subcategory
            </label>
            <input
              className="inputSubcategory"
              type="text"
              id="subcategory"
              name="Subcategory"
              placeholder="Subcategory"
              value={reportData.subcategory}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="author">
          <label className="authorinput" htmlFor="email">
            Author
          </label>
          <input
            className="inputauthor"
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            value={reportData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="year">
          <label className="yearchange" htmlFor="year">
            Year
          </label>
          <input
            className="inputyear"
            type="year"
            id="year"
            name="year"
            placeholder="Year"
            value={reportData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="imgsrc">
          <label className="imgsrcChange" htmlFor="email"></label>
          <input
            className="inputimgsrc"
            type="text"
            id="imgsrc"
            name="imgsrc"
            placeholder="Add your thubmnail image link here"
            value={reportData.imgsrc}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submitbutton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseAddReports;
