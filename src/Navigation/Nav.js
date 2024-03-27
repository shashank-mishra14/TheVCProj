import ReactGA from 'react-ga';
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  const trackInputChange = () => {
    ReactGA.event({
      category: 'User Interaction in Search Input',
      action: 'Input Change',
      label: 'Search Input Change'
    });
  };

  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={(e) => {
            handleInputChange(e);
            trackInputChange();
          }}
          value={query}
          placeholder="Enter your search"
        />
      </div>
      {/* <div className="profile-container"> 
        <button class="reports">REPORTS</button>
        
        <button class="reports">
        
        </button>
      </div> */}
    </nav>
  );
};

export default Nav;
