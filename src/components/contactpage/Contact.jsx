import "./Contact.css";
import React, { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending data to a server
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container">
      <h3 className="h3">Connect with us</h3>

      <h1 className="h1">Submit your report</h1>
      <div className="container-left">
        <p className="paragraph">
          "One of the standout features of the VC Project Repository is its
          user-friendly interface. Navigating through the platform was
          intuitive, allowing our team to effortlessly browse through a diverse
          range of research topics. The search functionality was robust,
          enabling us to quickly locate specific studies or explore broader
          themes within the VC domain. Additionally, the categorization of
          researches based on relevant tags enhanced the overall user
          experience, ensuring that users could easily find content tailored to
          their interests."
          <br />
          <br />
          Shashank Mishra
          <br />
          <h4 className="h4">CTO</h4>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            asperiores, incidunt recusandae, ducimus possimus obcaecati sequi
            veniam laborum repudiandae quam odio commodi minus sint! Fugiat fuga
            magni deserunt iure quod. Lorem ipsum dolor sit amet consectetur
          </p>
        </p>
      </div>
      <div className="container-right">
        <form className="form" onSubmit={handleSubmit}>
          <div className="nameinput">
            <div className="name">
            <label className="namechange" htmlFor="name">
              First Name
            </label>
            <input
              className="inputname"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            </div>
            
            <div className="name"><label className="namechange" htmlFor="name">
              Last Name
            </label>
            <input
              className="inputname"
              type="text"
              id="name"
              name="name"
              placeholder="Last Name"
              value={formData.name}
              onChange={handleChange}
              required
            /></div>
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
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="checklist">
          <div className="check">
            <input type="checkbox" id="checklist" name="checklist" />
            <label htmlFor="checklist">Checklist Item 1</label>
          </div>

          <div className="check">
            <input type="checkbox" id="checklist2" name="checklist2" />
            <label htmlFor="checklist2">Checklist Item 2</label>
          </div>
          <div className="check">
            <input type="checkbox" id="checklist2" name="checklist2" />
            <label htmlFor="checklist2">Checklist Item 2</label>
          </div>
          <div className="check">
            <input type="checkbox" id="checklist2" name="checklist2" />
            <label htmlFor="checklist2">Checklist Item 2</label>
          </div>
          <div className="check">
            <input type="checkbox" id="checklist2" name="checklist2" />
            <label htmlFor="checklist2">Checklist Item 2</label>
          </div>
          <div className="check">
            <input type="checkbox" id="checklist2" name="checklist2" />
            <label htmlFor="checklist2">Checklist Item 2</label>
          </div>
          </div>
          

          <label className="messg" htmlFor="message">
           Tell us about your experience here
          </label>
          <div className="textarea">
            {" "}
            <textarea className="textarea"
              id="message"
              name="message"
              placeholder="Write your message here."
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
