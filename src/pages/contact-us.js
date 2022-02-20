import React from "react";
import styled from "styled-components";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Wrapper } from "../components/StyledComponents/Wrapper";
import FInput from "../components/FInput";
import ContactUsForm from "../components/ContactUsComponents/ContactUsForm";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  grid-template-rows: auto;

  h2 {
    font-weight: var(--xheavyWeight);
  }

  @media (min-width: 1700px) {
    width: 80%;
  }

  .left-section-section {
    display: flex;
    grid-area: 1/1/3/2;
    background-color: #ebebeb;
    @media (max-width: 767px) {
      grid-area: 2/1/3/3;
      width: 100%;
      height: 200px;
    }
  }

  .right-section-section_one {
    grid-area: auto/2/auto/3;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 767px) {
      grid-area: 1/1/2/3;
    }

    .contact-wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .c-wrapper {
        display: flex;
        width: 270px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding-right: 1rem;
        span {
          margin-left: 1rem;
          font-size: var(--p2);
        }
      }
    }
  }
  .get-in-touch-wrapper {
    margin-top: 1rem;
    grid-area: auto/2/auto/3;
    @media (max-width: 767px) {
      grid-area: 3/1/4/3;
    }
    .get-in-touch {
      margin-top: 1rem;
    }
  }
`;

function ContactUs() {
  return (
    <Wrapper>
      <Container>
        <div className="left-section-section">
          <div className="left-section" />
        </div>
        <div className="right-section-section_one">
          <div className="heading">
            <h2>Contact</h2>
          </div>
          <div className="contact-wrapper">
            <div className="c-wrapper">
              <LocalPostOfficeIcon />
              <span>example@abc.com</span>
            </div>
            <div className="c-wrapper">
              <PhoneIcon />
              <span>+91 - 324- 695 - 7478</span>
            </div>
            <div className="c-wrapper">
              <LocationOnIcon />
              <span>1, Trade Corner, Saki Naka Junction, Mg Rd, Saki Naka</span>
            </div>
            <div className="c-wrapper">
              <AccessTimeFilledIcon />
              <span>Mon-Fri: 8am to 6pm</span>
            </div>
          </div>
        </div>
        <div className="get-in-touch-wrapper">
          <div className="heading">
            <h2>Get in touch</h2>
          </div>
          <div className="get-in-touch">
            <ContactUsForm />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default ContactUs;
