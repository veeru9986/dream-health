import React from "react";
import { Link } from "gatsby";
import { mainMenuItems } from "../../constants/menu-item";
import styled from "styled-components";
import { LinkStyled } from "../StyledComponents/Wrapper";
import Cart from "../../assets/cart.svg";

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  .menu-links {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    font-size: 18px;
    /* identical to box height */

    color: #060708;
  }
  li {
    padding: 18px 20px;
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 6.5rem;
    transition: transform 0.3s ease-in-out;

    .menu-links {
      color: #000;
    }
  }
`;

const Right = ({ open }) => {
  return (
    <>
      <UL open={open}>
        {mainMenuItems.map((m, id) => (
          <li key={id}>
            <Link className="menu-links" to={m.path}>
              {m.title}
            </Link>
          </li>
        ))}
        <li>
          <LinkStyled to="/">Sign in</LinkStyled>
        </li>
        <li>
          <Link to="/">
            <Cart />
          </Link>
        </li>
      </UL>
    </>
  );
};

export default Right;
