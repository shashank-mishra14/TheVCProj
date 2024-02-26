import React, { useState } from "react";

const useAddReports = () => {
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

  return <div className="reportContainer">
    <form action="" className="submitreport" onSubmit={handleSubmit}>
    <div className="nameinput">
                <div className="name">
                  <label className="namechange" htmlFor="name">
                    Category
                  </label>
                  <input
                    className="inputname"
                    type="text"
                    id="name"
                    name="name"
                    value={reportData.category}
                    placeholder="First Name"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="name">
                  <label className="namechange" htmlFor="name">
                  Subcategory
                  </label>
                  <input
                    className="inputname"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Last Name"
                    value={reportData.subcategory}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="email">
                <label className="mail" htmlFor="email">
                  Email
                </label>
                <input
                  className="inputmail"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={reportData.author}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="email">
                <label className="mail" htmlFor="email">
                  Email
                </label>
                <input
                  className="inputmail"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={reportData.year}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="email">
                <label className="mail" htmlFor="email">
                  Email
                </label>
                <input
                  className="inputmail"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={reportData.imgsrc}
                  onChange={handleChange}
                  required
                />
              </div>
    </form>
  </div>;
};

export default useAddReports;
