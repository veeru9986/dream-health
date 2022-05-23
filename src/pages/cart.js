import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartJ from "../components/CartComponents/Cart";
import { Wrapper } from "../components/StyledComponents/Wrapper";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  h2 {
    font-weight: var(--xheavyWeight);
  }

  @media (min-width: 1700px) {
    width: 80%;
  }
`;

const EmptyContainer = styled(Container)`
   min-height: 50vh;
   justify-content: center;
   align-items: center;
   display: flex;
`

function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <Wrapper>
      {cart.length ? (
        <Container>
          <h2>Items in Cart</h2>
          <div>
            <CartJ cart={cart} />
          </div>
        </Container>
      ) : (
        <EmptyContainer>
          <h2>Nothing in cart to show.</h2>
        </EmptyContainer>
      )}
    </Wrapper>
  );
}

export default Cart;
