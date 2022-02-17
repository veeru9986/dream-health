import React from "react";
import styled from "styled-components";
import { Wrapper } from "./StyledWrapper/Wrapper";
import Logo from "../assets/logo.svg";
import Burger from "./NavbarComponents/Burger";

const Nav = styled.nav`
  grid-area: auto/2/auto/3;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    svg {
      width: 120px;
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
