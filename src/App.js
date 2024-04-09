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
<<<<<<< HEAD
import ReactGa, {gtag} from "react-ga4";
=======
import {ReactGa, gtag} from "react-ga4";
>>>>>>> 7068c2d4dbde69b9c14dc096959afdaa52141759



function App() {
  
  useEffect(() => {
    ReactGa.initialize("G-H0QS3NZ8RX");
    ReactGa.send({hitType:"pageview", page:"/"} );
    ReactGa._gaCommandSendPageview = true;
    gtag('event', 'page_view', { page_path: window.location.pathname });
  }, []);
  
  // // mixpanel.init("f4b4b1b3", {
  // //   debug: true,
  // // });
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
