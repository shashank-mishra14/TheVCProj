import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search."
        />
      </div>
      <div className="profile-container"> 
        <button class="reports">REPORTS</button>
        <button class="reports">CONTACT US</button>
      </div>
    </nav>
  );
};

export default Nav;
