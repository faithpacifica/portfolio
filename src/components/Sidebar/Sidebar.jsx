import React from "react";
import "./sidebar.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


// -------------------------------
const SidebarSection = styled.div`
  position: fixed;
  left: 0;
  width: 280px;
  top: 0;
  transform: translateX(0);
  height: 100vh;
  background-color: #191d2b;
  border-right: 1px solid #2e344e;
  z-index: 2000;
  transition: all 0.4s ease-out;
  border-right: 1px solid #2e344e;
  box-shadow: 0 20px 30px 10px rgb(28 9 80 / 5%);
  @media (max-width:767px) {
   display:none;
  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div`
  padding: 10px 0 0;
  display: block;
  width: 100%;
  text-align: center;
    img {
        height: 200px;
        border-bottom: 1px solid #2e344e;
    }
`;

const NavbarMenu = styled.ul`
  margin: 0;
  list-style: none;
  width: 100%;
  padding:10px 0;
  border-bottom: 1px solid #2e344e;
`;

const NavbarMenuList = styled.li`
  `;


const SocialMedia = styled.div`
  font-size:2rem;
  margin-top:20px;
  margin-bottom:30px;
  text-align:center;

  a{
    color:#fff;
    cursor:pointer;
  }
`;

const Built = styled.div`
padding:8px 0;
border-top: 1px solid #2e344e;
&:hover{
  color: #6c81d1  ;
}
`;



// ************************************
const Sidebar = () => {
  return (
    <SidebarSection className="sidebar-section">

      <Nav className="navbar">
        <div className="navbar-inner">
          <LogoWrapper className="navbar-image">
            <a className="navbar-link" href="/">
              <img className="navbar-logo" alt="logo" src="../../../img/logo.svg" width={200} height={200}/>
            </a>
          </LogoWrapper>
        
          <NavbarMenu className="navbar-menu">
            <NavbarMenuList>
              <NavLink to="/" activeClassName="active " className="link">
                Home
              </NavLink>
            </NavbarMenuList>
            <NavbarMenuList>
              <NavLink className="link" to="/about">
                <span>About</span>
              </NavLink>
            </NavbarMenuList>
            <NavbarMenuList>
              <NavLink className="link" aria-current="page" to="/resume">
                <span>Resume</span>
              </NavLink>
            </NavbarMenuList>
            <NavbarMenuList>
              <NavLink className="link" to="/portfolio">
                <span>Portfolios</span>
              </NavLink>
            </NavbarMenuList>
            <NavbarMenuList>
              <NavLink className="link" to="/contact">
                <span>Contact</span>
              </NavLink>
            </NavbarMenuList>
          </NavbarMenu>

          <SocialMedia className="social-media-wrapper">
            <a
              href="https://github.com/faithpacifica"
              className="icon-button github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dildora-muslimova-9449941b5/"
              className="icon-button linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:muslimovadildora@gmail.com"
              className="icon-button google"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://t.me/dildora_muslimova"
              className="icon-button telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
          </SocialMedia>

          <Built>
            <i className="far fa-copyright"></i> Built with React
          </Built>

        </div>
      </Nav>
    </SidebarSection>
  );
};

export default Sidebar;
