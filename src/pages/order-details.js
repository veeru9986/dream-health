import React from "react";
import styled from "styled-components";
import { LinkStyled, Wrapper } from "../components/StyledComponents/Wrapper";
import confirm from "../images/Order Confirmation 1.png";

const Container = styled.div`
  width: 100%;
  grid-area: auto/2/auto/3;
  margin-top: var(--mt);
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  grid-template-rows: auto;
  span {
    font-size: var(--p2);
    font-weight: var(--lightWeight);
  }
  .payment-total-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .order-details-cotainer {
    grid-area: auto/2/auto/3;
    .order-details-container-1 {
      display: flex;
      flex-direction: column;
      align-items: center;

      .img {
        display: block;
      }
      h2 {
        font-weight: var(--xheavyWeight);
      }
    }
  }
  .divider {
    background-color: #06070830;
    width: 100%;
    height: 2px;
    margin: var(--mt) 0;
  }
  .order-details-container-2 {
    display: flex;
    justify-content: space-between;
    margin: var(--mt) 0;
  }
  .test-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: var(--mt) 0;

    span,
    p {
      font-size: var(--p2);
      font-weight: var(--lightWeight);
    }

    .details-wrapper {
      display: flex;
      align-items: center;

      .image {
        width: 150px;
        height: 150px;
        background-color: #c4c4c4;
        border-radius: 24px;
      }
      .name-of-the-test {
        display: flex;
        flex-direction: column;
        margin-left: 1.5rem;
      }
    }
  }
  .payment-method-container {
    display: flex;
    justify-content: space-between;
    margin: var(--mt) 0;

    .payment-total {
      min-width: 200px;
    }
  }
  .customer-details {
    display: flex;
    justify-content: space-between;
    span,
    p {
      font-size: var(--p2);
      font-weight: var(--lightWeight);
    }
    .total {
      min-width: 200px;
    }
  }
`;

function OrderDetails() {
  return (
    <Wrapper>
      <Container>
        <div className="order-details-cotainer">
          <div className="order-details-container-1">
            <h2>Your Order Details</h2>
            <div className="img">
              <img src={confirm} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
              purus.
            </p>
            <div className="btn">
              <LinkStyled to="/">Go to Homepage</LinkStyled>
            </div>
          </div>
          <div className="divider" />
          <div className="order-details-container-2">
            <div className="order-number">
              <h4>Order Number</h4>
              <span>241123</span>
            </div>
            <div className="order-date">
              <h4>Order Date</h4>
              <span>Feb 12, 2022</span>
            </div>
          </div>
          <div className="test-details">
            <div className="details-wrapper">
              <div className="image" />
              <div className="name-of-the-test">
                <h4>Name of the test</h4>
                <p>Appointment Date : Feb 24, 2022</p>
              </div>
            </div>

            <div>
              <h4>2499</h4>
            </div>
          </div>
          <div className="payment-method-container">
            <div className="payment-method">
              <h4>Payment Method</h4>
              <span>Debit Card</span>
            </div>
            <div className="payment-total">
              <div className="payment-total-flex">
                <h4>Subtotal :</h4>
                <span>2499</span>
              </div>
              <div className="payment-total-flex">
                <h4>GST :</h4>
                <span>1%</span>
              </div>
            </div>
          </div>
          <div className="customer-details">
            <div className="details">
              <h4>Customer Details</h4>
              <p>Name Surname, Age</p>
              <p>Contact</p>
              <p>Test Name, Date</p>
            </div>
            <div className="total">
              <div className="payment-total-flex">
                <h4>Total :</h4>
                <span>2499</span>
              </div>
            </div>
          </div>
          <div className="divider" />
        </div>
      </Container>
    </Wrapper>
  );
}

export default OrderDetails;
