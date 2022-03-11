import React from "react";
import "./contact.css";
import styled from "styled-components";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiMapPinLine } from "react-icons/ri";
// ****************************************

const ContactTitle = styled.h1`
  font-family: "Spectral", serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 2rem;
  transition: all 0.5s ease-out;
  margin-bottom: 50px;
  @media (max-width: 425px) {
    font-size: 2.4rem;
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
const ContactSection = styled.div`
  padding: 40px 20px;
`;

const ContactDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    display: block;
  }
`;

const InfoBlock = styled.div`
  background: #191d2b;
  padding: 30px;
  display: flex;
  justify-content: space- between;
  align-items: start;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
  @media (max-width: 425px) {
    padding: 10px;
  }
`;

const InfoBlockIcon = styled.span`
  display: inline-block;
  height: 70px;
  width: 70px;
  flex: 0 0 70px;
  max-width: 70px;
  border: 1px solid #2e344e;
  text-align: center;
  margin-right: 20px;
  padding: 10px;
  svg {
    font-size: 30px;
  }
`;

const ContactContextIitle = styled.h4`
  margin: 0;
  font-size: 1.14rem;
  line-height: 1.857rem;
  color: #fff;
`;

const ContactContent = styled.div`
  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.8rem;
    font-family: "Nunito", sans-serif;
    color: #a4acc4;
    font-weight: 400;
  }
  a {
    color: #a4acc4;
    transition: all 0.4s ease-out;
    @media (max-width: 425px) {
      font-size: 15px;
    }
    &:hover {
      color: #6c81d1;
    }
  }
  address {
    @media (max-width: 425px) {
      font-size: 15px;
    }
  }
`;

const ContactInfo = styled.div`
  width: 49%;
  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ContactMap = styled.div`
  width: 49%;
  @media (max-width: 992px) {
    width: 100%;
  }

  iframe {
    width: 100%;
    display: block;
    object-fit: cover;
  }
`;
// *************************************
const Contact = () => {
  return (
    <ContactSection>
      <ContactTitle>
        <span className="blast" aria-hidden="true">
          C
        </span>
        <span className="blast" aria-hidden="true">
          O
        </span>
        <span className="blast" aria-hidden="true">
          N
        </span>
        <span className="blast" aria-hidden="true">
          T
        </span>
        <span className="blast" aria-hidden="true">
          A
        </span>
        <span className="blast" aria-hidden="true">
          C
        </span>
        <span className="blast letter-space" aria-hidden="true">
          T
        </span>
        <span className="blast" aria-hidden="true">
          M
        </span>
        <span className="blast" aria-hidden="true">
          E
        </span>
      </ContactTitle>

      <ContactDetails>
        <ContactInfo className="contact-info">
          <InfoBlock className="contact-info__block">
            <InfoBlockIcon className="contact-info__block__icon">
              <BsTelephone />
            </InfoBlockIcon>

            <ContactContent className="contact-content">
              <ContactContextIitle>Phone</ContactContextIitle>
              <p>
                <a href="tel:+99897-268-60-30">+99897-268-60-30</a>
              </p>
            </ContactContent>
          </InfoBlock>

          <InfoBlock className="contact-info__block">
            <InfoBlockIcon className="contact-info__block__icon">
              <HiOutlineMail />
            </InfoBlockIcon>

            <ContactContent className="contact-content">
              <ContactContextIitle>Email</ContactContextIitle>
              <p>
                <a href="mailto:faithpacifica@yahoo.com">
                  faithpacifica@yahoo.com
                </a>
              </p>
              <p>
                <a href="mailto:faithpacifica@gmail.com">
                  faithpacifica@gmail.com
                </a>
              </p>
            </ContactContent>
          </InfoBlock>

          <InfoBlock className="contact-info__block">
            <InfoBlockIcon className="contact-info__block__icon">
              <RiMapPinLine />
            </InfoBlockIcon>
            <ContactContent className="contact-content">
              <ContactContextIitle>Address</ContactContextIitle>
              <address>
                9 Iltifot Street, Yashnabad District, Tashkent, Uzbekistan
              </address>
            </ContactContent>
          </InfoBlock>
        </ContactInfo>

        <ContactMap className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6928.192964149718!2d69.34995539221646!3d41.28052840398892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5f5fc5e6cdc7%3A0xbfb6f3427bffbc73!2zNC3QkdC10LrQsNGC!5e0!3m2!1sru!2s!4v1640327358859!5m2!1sru!2s"
            width="400"
            height="400"
            title="googleMap"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </ContactMap>
      </ContactDetails>
    </ContactSection>
  );
};

export default Contact;
