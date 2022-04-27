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
import { addDetails } from "./features/userSlice";
import { clearCart } from "./features/cartSlice";
import { navigate } from "gatsby";

const ButtonStyledJ = styled(ButtonStyled)`
  margin-top: 1.2rem;
`;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function Checkout({ title, cart, detailss, price, productDetails }) {
  const user = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const details = useSelector((state) => state.user.details);
  const token = useSelector((state) => state.user.token);
  // console.log("price", price.replace(/[^\d\.]/g, ""));

  console.log(productDetails);

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order

    const result = await fetch(
      `${process.env.STRAPI_API_URL}/api/orders/payment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cartDetail: details,
        }),
      }
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    const data = await result.json();
    //:  Getting the order details back
    const { amount, id, currency } = data;

    const options = {
      key: "rzp_test_KW2N2FS6nBI6ZK", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Dream Health",
      description: "Test Transaction",
      image: "",
      order_id: id,
      handler: async function (response) {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          response;

        const result = await fetch(
          `${process.env.STRAPI_API_URL}/api/orders-v1`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              orderCreationId: id,
              razorpayPaymentId: razorpay_payment_id,
              razorpayOrderId: razorpay_order_id,
              razorpaySignature: razorpay_signature,
              cartDetail: details,
            }),
          }
        );
        if (result.status === 200 && result.ok === true) {
          navigate(`/order/order-details/?orderId=${id}`);
          window.scrollTo({ behavior: "smooth", top: "0px" });
        }
      },

      notes: {
        address: "Dream Health",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <ButtonStyledJ onClick={displayRazorpay} primary>
        {title}
      </ButtonStyledJ>
    </div>
  );
}

export default Checkout;
