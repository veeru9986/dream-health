import React from "react";
import styled from "styled-components";
import { Wrapper } from "./StyledComponents/Wrapper";
import Logo from "../assets/logo.svg";
import { footerNavigationItems } from "../constants/footer-item";
import { Link } from "gatsby";

const FooterWrapper = styled(Wrapper)`
  background-color: #fbfbfb;
  padding: 4rem 0;
  @media (max-width: 650px) {
    padding: 2rem 0;
  }
`;
const Container = styled.div`
  grid-area: auto/2/auto/3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  grid-column-gap: 0.75rem;


  @media (min-width: 1700px){
    width: 80%;
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .grid-1,
  .grid-2,
  .grid-3,
  .grid-4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 991px) {
      align-items: flex-start;
    }
    h4 {
      font-size: 18px;
      font-weight: var(--mediumWeight);
    }

    h6 {
      font-size: 16px;
      font-weight: var(--lightWeight);
      margin: 0;
      text-align: left;
    }
  }
  .grid-1 {
    grid-area: auto/1/auto/2;
    @media (max-width: 991px) {
      grid-area: auto/1/auto/3;
    }
    @media (max-width: 650px) {
      grid-area: 1/1/2/4;
    }
    h4 {
      font-size: 16px;
      font-weight: var(--mediumWeight);
    }

    .logo {
      display: block;
      width: auto;
      svg {
        width: 150px;
      }
    }
    p {
      font-size: 16px;
      font-weight: var(--lightWeight);
      color: #060708;
    }
  }
  .grid-2 {
    grid-area: auto/2/auto/3;
    margin-top: 3.5rem;
    @media (max-width: 991px) {
      grid-area: auto/1/auto/2;
    }
    @media (max-width: 650px) {
      grid-area: auto/1/auto/4;
      margin-top: 2rem;
    }
    a {
      color: #000;
      text-decoration: none;
      text-transform: capitalize;
      font-size: 16px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin-bottom: 0;
      @media (max-width: 991px) {
        margin-left: 0;
      }

      li {
        padding-bottom: 5px;
        &:last-child {
          padding-bottom: 0;
        }
      }
    }
  }
  .grid-3 {
    grid-area: auto/3/auto/4;
    margin-top: 3.5rem;
    @media (max-width: 991px) {
      grid-area: auto/2/auto/3;
    }
    @media (max-width: 650px) {
      grid-area: 3/1/4/4;
      margin-top: 2rem;
    }
    .grid-3-3 {
      margin-top: 1rem;
    }
  }
  .grid-4 {
    grid-area: auto/4/auto/5;
    margin-top: 3.5rem;
    @media (max-width: 991px) {
      grid-area: auto/3/auto/4;
    }
    @media (max-width: 650px) {
      grid-area: 2/1/3/4;
      margin-top: 2rem;
    }
    .grid-4-4 {
      margin-top: 1rem;
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <div className="grid-1">
          <div className="grid-1-1">
            <div className="logo">
              <Logo />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              non, at amet integer scelerisque congue pellentesque at vehicula.
              Nam elementum faucibus tellus.
            </p>
            <div className="grid-1-row">
              <h4>Follow Us On</h4>
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
        <div className="grid-2">
          <div>
            <h4>Navigation</h4>
            <ul>
              {footerNavigationItems.map((f, id) => (
                <li key={id}>
                  <Link to={f.path}>{f.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid-3">
          <div>
            <h4>Information</h4>
            <div className="grid-3-3">
              <h6>
                Phone No : <span></span>
              </h6>
              <h6>
                Email : <span></span>
              </h6>
              <h6>
                Address of lab : <span></span>
              </h6>
            </div>
          </div>
        </div>
        <div className="grid-4">
          <div>
            <h4>Opening Hours</h4>
            <div className="grid-4-4">
              <h6>
                Mon - Fri <span>7:00 - 20:00</span>
              </h6>
              <h6>
                Sat - Sun <span>7:00 - 21:00</span>
              </h6>
            </div>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
