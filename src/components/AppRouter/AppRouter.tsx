import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Apploader from "../Apploader/Apploader";
import Dashboard from "../Dashboard/Dashboard";
import { Footer } from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import Resume from "../Resume/Resume";
import TopScroll from "../TopScroll/TopScroll";

const AppRouter = () => {
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    const firstLoad = setTimeout(() => {
      setLoader(false);
    }, 1500);

    return () => clearTimeout(firstLoad);
  }, []);

  return (
    <Router>
      <Apploader loading={loading} />
      <div id={loading ? "prevent-scroll" : ""}>
        <NavBar />

        <TopScroll />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
