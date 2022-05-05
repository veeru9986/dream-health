import React from "react";
import styled from "styled-components";
import Logo from "../assets/main-logo.svg";
import Burger from "./NavbarComponents/Burger";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  grid-template-rows: auto;
  width: 100%;
  height: auto;

  margin-top: ${({ positionS }) => (positionS ? "2rem" : "0")};
  place-items: center;
  position: ${({ positionS }) => (positionS ? "none" : "absolute")};
  padding-top: ${({ positionS }) => (positionS ? "0" : "2rem")};

  @media (max-width: 767px) {
    margin-top: 1rem;
    padding-top: 0;
  }
`;
const Nav = styled.nav`
  grid-area: auto/2/auto/3;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1700px) {
    width: 80%;
  }
  .logo {
    z-index: 11;
    svg {
      width: 120px;
      @media (max-width: 479px) {
        width: 90px;
      }
    }
  }
`;

function Navbar(props) {
  const { username } = useSelector((state) => state.user);
  const data = useStaticQuery(graphql`
    {
      strapiNavbar {
        navbar {
          id
          link_to
          title
        }
      }
    }
  `);

  // console.log(data.strapiNavbar.data.attributes.navbar);

  return (
    <Wrapper positionS={props.positionS}>
      <Nav>
        <div className="logo">
          <Link to="/" style={{ display: "flex" }}>
            <Logo />
          </Link>
        </div>
        <Burger data={data.strapiNavbar.navbar} username={username} />
      </Nav>
    </Wrapper>
  );
}

export default Navbar;
