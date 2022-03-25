import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonStyled } from "../StyledComponents/Wrapper";
import { cartTotal, cartSubTotal } from "../../../utils/cart";
import { useDispatch } from "react-redux";
import { addToCart, decreaseCart, removeFromCart } from "../features/cartSlice";
const data = [
  {
    test_name: "Name of the Test",
    appointment_date: "Feb 24, 2022",
    quantity: 2,
    price: 2499,
  },
  {
    test_name: "Name of the Test",
    appointment_date: "Feb 24, 2022",
    quantity: 3,
    price: 2499,
  },
];

const CartContainer = styled.div`
  grid-area: auto/2/auto/3;

  .cart-titles,
  .cart-details {
    display: grid;
    grid-template-columns: minmax(100px, auto) 1fr minmax(100px, auto) 1fr;
    grid-column-gap: 1rem;
    align-items: center;
    padding-bottom: 1rem;
    @media (max-width: 767px) {
      grid-template-columns: minmax(100px, auto) 1fr minmax(100px, auto);
    }
    @media (max-width: 600px) {
      grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
    }
  }

  .titles {
    margin-top: 2rem;
    border-bottom: 2px solid #0607083b;

    span {
      &:nth-child(3) {
        text-align: center;
        @media (max-width: 767px) {
          display: none;
        }
      }
      &:last-child {
        text-align: end;
      }
    }
  }

  .cart-details {
    margin-top: 2rem;

    &:last-child {
      border-bottom: 2px solid #0607083b;
      padding-bottom: 2rem;
    }
  }

  .serial-no > span,
  .titles > span {
    font-size: var(--p3);
    font-weight: var(--xmediumWeight);
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  .serial-no {
    display: flex;
    justify-content: center;
  }
  .test-name {
    display: flex;
    flex-direction: row;
    align-items: center;

    .test-image {
      display: block;
      width: 67.17px;
      height: 67.17px;
      border-radius: 15.971px;
      background: #c4c4c4;

      @media (max-width: 600px) {
        display: none;
      }
    }
    .test-name-details {
      display: flex;
      flex-direction: column;
      margin-left: 1.5rem;
      justify-content: center;
      @media (max-width: 600px) {
        margin-left: 0;
      }
      p {
        margin: 0;
        font-size: 12px;
        font-weight: var(--xmediumWeight);
      }
    }
  }
  .quantity {
    display: flex;
    justify-content: center;
    span {
      font-size: 1rem;
    }

    button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1rem;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  .quantity > div > button,
  .quantity-tab > div > button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
  }
  .quantity-tab {
    display: none;

    @media (max-width: 767px) {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      span {
        font-size: 14px;
      }
    }
  }
  .no-of-items {
    display: flex;
    justify-content: flex-end;
    button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1rem;
      transition: 0.3s ease-in-out;
    }
    button:hover {
      transform: scale(1.1);
    }
    .delete-btn {
      display: flex;
      @media (max-width: 600px) {
        display: none;
      }
    }
    h2 {
      font-size: var(--p2);
      font-weight: var(--mediumWeight);
      margin-right: 1rem;
    }
  }
  .checkout-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.2rem;
    .checkout {
      display: flex;
      flex-direction: column;
      width: 25%;
      margin-right: 2rem;
      padding-right: 1rem;
      @media (max-width: 991px) {
        width: 50%;
      }
      @media (max-width: 479px) {
        width: 70%;
        margin-right: 0;
      }
      .subtotal,
      .total,
      .gst {
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        align-items: center;
        h4 {
          font-size: 22px;
          @media (max-width: 479px) {
            font-size: 20px;
          }
        }
        span {
          font-size: 18px;
          @media (max-width: 479px) {
            font-size: 16px;
          }
        }
        h2 {
          font-size: 28px;
          @media (max-width: 479px) {
            font-size: 20px;
          }
        }
      }
      .gst {
      }
      .total {
        span {
          font-size: 28px;
          font-weight: var(--xmediumWeight);
        }
      }
    }
  }
`;

const ButtonStyledJ = styled(ButtonStyled)`
  margin-top: 1.2rem;
`;

function Cart({ cart }) {
  console.log(cart);
  const length = data.length;
  const dispatch = useDispatch();

  const handleDecreaseCart = (d) => {
    dispatch(decreaseCart(d));
  };

  const handleIncreaseCart = (d) => {
    dispatch(addToCart(d));
  };

  const handleRemoveCart = (d) => {
    dispatch(removeFromCart(d))
  }

  return (
    <CartContainer>
      <div className="cart-titles titles">
        <span style={{ textAlign: "center" }}>Serial No</span>
        <span>Test Name</span>
        <span>Quantity</span>
        <span>no of items: {length < 10 ? `0${cart && cart.length}` : cart && cart.length}</span>
      </div>
      <div className="cart-details-wrapper">
        {cart &&
          cart.map((d, id) => {
            return (
              <div className="cart-details" key={id}>
                <div className="serial-no">
                  <span>{id < 10 ? `0${++id}` : ++id}</span>
                </div>
                <div className="test-name">
                  <div className="test-image" />
                  <div className="test-name-details">
                    <h4>{d.title}</h4>
                    <p>Appointment Date : Feb 24, 2022</p>
                    <div className="quantity-tab">
                      <div>
                        <button onClick={() => handleDecreaseCart(d)}>-</button>
                      </div>
                      <span>{d.cartQuantity}</span>
                      <div>
                        <button onClick={() => handleIncreaseCart(d)}>+</button>
                      </div>
                      <div className="delete-btn">
                        <button>
                          <DeleteIcon className="delete" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quantity">
                  <div>
                    <button onClick={() => handleDecreaseCart(d)}>-</button>
                  </div>
                  <span>{d.cartQuantity}</span>
                  <div>
                    <button onClick={() => handleIncreaseCart(d)}>+</button>
                  </div>
                </div>
                <div className="no-of-items">
                  <h2>{d.price}</h2>
                  <div className="delete-btn">
                    <button>
                      <DeleteIcon className="delete" onClick={() => handleRemoveCart(d)} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="checkout-wrapper">
        <div className="checkout">
          <div className="subtotal">
            <h4>Subtotal</h4>
            <span>{cartTotal(cart)}</span>
          </div>
          <div className="gst">
            <h4>GST</h4>
            <span>1%</span>
          </div>
          <div className="total">
            <h2>Total</h2>
            <span>{cartSubTotal(cart, 0.1)}</span>
          </div>
          <ButtonStyledJ primary>Proceed to Checkout</ButtonStyledJ>
        </div>
      </div>
    </CartContainer>
  );
}

export default Cart;
