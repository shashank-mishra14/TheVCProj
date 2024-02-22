import Input from "../../components/Input";
import "./Author.css";

const Author = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title author-title">Authors</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="elevationcapital"
          title="Elevation Capital"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="tracxn"
          title="Tracxn"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="blumeventures"
          title="Blume Ventures"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="redseer"
          title="Red Seer"
          name="test2"
        />
         <Input
          handleChange={handleChange}
          value="peakxv"
          title="Peak XV"
          name="test2"
        />
         <Input
          handleChange={handleChange}
          value="kaalari"
          title="Kaalari Capital"
          name="test2"
        />
      </div>
    </>
  );
};

export default Author;