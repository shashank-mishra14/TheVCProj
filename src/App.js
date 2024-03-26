import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/contactpage/Contact";
import UseAddReports from "./components/addReports/addReports";
// import { data } from "./db/data";
import { useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Accordion from "./components/Accordion/Accordion";
// import Recommended from "./Recommended/Recommended";
// import subCategory from "./Sidebar/Category/subcategory";
// import Card from "./components/Card";
import "./index.css";
import ReportCard from "./components/ReportCard/ReportCard";
import Layout from "./components/Layout/Layout";
import ReactGa from "react-ga";
const dotenv= require('dotenv');
function App() {
  
  useEffect(() => {
    ReactGa.initialize("process.env.REACT_APP_GA_TRACKING_ID");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  dotenv.config();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            exact
            path="/reportspage"
            element={
              <>
                <ReportCard />
              </>
            }
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faqs" element={<Accordion />} />
          <Route exact path="/reports" element={<UseAddReports />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
