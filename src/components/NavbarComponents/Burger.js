import React, { useState } from "react";
import styled from "styled-components";
import Right from "./Right";

const Burger = () => {
  const [open, setOpen] = useState(false);

  const StyledBurger = styled.div`
    width: auto;
    height: 2rem;
    position: fixed;
    right: 20px;
    z-index: 20;
    display: none;

    @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
      align-items: flex-end;
    }
    div {
      height: 0.25rem;
      background-color: ${({ open }) => (open ? `#fff` : `#000`)};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.5s ease-in-out;

      &:nth-child(1) {
        width: ${({ open }) => (open ? "2rem" : "2.5rem")};
        transform: ${({ open }) => (open ? `rotate(45deg)` : `rotate(0)`)};
      }
      &:nth-child(2) {
        width: ${({ open }) => (open ? "2rem" : "2rem")};
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        width: ${({ open }) => (open ? "2rem" : "1.5rem")};
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  `;

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Right open={open} />
    </>
  );
};

export default Burger;
