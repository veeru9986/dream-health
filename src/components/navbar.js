import React from "react";
import styled from "styled-components";
import { Wrapper } from "./StyledComponents/Wrapper";
import Logo from "../assets/logo.svg";
import Burger from "./NavbarComponents/Burger";

const Nav = styled.nav`
  grid-area: auto/2/auto/3;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (min-width: 1700px){
    width: 80%;
  }
  .logo {
    svg {
      width: 120px;
      @media (max-width: 479px){
        width: 90px;
      }
  }
}
`;

function Navbar() {
  return (
    <Wrapper>
      <Nav>
        <div className="logo">
          <Logo />
        </div>
        <Burger />
      </Nav>
    </Wrapper>
  );
}

export default Navbar;
