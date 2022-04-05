// import React from "react";
// import { useSelector } from "react-redux";
// import styled from "styled-components";
// import CartJ from "../components/CartComponents/Cart"
// import { Wrapper } from "../components/StyledComponents/Wrapper";

// const Container = styled.div`
//   margin-top: var(--mt);
//   grid-area: auto/2/auto/3;
//   width: 100%;

//   h2{
//     font-weight: var(--xheavyWeight)
//   }

//   @media (min-width: 1700px) {
//     width: 80%;
//   }
// `;

// function Cart() {
//   const cart = useSelector(state => state.cart.cartItems)
//   return (
//     <Wrapper>
//       <Container>
//         <h2>Items in Cart</h2>
//         <div>
//           <CartJ cart={cart} />
//         </div>
//       </Container>
//     </Wrapper>
//   );
// }

// export default Cart;
import React from 'react'

function cart() {
  return (
    <div>cart</div>
  )
}

export default cart