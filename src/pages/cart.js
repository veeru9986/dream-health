import React from "react";
import styled from "styled-components";
import CartJ from "../components/CartComponents/Cart"
import { Wrapper } from "../components/StyledComponents/Wrapper";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  h2{
    font-weight: var(--xheavyWeight)
  }

  @media (min-width: 1700px) {
    width: 80%;
  }
`;

function Cart() {
  return (
    <Wrapper>
      <Container>
        <h2>Items in Cart</h2>
        <div>
          <CartJ />
        </div>
      </Container>
    </Wrapper>
  );
}

export default Cart;
