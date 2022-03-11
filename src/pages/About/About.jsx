import React, { useState } from "react";

import "./about.css";
import styled from "styled-components";
import "animate.css";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";
// Icons
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiSass } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiNpm } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { SiGitlab } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiFigma } from "react-icons/si";

import Tooltip from "@mui/material/Tooltip";

// ************************************************
const AboutPage = styled.div`
  padding: 20px 40px;
  display: flex;

  @media (max-width: 992px) {
    padding: 20px;
  }
`;

const AboutHeader = styled.h1`
  font-family: "Spectral", serif;
  font-weight: 700;
  color: #6c81d1;
  font-weight: 400;
  margin-top: 0;
  position: relative;
  margin-bottom: 60px;

  &:before {
    content: "<h2>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 2rem;
    position: absolute;
    margin-top: -1.5rem;
    left: 0rem;
  }
  &:after {
    content: "<h2/>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 2rem;
    position: absolute;
    left: 0rem;
    bottom: -2rem;
  }

  span {
    transition: all 0.5s ease-out;
    font-size: 5.5rem;
    display: inline-block;

    @media (max-width: 992px) {
      font-size: 3.5rem;
    }
    @media (max-width: 465px) {
      font-size: 3rem;
    }
    @media (max-width: 425px) {
      font-size: 2.5rem;
    }
    @media (max-width: 365px) {
      font-size: 2rem;
    }

    &:hover {
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-name: rubberBand;
    }
  }
`;

const P = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: #a4acc4;
  font-family: "Open Sans", sans-serif;
  // text-indent: 25px;
  font-style: italic;

  @media (max-width: 991px) {
    font-size: 1.1rem;
    line-height: 1.2;
  }

  &:before {
    content: "<p>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 2rem;
    position: absolute;
    margin-top: -2rem;
    left: 0rem;
  }
  &:after {
    content: "<p/>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 2rem;
    position: absolute;
    left: 0rem;
    bottom: 26rem;
    @media (max-width: 1079px) {
      bottom: 31rem;
    }
    @media (max-width: 991px) {
      bottom: 25rem;
    }
    @media (max-width: 859px) {
      bottom: 25rem;
    }
    @media (max-width: 799px) {
      bottom: 30rem;
    }
    @media (max-width: 767px) {
      bottom: 25rem;
    }
    @media (max-width: 759px) {
      bottom: 25rem;
    }
    @media (max-width: 519px) {
      bottom: 28rem;
    }
    @media (max-width: 399px) {
      bottom: 28rem;
    }
    @media (max-width: 339px) {
      bottom: 32rem;
    }
  }
`;

const Skills = styled.div`
  padding: 35px 0;
`;

const SkillsTitle = styled.h2`
  margin: 0;
  margin-bottom: 30px;
  color: #6c81d1;
  font-size: 40px;
  text-align: center;
`;

const Icons = styled.div`
  svg {
    display: inline-block;
    margin-right: 20px;
    margin-left: 20px;
    font-size: 50px;
    margin-bottom: 30px;
    @media (max-width: 991px) {
      margin-right: 10px;
      margin-left: 10px;
      font-size: 40px;
    }
    @media (max-width: 425px) {
      font-size: 30px;
    }
  }
`;

const UnorderedList = styled.ul`
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 525px) {
    font-size: 1rem;
    line-height: 1;
  }
`;

const List = styled.li`
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
`;

const Bold = styled.span`
  font-weight: bold;
  display: inline-block;
  margin-right: 7px;
  min-width: 120px;
