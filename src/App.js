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
// import ReactGa from "react-ga4";
// import {gtag} from "/react-ga4";
import mixpanel from "mixpanel-browser";


function App() {
  
 
  
   mixpanel.init("523e6b4c823f12bce391464b75b5b640", {debug: true, track_pageview: true, persistence: 'localStorage'});
   mixpanel.identify('USER_ID');
   mixpanel.track('Sign Up', {
    'Signup Type': 'Referral'
  });
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            exact
            path="/reports"
            element={
              <>
                <ReportCard />
              </>
            }
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faqs" element={<Accordion />} />
          <Route exact path="/addingreports" element={<UseAddReports />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
