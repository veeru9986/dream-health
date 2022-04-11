import React from "react";
import styled from "styled-components";
import {
  useAddOrderDetailsMutation,
  useOrderSuccessMutation,
} from "./features/api/authApi";
import { ButtonStyled } from "./StyledComponents/Wrapper";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { saveSession } from "../../utils/cart";

const ButtonStyledJ = styled(ButtonStyled)`
  margin-top: 1.2rem;
`;

function Checkout({ title, cart }) {
  const [addCartDetails, { isLoading, isError, isSuccess, data }] =
    useAddOrderDetailsMutation();
  const [orderSucess, { data: orderSuccessData, isSuccess: orderSuccess }] =
    useOrderSuccessMutation();
  const user = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handleCart = async (cart) => {
    await addCartDetails({ cartDetail: cart });
  };

  const stripeAccess = async () => {
    if (isSuccess) {
      const stripePromise = loadStripe(
        "pk_test_51JIRHuSExpOaRu25BANeJzrVZP62X5VZEFwpNafWoblrUxUbjYUri05OTNN2kZs5XBkYk1YbbfFwMJsWDViM0H4d00KFIxiw3V"
      );
      const session = data;
      saveSession(session.id);

      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.log(result.error.message);
      }
    }
  };

  console.log("orderSuccess", orderSuccessData);
  React.useEffect(() => {
    stripeAccess();
  }, [data]);

  return (
    <div>
      <ButtonStyledJ onClick={() => handleCart(cart)} primary>
        {title}
      </ButtonStyledJ>
    </div>
  );
}

export default Checkout;
