import Input from "../../components/Input";

function SubCategory({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">SubCategory</h2>

      <div>
        
          {/* <button className="filterbutton"onClick={handleChange} value="" name="test">
            All
            </button> */}
        {/* </label> */}
        <Input
          handleChange={handleChange}
          value="gaming"
          title="Gaming"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="fintech"
          title="Fintech"
          name="test"
          
        />
        <Input
          handleChange={handleChange}
          value="batterytech"
          title="Battery Tech"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="agritech"
          title="Agritech"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="ecommerce"
          title="Ecommerce"
          name="test"
        />
      </div>
    </div>
  );
}

export default SubCategory;