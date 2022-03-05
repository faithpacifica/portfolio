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
  padding: 80px;
  display: flex;
`;

const AboutHeader = styled.h1`
  font-family: "Spectral", serif;
  font-weight: 700;
  padding-left: 2rem;
  padding-right: 2rem;
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
    margin-top: -2rem;
    left: -1rem;
  }
  &:after {
    content: "<h2/>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 2rem;
    position: absolute;
    left: -1rem;
    bottom: -2rem;
  }

  span {
    transition: all 0.5s ease-out;
    font-size: 5.5rem;
    display: inline-block;

    &:hover {
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-name: rubberBand;
    }
  }
`;

const P = styled.p`
  padding: 10px;
  font-size: 1.4rem;
  line-height: 1.5;
  color: white;
  font-family: "Open Sans", sans-serif;
  text-indent: 25px;
  font-style: italic;
  &:before {
    content: "<p>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 2rem;
    position: absolute;
    margin-top: -2rem;
    left: -2rem;
  }
  &:after {
    content: "<p/>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 2rem;
    position: absolute;
    left: -2rem;
    bottom: 18rem;
  }
`;

const Skills = styled.div`
  padding: 30px 0;
`;

const SkillsTitle = styled.h2`
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
  }
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
              <div className="section-full page-about js-page-about">
                <div className="text-zone">
                  <header>
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
                      <i>
                        I'm a Front-End Developer living Uzbekistan. I have a
                        serious passion for coding dynamic user experiences.
                      </i>
                    </Flip>

                    <Flip bottom>
                      <i>
                        Well-organized person, former PM, independent employee
                        with high attention to details. I love outdoor
                        activities,watching movies and books. A family person
                        and a mother of my daughter.
                      </i>
                    </Flip>
                    <Flip bottom>
                      <i>
                        Interested in the entire frontend spectrum and working
                        on ambitious projects with positive people.
                      </i>
                    </Flip>
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
                    <DiJavascript1 title="JavaScript" style={{ color: "#F5DE18" }} />
                  </Tooltip>
                  <Tooltip title="React">
                    <FaReact title="React" style={{ color: "#5ED3F3" }} />
                  </Tooltip>
                  <Tooltip title="npm">
                    <DiNpm title="npm" style={{ color: "#C53635" }} />
                  </Tooltip>
                  <Tooltip title="Typescript">
                    <SiTypescript title="Typescript" style={{ color: "#0176C5" }} />
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
                    <BsBootstrap title="Bootstrap" style={{ color: "#7612F2" }} />
                  </Tooltip>
                  <Tooltip title="Git">
                    <FaGitAlt title="Git" style={{ color: "#E84E31" }} />
                  </Tooltip>
                  <Tooltip title="Gitlab">
                    <SiGitlab  title="Gitlab" style={{ color: "#E84E31" }} />
                  </Tooltip>
                  <Tooltip title="Material UI">
                    <SiMaterialui title="Material UI" style={{ color: "#09ABF7" }} />
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
