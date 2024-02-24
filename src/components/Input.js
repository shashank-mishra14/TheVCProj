const Input = ({ handleChange, value, title, name, color }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="checkbox" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
      // <button className="filterbutton" onClick={handleChange} value={value} name={name}>  
      // {title} 
      // </button>
      
      );
  };
  
  export default Input;