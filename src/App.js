import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar/Sidebar";
import Hamburger from "./components/Hamburger";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  }, [location.pathname,sidebarOpen]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, [2000]);
    }
  }, [loading]);

  return (
    <div className="wrapper">
      {
      loading ? (
        <ProgressBar />
      ) : (
        <>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Hamburger setSidebarOpen={setSidebarOpen} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
