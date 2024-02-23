import Input from "../../components/Input";
import "./Author.css";
import React,{useState} from "react";




const Author = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title author-title">Authors</h2>

      

        <button className="filterbutton"onClick={handleChange} value="" name="test"
        >
            All
            </button>

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