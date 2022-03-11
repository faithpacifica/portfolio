import React from "react";
import "./resume.css";
import styled from "styled-components";
import { useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Hamburger from '../../components/Hamburger';
import { BsBriefcase } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
// ****************************************

const ResumeSection = styled.div`
  padding: 25px;
  margin: 0 auto;
`;

const ResumeTitle = styled.h1`
  font-family: "Spectral", serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 2rem;
  transition: all 0.5s ease-out;
  margin-bottom: 40px;
  @media (max-width: 525px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
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

const ResumeSubtitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h4 {
    margin: 0;
    font-size: 1.71rem;
    line-height: 2.43rem;
    font-weight: 700;
    color: #fff;
    @media (max-width: 525px) {
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
  }
`;

const ResumeSubtitleIcon = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-size: 1.8rem;
  line-height: 1.43rem;
  svg path {
    fill: #a4acc4;
  }
`;

const ResumeWrapper = styled.div`
  border-left: 3px solid #2e344e;
  margin-bottom: 40px;
`;

const ResumeItem = styled.div`
  display: flex;
  margin-bottom: 35px;
  @media (max-width: 525px) {
    display: block;
  }
`;

const ResumeSummary = styled.div`
  align-self: flex-start;
  flex: 0 0 220px;
  max-width: 220px;
  padding-left: 20px;
  position: relative;
  h6 {
    margin: 0;
    margin-bottom: 10px;
    color: #a4acc4;
    margin-bottom: 10px;
    font-size: 1.14rem;
    line-height: 1.8rem;
    @media (max-width: 767px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: -9px;
    top: 6px;
    height: 15px;
    width: 15px;
    border-radius: 100px;
    background: #10121b;
    border: 3px solid #2e344e;
  }
`;

const ResumeDetails = styled.div`
  position: relative;
  padding-left: 50px;
  @media (max-width: 991px) {
    padding-left: 35px;
  }
  @media (max-width: 525px) {
    padding-left: 20px;
  }

  h5 {
    margin: 0;
    color: #6c81d1;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.43rem;
    line-height: 2.14rem;
    @media (max-width: 991px) {
      line-height: 1.6rem;
    }
    @media (max-width: 767px) {
      line-height: 1.4rem;
      font-size: 1.2rem;
    }
  }
  h6 {
    margin: 0;
    color: #fff;
    font-size: 1.14rem;
    line-height: 1.8rem;
  }
  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.8rem;
    font-family: "Nunito", sans-serif;
    color: #a4acc4;
    font-weight: 400;
    @media (max-width: 991px) {
      font-size: 16px;
      line-height: 1.3rem;
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 15px;
    height: 1px;
    width: 25px;
    background: #2e344e;

    @media (max-width: 525px) {
      content: none;
    }
  }
`;

const Resume = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  // ************************************************************

  return (
    <>
      {loading ? (
        <ProgressBar />
      ) : (
        <ResumeSection>
          <ResumeTitle>
            <span className="blast" aria-hidden="true">
              R
            </span>
            <span className="blast" aria-hidden="true">
              E
            </span>
            <span className="blast" aria-hidden="true">
              S
            </span>
            <span className="blast" aria-hidden="true">
              U
            </span>
            <span className="blast" aria-hidden="true">
              M
            </span>
            <span className="blast" aria-hidden="true">
              E
            </span>
          </ResumeTitle>

         <Hamburger/>

          <div className="resume resume__body">
            <div className="container">
              <ResumeSubtitle className="resume-subtitle">
                <ResumeSubtitleIcon className="resume-subtitle__icon">
                  <BsBriefcase />
                </ResumeSubtitleIcon>
                <h4>Working Experience</h4>
              </ResumeSubtitle>

              <ResumeWrapper className="resume-wrapper">
                <ResumeItem className="resume-item">
                  <ResumeSummary className="resume-summary">
                    <h6 className="resume-year">
                      2021.12 - 2022.2 <div>Tashkent, Uzbekistan</div>
                    </h6>
                  </ResumeSummary>
                  <ResumeDetails className="resume-details">
                    <h5> INTERN</h5>
                    <h6 className="resume-company">Abutech Company </h6>
                    <p>
                      {" "}
                      Working with a team of 5 developers on legacy projects
                      applying DRY, SOLID, clean code principles, fixing bugs,
                      moreover, learned Typescript, GraphQL, Redux
                      technologies.{" "}
                    </p>
                  </ResumeDetails>
                </ResumeItem>

                <ResumeItem className="resume-item">
                  <ResumeSummary className="resume-summary">
                    <h6 className="resume-year">
                      2020 - present <div>Tashkent, Uzbekistan</div>
                    </h6>
                  </ResumeSummary>
                  <ResumeDetails className="resume-details">
                    <h5>PRIVATE TUTOR OF JAPANESE</h5>
                    <h6 className="resume-company"> </h6>
                  </ResumeDetails>
                </ResumeItem>

                <ResumeItem className="resume-item">
                  <ResumeSummary className="resume-summary">
                    <h6 className="resume-year">
                      2019 - 2020 <div>Tashkent, Uzbekistan</div>
                    </h6>
                  </ResumeSummary>
                  <ResumeDetails className="resume-details">
                    <h5> TRANSLATOR</h5>
                    <h6 className="resume-company">
                      Japan Digital University{" "}
                    </h6>
                    <p>
                      {" "}
                      Translation of University lectures (Japanese – Uzbek)
                    </p>
                  </ResumeDetails>
                </ResumeItem>

                <ResumeItem className="resume-item">
                  <ResumeSummary className="mi-resume-summary">
                    <h6 className="resume-year">
                      2016 - 2019 <div>Tokyo, Japan</div>
                    </h6>
                  </ResumeSummary>
                  <ResumeDetails className="resume-details">
                    <h5>PROJECT MANAGER ASSISTANT</h5>
                    <h6 className="resume-company">
                      Mitsubishi Research Institute
                    </h6>
                    <p>
                      Justification of accounting documents written in Russian
                      for their compliance with the regulations
                      <br />
                      Preparation of reporting materials to the Ministry of
                      Economy, Trade and Industry
                      <br />
                      Correspondence with Russian companies <br />
                      Coordination and organization of online and offline
                      meetings between business partners <br />
                      Monitoring the legislation of the Russian Federation "On
                      nuclear energy", data mining
                      <br />
                      Recording minutes Conducting telephone negotiations with
                      Russian entities
                      <br />
                      Compose manual for the conduct of business projects,
                      systematization and presentation of data
                      <br />
                      Russian - English - Japanese translations
                    </p>
                  </ResumeDetails>
                </ResumeItem>

                <ResumeItem className="resume-item">
                  <ResumeSummary className="resume-summary">
                    <h6 className="resume-year">
                      2015 - 2016 <div>Tokyo, Japan</div>
                    </h6>
                  </ResumeSummary>
                  <ResumeDetails className="resume-details">
                    <h5>COORDINATOR</h5>
                    <h6 className="resume-company">
                      Waseda University Center for International Education{" "}
                    </h6>
                    <p>
                      Coordinator-supporter of international students Paperwork,
                      preparation of documents to the Ministry of Education
                    </p>
                  </ResumeDetails>
                </ResumeItem>

                <ResumeItem className="resume-item">
                  <ResumeSummary className="resume-summary">
                    <h6 className="resume-year">
                      {" "}
                      2014 – 2015 <div>Tokyo, Japan</div>
                    </h6>
                  </ResumeSummary>
                  <ResumeDetails className="resume-details">
                    <h5> ADMINISTRATIVE ASSISTANT</h5>
                    <h6 className="resume-company">
                      Premium Financial Services Co., Ltd{" "}
                    </h6>
                    <p>
                      Working with customer database, processing customer
                      information
                    </p>
                  </ResumeDetails>
                </ResumeItem>
              </ResumeWrapper>

              <ResumeSubtitle className="resume-subtitle">
                <ResumeSubtitleIcon className="resume-subtitle__icon">
                  <GiBlackBook />
                </ResumeSubtitleIcon>
                <h4>Educational Qualifications</h4>
              </ResumeSubtitle>

              <ResumeWrapper className="resume-wrapper">
                <ResumeItem className="resume-item">
                  <ResumeSummary className="resume-summary">
                    <h6 className="resume-year">
                      2021 - 2022 <div>Tashkent, Uzbekistan</div>
                    </h6>
                  </ResumeSummary>
                  <ResumeDetails className="resume-details">
                    <h5>Frontend Developer</h5>
                    <h6 className="resume-company">
                      Najot Talim Educational Center{" "}
                    </h6>
                    <p>
                      I studied at Frontend Developers Bootcamp, including
                      internship, with the duration of 1 year, that greatly
                      boosted my knowledge and curiosity about IT. Gained
                      skills: HTML, CSS, Bootstrap, Sass, JavaScript, React,
                      Redux ,BEM
                    </p>
                  </ResumeDetails>
                </ResumeItem>

                <ResumeItem className="resume-item">
                  <ResumeSummary className="resume-summary">
                    <h6 className="resume-year">
                      2008 - 2010 <div>Tokyo, Japan</div>
                    </h6>
                  </ResumeSummary>
                  <ResumeDetails className="resume-details">
                    <h5>MEXT program research student </h5>
                    <h6 className="resume-company">Hitotsubashi University </h6>
                  </ResumeDetails>
                </ResumeItem>

                <ResumeItem className="resume-item">
                  <ResumeSummary className="resume-summary">
                    <h6 className="resume-year">
                      2005 - 2006 <div>Tokyo, Japan</div>
                    </h6>
                  </ResumeSummary>
                  <ResumeDetails className="resume-details">
                    <h5>MEXT program trainee</h5>
                    <h6 className="resume-company">Gunma University</h6>
                  </ResumeDetails>
                </ResumeItem>

                <ResumeItem className="resume-item">
                  <ResumeSummary className="resume-summary">
                    <h6 className="resume-year">
                      2003 - 2008 <div>Tashkent, Uzbekistan</div>
                    </h6>
                  </ResumeSummary>
                  <ResumeDetails className="resume-details">
                    <h5>Bachelor of Interenational Economic Relations</h5>
                    <h6 className="resume-company">
                      Tashkent State University of Oriental Studies
                    </h6>
                  </ResumeDetails>
                </ResumeItem>
              </ResumeWrapper>
            </div>
          </div>
        </ResumeSection>
      )}
    </>
  );
};

export default Resume;
