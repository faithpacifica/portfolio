import "./App.css";
import React
// , { useState }
 from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar/Sidebar";
// import HamburgerButton from './components/Hamburger';

// import styled from "styled-components";

// import { GiHamburgerMenu } from "react-icons/gi";

// const HamburgerButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   background-color: #191d2b;
//   height: 50px;
//   width: 50px;
//   right: 10px;
//   top: 10px;
//   padding: 0;
//   border: none;
//   border: 1px solid #2e344e;
//   position: absolute;
//   font-size: 1.6rem;
//   text-align: center;
//   display: none;
  
//   cursor:pointer;
//   svg {
//     display: inline-block;
//     color: #a4acc4;
//     line-height: 1;
//   }
//   @media (max-width: 767px) {
//     display: block;
//     z-index:2000;
//   }

//   @media (max-width: 500px) {
   
//   }
//   @media (max-width: 425px) {
   
//   }
// `;

function App() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const buttonToggler = () => {
  //   setSidebarOpen(!sidebarOpen);

  // };

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Sidebar />

        {/* <HamburgerButton/> */}


        {/* <HamburgerButton
          sidebarOpen={sidebarOpen}
          className="hamburger-button"
          onClick={buttonToggler}
        >
          <GiHamburgerMenu />
        </HamburgerButton> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
