import Input from "../../components/Input";
import "./Author.css";
import React,{useState} from "react";


const authorData=[
  {
    value:"elevationcapital",
          title:"Elevation Capital"
  },
  {
    value:"tracxn",
          title:"Tracxn"
  },
  {
    value:"blumeventures",
          title:"Blume Ventures"
  },
  {
    value:"redseer",
          title:"Red Seer"
  },
  {
    value:"peakxv",
          title:"Peak XV"
  },
  {
    value:"kaalari",
          title:"Kaalari Capital"
  }
]

const Author = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title-author-title">Authors</h2>

      
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="checkbox" value="" name="test" />
          <span className="checkmark"></span>All
          
        </label> 
        <div className="checklistauthorbox">
        {authorData.map(({ value, title }) => (
          <label className="checklistauthor" htmlFor="checklist">
            <div className="checklistinputauthor">

          <input
            type="checkbox"
            id="checklist"
            name="checklist"
            value={value}
            className="checklistauthorInput"
            onChange={handleChange}
          />
          </div>
          {title}
        </label>
        
        ))}
        </div>
      </div>
    </>
  );
};

export default Author;