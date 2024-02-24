import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="checkbox" value="" name="test" />
          <span className="checkmark"></span>All
          
        </label> 
        <Input
          handleChange={handleChange}
          value="agritech"
          title="Agritech"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="climate"
          title="Climate & Sustainability"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="consumer"
          title="Consumer Tech"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="content"
          title="Content & Media"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="employement"
          title="Employement"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;