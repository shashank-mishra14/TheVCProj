import React, { useState } from "react";
import "./addReports.css";

const UseAddReports = () => {
  const [reportData, setReportData] = useState({
    category: "",
    subcategory: "",
    author: "",
    year: "",
    imgsrc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Change 'category' to 'name'
    setReportData((prevState) => ({
      ...prevState,
      [name]: value, // Change 'category' to 'name'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending data to a server
    console.log(reportData);
    // Clear form fields after submission (optional)
    setReportData({
      category: "",
      subcategory: "",
      author: "",
      year: "",
      imgsrc: "",
    });
  };

  return (
    <div className="reportContainer">
      <form action="http://localhost:5000/addreports" method="post" encType="multipart/form-data" className="submitreport" onSubmit={handleSubmit}>
        <div className="Categoryinput">
          <div className="category">
            <label className="categorychange" htmlFor="category">
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
            <label className="subcategorychange" htmlFor="subcategory">
              Subcategory
            </label>
            <input
              className="inputSubcategory"
              type="text"
              id="subcategory"
              name="subcategory" // Corrected to 'subcategory'
              placeholder="Subcategory"
              value={reportData.subcategory}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="author">
          <label className="authorinput" htmlFor="author">
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
          <label className="imgsrcChange" htmlFor="imgsrc"></label>
          <input
            className="inputimgsrc"
            type="text"
            id="imgsrc"
            name="imgsrc"
            placeholder="Add your thumbnail image link here"
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
