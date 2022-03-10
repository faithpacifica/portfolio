import React from "react";
import "./home.css";
import styled from "styled-components";
import Particles from "../../components/Particles";
import { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Fade from "react-reveal/Fade";
import "animate.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// ************************************************************
const Container = styled.div`
  position: relative;
`;

const HomeSection = styled.div`
  background-color: #10121c;
  padding: 30px 40px;
  display: flex;
  justify-content: center !important;
  min-height: 100vh;
  position: relative;
  z-index: 1000;

  @media (max-width: 824px) {
    padding: 30px 30px;
  }
  @media (max-width: 767px) {
    padding: 50px;
  }
  @media (max-width: 500px) {
    padding: 50px 30px;
  }
  @media (max-width: 425px) {
    padding: 60px 20px;
  }
`;

const Text = styled.p`
  margin-top: 15px;
  font-size: 1.25rem;
  line-height: 2rem;
  text-align:justify;
  @media (max-width: 1101px) {
    line-height: 1.6rem;
}
   @media (max-width: 895px) {
    line-height: 1.5rem;
    font-size: 1.1rem;
   }
   @media (max-width: 530px) {
    line-height: 1.2rem;
    font-size: 1.1rem;
   }
`;

const HomeHeader = styled.h1`
  font-family: "Spectral", serif;
  color: #fff;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4rem;
  transition: all 0.5s ease-out;
  letter-spacing: -2px;
  margin:0;

  span {
    color: #6c81d1;
    font-weight: 500;
    display: inline-block;
    position: relative;
    transition: all 0.5s ease-out;
    font-size: 5.5rem;
    line-height: 5rem;
    &:hover {
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-name: rubberBand;
    }
    @media (max-width: 1101px) {
      font-size: 4rem;
      line-height: 4rem;
      margin: 0;
    }
    @media (max-width: 895px) {
      font-size: 3.4rem;
      line-height: 4rem;
    }
    @media (max-width: 795px) {
      font-size: 3rem;
      line-height: 4rem;
    }
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
    @media (max-width: 425px) {
      font-size: 2.1rem;
      line-height: 3rem;
    }
  
  }

  @media (max-width: 1101px) {
    font-size: 2.8rem;
  }
  @media (max-width: 795px) {
    font-size: 2.4rem;
  }

  @media (max-width: 530px) {
    font-size: 2rem;
  }
  @media (max-width: 425px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;

const HomeContent = styled.div``;

const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position:absolute;
  background-color: #191d2b;
  height: 50px;
  width: 50px;
  right: -45px;
  top: -45px;
  padding: 0;
  border: none;
  border: 1px solid #2e344e;
  position: absolute;
  font-size: 1.6rem;
  text-align: center;
  display: none;

  svg {
    display: inline-block;
    color: #a4acc4;
    line-height: 1;
  }
  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 500px) {
    right:-20px;
  }
  @media (max-width: 425px) {
    right:-10px;
  }
`;
const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position:absolute;
  background-color: #191d2b;
  height: 50px;
  width: 50px;
  right: -45px;
  top: -45px;
  padding: 0;
  border: none;
  border: 1px solid #2e344e;
  position: absolute;
  font-size: 1.6rem;
  text-align: center;
  display: none;

  svg {
    display: inline-block;
    color: #a4acc4;
    line-height: 1;
  }
  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 500px) {
    right:-20px;
  }
  @media (max-width: 425px) {
    right:-10px;
  }
`;

// *************************************
const Home = () => {
  const [loading, setLoading] = useState(true);

  const [closeToggle, setCloseToggle ] = useState(false)

  setTimeout(() => {
    setLoading(false);
  }, 2000);


  const buttonToggler = (e) => {
    console.log(e.target)
  }
  // ************************************
  return (
    <>
      {loading ? (
        <ProgressBar />
      ) : (
        <HomeSection className="home-section">
          <Particles id="tsparticles" />

          <Container className="container">
            <HomeContent className="home-content">
              <HamburgerButton onClick={buttonToggler}>
                <GiHamburgerMenu />
              </HamburgerButton>
             
              <CloseButton>
                 <AiOutlineClose onClick ={() => setCloseToggle(!closeToggle)}/>
              </CloseButton>

              <HomeHeader>
                Hi, I am <br />
                <span className="blast" aria-hidden="true">
                  D
                </span>
                <span className="blast" aria-hidden="true">
                  i
                </span>
                <span className="blast" aria-hidden="true">
                  l
                </span>
                <span className="blast" aria-hidden="true">
                  d
                </span>
                <span className="blast" aria-hidden="true">
                  o
                </span>
                <span className="blast" aria-hidden="true">
                  r
                </span>
                <span className="blast letter-space" aria-hidden="true">
                  a
                </span>
                <span className="blast" aria-hidden="true">
                  M
                </span>
                <span className="blast" aria-hidden="true">
                  u
                </span>
                <span className="blast" aria-hidden="true">
                  s
                </span>
                <span className="blast" aria-hidden="true">
                  l
                </span>
                <span className="blast" aria-hidden="true">
                  i
                </span>
                <span className="blast" aria-hidden="true">
                  m
                </span>
                <span className="blast" aria-hidden="true">
                  o
                </span>
                <span className="blast" aria-hidden="true">
                  v
                </span>
                <span className="blast" aria-hidden="true">
                  a
                </span>
              </HomeHeader>
              <Fade bottom cascade>
                <Text>
                  <i>
                    Front-End Developer with a proven ability to collaborate
                    effectively with senior developers while spending extra time
                    to be mentored. Enjoy working closely with team members to
                    ensure workloads are effectively redirected to bottlenecks
                    and personally picking up the slack when necessary. With a
                    passion for both personal growth and for software
                    development, I attended a 1000+ hour coding bootcamp to
                    learn new languages and frameworks. Ready to apply my
                    passion for coding to a talented engineering team to develop
                    quality solutions.
                  </i>
                </Text>
              </Fade>
            </HomeContent>
          </Container>
        </HomeSection>
      )}
    </>
  );
};

export default Home;
