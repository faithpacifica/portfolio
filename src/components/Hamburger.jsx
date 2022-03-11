import React
// , { useState } 
from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #191d2b;
  height: 50px;
  width: 50px;
  right: 10px;
  top: 10px;
  padding: 0;
  border: none;
  border: 1px solid #2e344e;
  position: absolute;
  font-size: 1.6rem;
  text-align: center;
  display: none;
  cursor: pointer;
  svg {
    display: inline-block;
    color: #a4acc4;
    line-height: 1;
  }
  @media (max-width: 767px) {
    display: block;
    z-index: 2000;
  }
`;

const Hamburger = ({setSidebarOpen}) => {

  const buttonToggler = () => {
    setSidebarOpen(true);
  };

  return (
    <HamburgerButton
      className="hamburger-button"
      onClick={buttonToggler}
    >
      <GiHamburgerMenu />
    </HamburgerButton>
  );
};

export default Hamburger;
