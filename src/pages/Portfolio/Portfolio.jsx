import "./portfolio.css";
import { projects } from "../../data";
import { useState, useEffect } from "react";
import styled from "styled-components";

// ******************************************
const PortfolioSection = styled.section`
  margin: 0;
  padding: 40px 30px;
`;

const Tab = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: 40px;
`;

const TabButton = styled.button`
  position: relative;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  background-color: transparent;
  border: 2px solid #6c81d1;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.4s ease-out;

  @media (max-width: 833px) {
    padding: 5px 20px;
  }

  @media (max-width: 767px) {
    padding: 5px 10px;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    background-color: #6c81d1;
    color: #fff;
  }
  &.active {
    background-color: #6c81d1;
    &:after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 10px solid #6c81d1;
      bottom: -12px;
      left: 50%;
      margin-left: -8px;
    }
  }
  p {
    margin: 0;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ProjectsContainer = styled.div`
  h4 {
    margin: 0;
    font-size: 25px;
    margin-bottom: 15px;
  }
`;

const PortfolioTitle = styled.h1`
  font-family: "Spectral", serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 2rem;
  transition: all 0.5s ease-out;
  margin-bottom: 50px;

  @media (max-width: 833px) {
    font-size: 2.4rem;
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }

  span {
    color: #6c81d1;
    font-weight: 500;
    display: inline-block;
    position: relative;
    transition: all 0.5s ease-out;

    &:hover {
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-name: rubberBand;
    }
  }
`;

const ProjectCard = styled.div`
  width: 300px;
  height: 300px;
  margin-bottom: 50px;
  margin-right: 10px;
  margin-left: 10px;
  transition: all 0.2s linear;
  transform: scale(1);

  @media (max-width: 992px) {
    width: 250px !important;
    height: 260px !important;
  }

  &:hover {
    transform: scale(1.01);
    z-index: 100;
    box-shadow: 0 4px 6px #a4acc4;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// **************************************************
export default function Portfolio() {
  const skillType = ["All", "HTML/CSS", "JavaScript", "React"];
  const [projectsInput, setProjectsInput] = useState([]);

  useEffect(() => {
    setProjectsInput(projects);
  }, []);

  const [currentSkill, setCurrentSkill] = useState("All");

  const handleClick = (e, el) => {
    let projectsMassive;
    setCurrentSkill(el);

    if (e.target.innerText === "All") {
      projectsMassive = projects;
    } else {
      projectsMassive = projects.filter((el) => {
        return el.categories === e.target.innerText;
      });
    }
    setProjectsInput(projectsMassive);
  };

  return (
    <PortfolioSection id="projects" className="projects__wrapper">
      <PortfolioTitle>
        <span className="blast" aria-hidden="true">
          R
        </span>
        <span className="blast" aria-hidden="true">
          E
        </span>
        <span className="blast" aria-hidden="true">
          C
        </span>
        <span className="blast" aria-hidden="true">
          E
        </span>
        <span className="blast" aria-hidden="true">
          N
        </span>
        <span className="blast letter-space" aria-hidden="true">
          T
        </span>
        <span className="blast " aria-hidden="true">
          P
        </span>
        <span className="blast" aria-hidden="true">
          R
        </span>
        <span className="blast" aria-hidden="true">
          O
        </span>
        <span className="blast " aria-hidden="true">
          J
        </span>
        <span className="blast" aria-hidden="true">
          E
        </span>
        <span className="blast" aria-hidden="true">
          C
        </span>
        <span className="blast " aria-hidden="true">
          T
        </span>
        <span className="blast" aria-hidden="true">
          S
        </span>
      </PortfolioTitle>
      <Tab>
        {skillType.map((el, i) => (
          <TabButton key={i} className={el === currentSkill ? "active" : ""}>
            <p onClick={(event) => handleClick(event, el)}>{el}</p>
          </TabButton>
        ))}
      </Tab>
      <ProjectsWrapper>
        {projectsInput.map((el) => (
          <ProjectsContainer key={el.id}>
            <h4>{el.title}</h4>

            <ProjectCard
              style={{ width: "300px", height: "300px", objectFit: "contain" }}
            >
              <a href={el.link} target="_blank" rel="noreferrer">
                <img src={el.image} alt={el.title} />
              </a>
            </ProjectCard>
          </ProjectsContainer>
        ))}
      </ProjectsWrapper>
    </PortfolioSection>
  );
}
