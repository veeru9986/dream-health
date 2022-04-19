import React, { useRef } from "react";
import { Link } from "gatsby";
import { mainMenuItems } from "../../constants/menu-item";
import styled from "styled-components";
import { LinkStyled } from "../StyledComponents/Wrapper";
import Cart from "../../assets/cart.svg";
import { useSelector } from "react-redux";

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
    transition: 0.3s ease-in-out;
    color: #060708;
  }
  .menu-links:hover {
    color: var(--medBlue);
  }
  .menu-links-active {
    color: var(--medBlue);
    text-decoration: underline;
    text-decoration-color: var(--medBlue);
    text-decoration-thickness: 2px;
  }

  .cart-active {
    svg,
    g {
      fill: var(--medBlue);
    }
  }
  .cart {
    transition: 0ms.3s ease-in-out;
  }
  .cart:hover {
    svg,
    g {
      fill: var(--medBlue);
    }
  }
  li {
    padding: 18px 20px;
    text-transform: capitalize;
  }

  .avatar-wrapper {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 6.5rem;
    transition: transform 0.3s ease-in-out;
    padding-left: 0;
    z-index: 10;

    .menu-links {
      color: #000;
    }
  }
`;

const Right = ({ open, setOpen, data }) => {
  console.log(data[0].title);

  const cart = useSelector((state) => state.cart.cartItems);
  const { token, username, user } = useSelector((state) => state.user);
  console.log(user);
  // const { data: user, isError, isLoading } = useGetUserQuery();
  // console.log(user);

  const totalCart =
    cart && cart.reduce((count, product) => count + product.cartQuantity, 0);
  return (
    <>
      <UL open={open}>
        {data.map((n) => (
          <li key={n.id}>
            <Link
              className="menu-links"
              activeClassName="menu-links-active"
              to={n.link_to}
              onClick={() => setOpen(!open)}
            >
              {n.title}
            </Link>
          </li>
        ))}
        {!token ? (
          <li>
            <LinkStyled to="/sign-in" onClick={() => setOpen(!open)}>
              Sign in
            </LinkStyled>
          </li>
        ) : (
          <li className="avatar-wrapper">
            <Link
              className="menu-links"
              style={{ fontSize: "2rem" }}
              to="/profile"
              onClick={() => setOpen(!open)}
            >
              {username && username.charAt(0)}{" "}
            </Link>
          </li>
        )}

        <li>
          <Link
            to="/cart"
            activeClassName="cart-active"
            onClick={() => setOpen(!open)}
            className="cart"
          >
            <Cart /> {totalCart}
          </Link>
        </li>
      </UL>
    </>
  );
};

export default Right;
