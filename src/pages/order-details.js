import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useOrderSuccessMutation } from "../components/features/api/authApi";
import userSlice from "../components/features/userSlice";
import { LinkStyled, Wrapper } from "../components/StyledComponents/Wrapper";
import confirm from "../images/Order Confirmation 1.png";
import * as queryString from "query-string";
import { GatsbyImage } from "gatsby-plugin-image";
import { cartTotal1, cartSubTotal1 } from "../../utils/cart";

const Container = styled.div`
  width: 100%;
  grid-area: auto/2/auto/3;
  margin-top: var(--mt);
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  grid-template-rows: auto;
  @media (max-width: 767px) {
    grid-template-columns: 10% 1fr 10%;
  }
  @media (max-width: 550px) {
    grid-template-columns: 5% 1fr 5%;
  }
  span {
    font-size: var(--p2);
    font-weight: var(--lightWeight);
  }
  .payment-total-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .desktop {
    @media (max-width: 479px) {
      display: none;
    }
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

      .image,
      .gatsby-image-wrapper {
        width: 150px;
        height: 150px;
        border-radius: 24px;

        @media (max-width: 550px) {
          display: none;
        }
      }
      .name-of-the-test {
        display: flex;
        flex-direction: column;
        margin-left: 1.5rem;
        @media (max-width: 550px) {
          margin-left: 0;
        }
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
    @media (max-width: 479px) {
      flex-direction: column;
    }
    span,
    p {
      font-size: var(--p2);
      font-weight: var(--lightWeight);
    }
    .total {
      min-width: 200px;
      .mob {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-content: flex-end;
        align-items: flex-end;
      }
      .payment-total-flex {
        min-width: 200px;
      }
      @media (max-width: 479px) {
        .total-number {
          font-size: 20px;
        }
      }
    }
  }
`;

function OrderDetails({ location }) {
  const [orderSuccess, { data, isSuccess, isLoading }] =
    useOrderSuccessMutation();
  const cart = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.username);

  const sessionId = useSelector((state) => state.user.sessionId);
  console.log(cart);
  console.log(user);

  const { status } = queryString.parse(location.search);
  console.log(status);
  console.log(location);

  const saveOrderDetails = async () => {
    await orderSuccess({
      cartDetail: cart,
      user: user,
    });
  };

  React.useEffect(() => {
    cart && user && sessionId && saveOrderDetails();
  }, [sessionId]);

  console.log("sessionId", sessionId);
  console.log("data", data);
  return (
    <Wrapper>
      <Container>
        {status === "success" && (
          <div className="order-details-cotainer">
            <div className="order-details-container-1">
              <h2>Your Order Details</h2>

              <div className="img">
                <img src={confirm} alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies purus.
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
              {cart.map((c) => {
                return (
                  <>
                    <div className="details-wrapper">
                      <div className="image">
                        <GatsbyImage
                          image={c.image.file.childImageSharp.gatsbyImageData}
                          alt={c.title}
                        />
                      </div>
                      <div className="name-of-the-test">
                        <h4>{c.title}</h4>
                        <p>Appointment Date : Feb 24, 2022</p>
                      </div>
                    </div>
                    <div>
                      <h4>{c.price}</h4>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="payment-method-container">
              <div className="payment-method">
                <h4>Payment Method</h4>
                <span>Debit Card</span>
              </div>
              <div className="payment-total desktop">
                <div className="payment-total-flex">
                  <h4>Subtotal :</h4>
                  <span>{cartTotal1(cart)}</span>
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
                <div className="payment-total-flex desktop">
                  <h4>Total :</h4>
                  <span> {cartSubTotal1(cart, 0.1)}</span>
                </div>
                <div className="payment-total mob">
                  <div className="payment-total-flex">
                    <h4>Subtotal :</h4>
                    <span>{cartTotal1(cart)}</span>
                  </div>
                  <div className="payment-total-flex">
                    <h4>GST :</h4>
                    <span>1%</span>
                  </div>
                  <div className="payment-total-flex">
                    <h4>Total :</h4>
                    <span className="total-number">
                      {cartSubTotal1(cart, 0.1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider" />
          </div>
        )}
      </Container>
    </Wrapper>
  );
}

export default OrderDetails;
