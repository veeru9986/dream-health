import React from "react";
import {
  ButtonStyled,
  LinkStyled,
  Wrapper,
} from "../components/StyledComponents/Wrapper";
import confirm from "../images/Order Confirmation 1.png";
import styled from "styled-components";
import MuiRadioButton from "../components/MuiComponents/MuiRadioButton";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  grid-area: auto/2/auto/3;
  margin-top: var(--mt);
  @media (min-width: 1700px) {
    width: 80%;
  }
  h2 {
    font-weight: var(--xheavyWeight);
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
    @media (max-width: 767px) {
      flex-direction: column;
      width: 80%;
    }
    @media (max-width: 479px) {
      flex-direction: column;
      width: 100%;
    }
    .test-details-section {
      display: flex;
      flex-direction: column;
      width: 30%;
      margin-right: 2rem;
      @media (max-width: 767px) {
        width: 100%;
      }
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
      @media (max-width: 767px) {
        width: 100%;
        margin-top: 1.2rem;
      }
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
    @media (max-width: 767px) {
      flex-direction: column;
      margin-top: 3rem;
    }
  }
  .payment-total-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .payment-total-section {
      width: 40%;
      display: flex;
      flex-direction: column;
      @media (max-width: 767px) {
        width: 70%;
      }
      .total {
        font-size: var(--h3) !important;
      }
      .flex {
        display: flex;
        justify-content: space-between;
        h4 {
          color: #000000;
          font-weight: var(--mediumWeight);
        }
        span {
          font-size: var(--p3);
          @media (max-width: 767px) {
            font-size: 18px;
          }
        }
      }
      .checkout-btn {
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem;
      }
    }
  }
`;

function Checkout() {
  const [value, setValue] = React.useState("upi");
  const details = useSelector((state) => state.user.details);
  console.log(details);
  // const { tests, name, email, time, mobile, date } = details && details[0];
  const handleChange = (val) => {
    setValue(val);
  };
  return (
    <Wrapper>
      <Container>
        <div className="heading">
          <h2>Checkout</h2>
        </div>
        {details && details.length && (
          <>
            <div className="checkout-details-wrapper">
              <div className="test-details-section">
                <div className="test-details">
                  <h4>Test Details</h4>
                  <span className="edit">edit</span>
                </div>
                {details[0]?.tests.map((t) => (
                  <span key={t.id}>{t}</span>
                ))}
              </div>
              <div className="customer-details-section">
                <div className="customer-details">
                  <h4>Customer Details</h4>
                  <span className="edit">edit</span>
                </div>
                <span>{details[0]?.name}</span>
                <span>
                  {details[0].date ? details[0]?.date : "Appointment Date"}
                  {` `}
                  {details[0]?.time}
                </span>
                <span>
                  {details[0]?.email}
                  {` `}
                  {details[0]?.mobile}
                </span>
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
                  <span className="total">2499</span>
                </div>
                <div className="checkout-btn">
                  <ButtonStyled primary>Proceed To Checkout</ButtonStyled>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </Wrapper>
  );
}

export default Checkout;