`;

const About = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      {loading ? (
        <ProgressBar />
      ) : (
        <AboutPage>
          <div className="page-outer">
            <span className="tags top-tags">
              &lt;/body&gt; <br />
            </span>

            <div className="page-inner">
              <div className="page-inner__about">
                <div className="page-inner__text">
                  <header className="page-inner__header">
                    <AboutHeader
                      aria-label="My, Myself  &amp;  I"
                      className="blast-root "
                    >
                      <span className="blast" aria-hidden="true">
                        M{" "}
                      </span>
                      <span className="blast" aria-hidden="true">
                        y
                      </span>
                      <span className="blast letter-space" aria-hidden="true">
                        ,{" "}
                      </span>
                      <span className="blast" aria-hidden="true">
                        {" "}
                        M
                      </span>
                      <span className="blast" aria-hidden="true">
                        {" "}
                        y{" "}
                      </span>
                      <span className="blast" aria-hidden="true">
                        {" "}
                        s{" "}
                      </span>
                      <span className="blast" aria-hidden="true">
                        {" "}
                        e{" "}
                      </span>
                      <span className="blast" aria-hidden="true">
                        {" "}
                        l{" "}
                      </span>
                      <span className="blast letter-space" aria-hidden="true">
                        {" "}
                        f
                      </span>
                      <span className="blast letter-space" aria-hidden="true">
                        {" "}
                        &amp;
                      </span>
                      <span className="blast" aria-hidden="true">
                        {" "}
                        I{" "}
                      </span>
                    </AboutHeader>
                  </header>

                  <P>
                    <Flip bottom>
                      I'm a Front-End Developer living Uzbekistan. I have a
                      serious passion for coding dynamic user experiences.
                    </Flip>

                    <Flip bottom>
                      Well-organized person, former PM, independent employee
                      with high attention to details. I love outdoor
                      activities,watching movies and books. A family person and
                      a mother of my daughter.
                    </Flip>
                    <Flip bottom>
                      Interested in the entire frontend spectrum and working on
                      ambitious projects with positive people.
                    </Flip>

                    <UnorderedList>
                      <List>
                        <Bold>Full Name</Bold> : Muslimova Dildora
                      </List>
                      <List>
                        <Bold>Age</Bold> : 36 Years old
                      </List>
                      <List>
                        <Bold>Nationality</Bold> : Uzbek
                      </List>
                      <List>
                        <Bold>Languages</Bold> : Russian, English, Japanese,
                        Uzbek
                      </List>
                      <List>
                        <Bold>Address</Bold> : 9 Iltifot Street, Tashkent,
                        Uzbekistan
                      </List>
                      <List>
                        <Bold>Freelance</Bold> : Available
                      </List>
                    </UnorderedList>
                  </P>
                </div>
              </div>
            </div>

            <Skills className="skills">
              <SkillsTitle className="skills__title">My Skills</SkillsTitle>

              <Icons>
                <Rotate top left>
                  <Tooltip title="HTML">
                    <AiOutlineHtml5 title="HTML" style={{ color: "#E96228" }} />
                  </Tooltip>
                  <Tooltip title="CSS">
                    <IoLogoCss3 title="CSS" style={{ color: "#254BDD" }} />
                  </Tooltip>
                  <Tooltip title="Sass">
                    <DiSass title="Sass" style={{ color: "#C76494" }} />
                  </Tooltip>
                  <Tooltip title="JavaScript">
                    <DiJavascript1
                      title="JavaScript"
                      style={{ color: "#F5DE18" }}
                    />
                  </Tooltip>
                  <Tooltip title="React">
                    <FaReact title="React" style={{ color: "#5ED3F3" }} />
                  </Tooltip>
                  <Tooltip title="npm">
                    <DiNpm title="npm" style={{ color: "#C53635" }} />
                  </Tooltip>
                  <Tooltip title="Typescript">
                    <SiTypescript
                      title="Typescript"
                      style={{ color: "#0176C5" }}
                    />
                  </Tooltip>
                  <Tooltip title="Github">
                    <BsGithub title="Github" style={{ color: "#000000" }} />
                  </Tooltip>
                  <Tooltip title="Redux">
                    <SiRedux title="Redux" style={{ color: "#7248B6" }} />
                  </Tooltip>
                  <Tooltip title="GraphQL">
                    <SiGraphql title="GraphQL" style={{ color: "#DE33A6" }} />
                  </Tooltip>
                  <Tooltip title="Bootstrap">
                    <BsBootstrap
                      title="Bootstrap"
                      style={{ color: "#7612F2" }}
                    />
                  </Tooltip>
                  <Tooltip title="Git">
                    <FaGitAlt title="Git" style={{ color: "#E84E31" }} />
                  </Tooltip>
                  <Tooltip title="Gitlab">
                    <SiGitlab title="Gitlab" style={{ color: "#E84E31" }} />
                  </Tooltip>
                  <Tooltip title="Material UI">
                    <SiMaterialui
                      title="Material UI"
                      style={{ color: "#09ABF7" }}
                    />
                  </Tooltip>
                  <Tooltip title="Netlify">
                    <SiNetlify title="Netlify" style={{ color: "#419FB7" }} />
                  </Tooltip>
                  <Tooltip title="Figma">
                    <SiFigma title="Figma" style={{ color: "#000" }} />
                  </Tooltip>
                </Rotate>
              </Icons>
            </Skills>

            <span className="tags bottom-tags">
              <br /> &lt;/body&gt;{" "}
            </span>
          </div>
        </AboutPage>
      )}
    </>
  );
};

export default About;
