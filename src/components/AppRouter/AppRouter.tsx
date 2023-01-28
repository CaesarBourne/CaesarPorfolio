import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  redirect,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Apploader from "../Apploader/Apploader";
import Dashboard from "../Dashboard/Dashboard";
import { Footer } from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import Project from "../Project/Project";
import Resume from "../Resume/Resume";
import TopScroll from "../TopScroll/TopScroll";

const AppRouter = () => {
  const [loading, setLoader] = useState(true);
  // const location = useLocation();
  // console.log("This is the location data ", location);

  useEffect(() => {
    const firstLoad = setTimeout(() => {
      setLoader(false);
    }, 1500);

    return () => clearTimeout(firstLoad);
  }, []);

  redirect("dashboard");

  return (
    <Router>
      <Apploader loading={loading} />
      <div id={loading ? "prevent-scroll" : ""}>
        <NavBar />

        <TopScroll />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/CaesarPorfolio"
            element={<Navigate to="/dashboard" />}
          />
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
