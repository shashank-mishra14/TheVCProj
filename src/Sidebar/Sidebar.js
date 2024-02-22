import Category from "./Category/Category";
import Author from "./Author/Author";

import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>The VC Project</h1>
        </div>
        <Category handleChange={handleChange} />
        <Author handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;