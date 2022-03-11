import React from "react";
import {
  ButtonStyled,
  LinkStyled,
  Wrapper,
} from "../components/StyledComponents/Wrapper";
import confirm from "../images/Order Confirmation 1.png";
import styled from "styled-components";
import MuiRadioButton from "../components/MuiComponents/MuiRadioButton";

const Container = styled.div`
  width: 100%;
  grid-area: auto/2/auto/3;
  margin-top: var(--mt);
  h2{
      font-weight: var(--xheavyWeight)
  }
  label {
    font-size: var(--h4);
    font-weight: var(--xheavyWeight);
    color: #000000;
    margin-bottom: 0.8rem;
    font-family: var(--family);
  }
  .edit {
    font-weight: var(--mediumWeight);
    font-size: var(--p3);
    line-height: 19px;
    margin: 0;
    color: #0071bc !important;
  }
  .checkout-details-wrapper {
    display: flex;
    background-color: #fbfbfb;
    border-radius: 25px;
    margin: var(--mt) 0;
    justify-content: space-between;
    padding: 1rem 2rem;

    .test-details-section {
      width: 30%;
      margin-right: 2rem;
      span {
        font-size: var(--p2);
        font-weight: var(--xheavyWeight);
      }

      .test-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #060708;
        margin-bottom: 1.2rem;
      }
    }
    .customer-details-section {
      width: 40%;
      margin-right: 2rem;
      display: flex;
      flex-direction: column;
      .customer-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #060708;
        margin-bottom: 1.2rem;
        span {
          font-weight: va(--lightWeight);
          font-size: var(--p2);
          line-height: 30px;
          /* or 167% */

          color: #000000;
        }
      }
    }
  }
  .payment-options-wrapper {
    margin-bottom: 2rem;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 2rem;
  }
`;

function Checkout() {
  const [value, setValue] = React.useState("upi");

  const handleChange = (val) => {
    setValue(val);
  };
  return (
    <Wrapper>
      <Container>
        <div className="heading">
          <h2>Checkout</h2>
        </div>
        <div className="checkout-details-wrapper">
          <div className="test-details-section">
            <div className="test-details">
              <h4>Test Details</h4>
              <span className="edit">edit</span>
            </div>
            <span>Selected test</span>
          </div>
          <div className="customer-details-section">
            <div className="customer-details">
              <h4>Customer Details</h4>
              <span className="edit">edit</span>
            </div>
            <span>Name Surname</span>
            <span>Appointment Date, Time Slot</span>
            <span>Email Phone No</span>
          </div>
        </div>
        <div className="payment-options-wrapper">
          <div className="payment-options-section">
            <MuiRadioButton handleChange={handleChange} />
          </div>
          <div className="payment-option">
            {value === "upi" ? "upi" : "person"}
          </div>
        </div>
        <div className="payment-total-wrapper">
          <div className="payment-total-section">
            <div className="flex">
              <h4>Subtotal : </h4>
              <span>2499</span>
            </div>
            <div className="flex">
              <h4>GST : </h4>
              <span>1%</span>
            </div>
            <div className="flex">
              <h4 className="total">Total : </h4>
              <span>2499</span>
            </div>
            <div className="checkout-btn">
              <ButtonStyled>Proceed To Checkout</ButtonStyled>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Checkout;
