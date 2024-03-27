import React, { useState } from "react";
import "./addReports.css";
import axios from "axios";
const UseAddReports = () => {
  const [reportData, setReportData] = useState({
    title: "",
    category: "",
    subcategory: "",
    author: "",
    year: "",
    imgsrc: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Change 'category' to 'name'
    setReportData((prevState) => ({
      ...prevState,
      [name]: value, // Change 'category' to 'name'
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/uploadreports", reportData);
        // Clear form fields after successful submission (optional)
        setReportData({
            title: "",
            category: "",
            subcategory: "",
            author: "",
            year: "",
            imgsrc: "",
            link: "",
        });
    } catch (error) {
        console.error('Error submitting report:', error.message);
    }
} 

  

  return (
    <div className="reportContainer">
      <form action="http://localhost:5000/uploadreports" method="POST"  className="submitreport" onSubmit={handleSubmit}>
        <div className="title">
          <label className="titlechange" htmlFor="title">
            Title
          </label>
          <input
            className="inputTitle"
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={reportData.title}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="link">
          <label className="linkChange" htmlFor="link"></label>
          <input
            className="inputlink"
            type="text"
            id="link"
            name="link"
            placeholder="Add your report link here"
            value={reportData.link}
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
