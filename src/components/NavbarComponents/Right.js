import React from "react";
import { Link } from "gatsby";
import { mainMenuItems } from "../../constants/menu-item";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a{
      text-decoration: none;
  }
  li {
    padding: 18px 10px;
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    a {
      color: #fff;
    }
  }
`;

const Right = ({ open }) => {
  return (
    <>
      <UL open={open}>
        {mainMenuItems.map((m, id) => (
          <li key={id}>
            <Link to={m.path}>{m.title}</Link>
          </li>
        ))}
      </UL>
    </>
  );
};

export default Right;
