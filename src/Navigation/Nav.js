import ReactGA from 'react-ga';
import "./Nav.css";
// import mixpanel from 'mixpanel';
const Nav = ({ handleInputChange, query }) => {
  const trackInputChange = () => {
    // mixpanel.track('Search Input Change', {
    //   category: 'User Interaction in Search Input',
    //   action: 'Input Change',
    //   label: 'Search Input Change'
    // });
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
    </nav>
  );
};

export default Nav;
