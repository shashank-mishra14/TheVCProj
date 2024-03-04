import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/contactpage/Contact";
import UseAddReports from "./components/addReports/addReports";
// import { data } from "./db/data";
import Homepage from "./components/Homepage/Homepage";
// import Recommended from "./Recommended/Recommended";
// import subCategory from "./Sidebar/Category/subcategory";
// import Card from "./components/Card";
import "./index.css";
import ReportCard from "./components/ReportCard/ReportCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Homepage />} />
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
        <Route exact path="/reports" element={<UseAddReports />} />
      </Routes>
    </Router>
  );
}

export default App;
