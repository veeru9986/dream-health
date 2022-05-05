import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getUser } from "../../utils/cart";
import { useGetOrdersQuery } from "../components/features/api/authApi";
import { LinkStyled, Wrapper } from "../components/StyledComponents/Wrapper";
import dummyImage from "../images/people1.png";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  @media (min-width: 1700px) {
    width: 80%;
  }
  .profile-wrapper {
    margin-top: 2rem;
    .profile-section {
      display: flex;
      justify-content: space-between;
      background-color: #fbfbfb;
      border-radius: 25px;
      padding: 1rem 2rem;
      flex-wrap: wrap;
      .profile-name-surname {
        display: flex;
        align-items: center;
        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: #c4c4c4;
          display: block;
          margin-right: 1.5rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
      .details {
        display: flex;
        flex-direction: column;

        @media (max-width: 479px) {
          margin-top: 1rem;
        }

        p {
          font-weight: var(--mediumWeight);
        }
      }
    }
  }
  .order-details-wrapper {
    display: flex;
    margin-top: 2rem;
    .tab-section {
      display: flex;
      border-bottom: 1px solid #06070838;
      width: 100%;
      button {
        background: none;
        outline: none;
        border: none;
        font-size: var(--p1);
        font-weight: var(--mediumWeight);
        font-family: "proxima-nova";
        color: var(--black);
        cursor: pointer;
      }
      .active,
      .active_rep {
        color: var(--medBlue);
      }
      .appoinments {
        padding-right: 0.9rem;
      }
      .reports {
        border-left: 1px solid #06070838;
        padding: 0 0.9rem;
      }
    }
  }
  .checkout-details-wrapper {
    grid-area: auto/1/auto/3;
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px solid #06070838;

    justify-content: space-between;
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
      span,
      a {
        font-size: var(--p2);
        font-weight: var(--xheavyWeight);
        text-decoration: none;
      }
    }
    .customer-details-section {
      width: 40%;
      display: flex;
      flex-direction: column;
      @media (max-width: 767px) {
        width: 100%;
        margin-top: 1.2rem;
      }
    }
  }
  .no_upcoming_app,
  .no_reports {
    display: flex;
    margin-top: 2rem;
    justify-content: center;
  }
  .report_section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .checkout-details-parent-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    background-color: #fbfbfb;
    border-radius: 25px;
    margin: var(--mt) 0;
    padding: 1rem 2rem;

    .checkout-details-heading {
      grid-area: 1/1/2/3;
      display: flex;
      justify-content: space-between;
      @media (max-width: 767px) {
        flex-direction: column;
        width: 80%;
      }
      @media (max-width: 479px) {
        flex-direction: column;
        width: 100%;
      }
      .test-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #060708;
        margin-bottom: 1.2rem;
        width: 40%;
        @media (max-width: 767px) {
          width: 100%;
        }
        @media (max-width: 479px) {
          width: 100%;
        }
      }
      .customer-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #060708;
        margin-bottom: 1.2rem;
        width: 40%;
        @media (max-width: 767px) {
          width: 100%;
        }
        @media (max-width: 479px) {
          width: 100%;
        }
        a {
          font-size: var(--p2);
          font-weight: var(--xheavyWeight);
          text-decoration: none;
        }
        span {
          font-weight: va(--lightWeight);
          font-size: var(--p2);
          line-height: 30px;
          /* or 167% */

          color: #000000;
          text-decoration: none;
        }
      }
    }
  }
`;

function Profile() {
  const [name, setName] = React.useState("Upcoming Appoinments");
  const { data, isSuccess, isLoading } = useGetOrdersQuery();
  const cart = useSelector((state) => state.cart.cartItems);
  const { details, token, username } = useSelector((state) => state.user);
  const user = getUser();

  const handleAppoinment = (e) => {
    setName(e.target.innerText);
  };

  const handleReports = (e) => {
    setName(e.target.innerText);
  };

  !isLoading && console.log("order", data);

  return (
    <Wrapper>
      <Container>
        {token ? (
          <>
            <div className="heading">
              <h2>My Profile</h2>
            </div>
            <div className="profile-wrapper">
              <div className="profile-section">
                <div className="profile-name-surname">
                  <div className="avatar">
                    <img src={dummyImage} alt="" />
                  </div>
                  <div className="text">
                    <h3>
                      {user.username && user.username}{" "}
                      {user.lastName && user.lastName}
                    </h3>
                  </div>
                </div>
                <div className="details">
                  <p>{details && details[0]?.age}</p>
                  <p>
                    Contact : <span>{user.phone && user.phone}</span>
                  </p>
                  <p>
                    Email : <span>{user.email && user.email}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="order-details-wrapper">
              <div className="tab-section">
                <div className="appoinments">
                  <button
                    onClick={(e) => handleAppoinment(e)}
                    className={name === "Upcoming Appoinments" && "active"}
                  >
                    Upcoming Appoinments
                  </button>
                </div>
                <div className="reports">
                  <button
                    className={name === "Reports" && "active_rep"}
                    onClick={(e) => handleReports(e)}
                  >
                    Reports
                  </button>
                </div>
              </div>
            </div>
            {name === "Upcoming Appoinments" &&
              (typeof details !== "undefined" || isSuccess) && (
                <div className="checkout-details-parent-grid">
                  <div className="checkout-details-heading">
                    <div className="test-details">
                      <h4>Test Details</h4>
                    </div>
                    <div className="customer-details">
                      <h4>Customer Details</h4>
                    </div>
                  </div>
                  {data &&
                    data.data.map(
                      (d) =>
                        d.attributes.appointment === true && (
                          <div className="checkout-details-wrapper">
                            <div className="test-details-section">
                              {d.attributes.data.item[0].data.map((a) => (
                                <span key={a.id}>{a.title}</span>
                              ))}
                            </div>
                            <div className="customer-details-section">
                              <span>{d.attributes.data.item[0].name}</span>
                              <span>
                                {d.attributes.data.item[0].date},{` `}
                                {d.attributes.data.item[0].time}
                              </span>
                              <span>
                                {d.attributes.data.item[0].email},{` `}
                                {d.attributes.data.item[0].phone}
                              </span>
                            </div>
                          </div>
                        )
                    )}
                </div>
              )}

            {name === "Upcoming Appoinments" &&
              typeof details === "undefined" &&
              !isSuccess && (
                <div className="no_upcoming_app">
                  <h4>No Upcoming Appoinments</h4>
                </div>
              )}

            {name === "Reports" && isSuccess && (
              <div className="reports_section"></div>
            )}
            {name === "Reports" && !isSuccess && (
              <div className="no_reports">
                <h4>No reports found.</h4>
              </div>
            )}
          </>
        ) : (
          <div
            className="no_account"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "600px",
              flexDirection: "column",
            }}
          >
            <h2>You need to Login to see the profile.</h2>
            <LinkStyled to="/sign-in" primary>
              Go to Login
            </LinkStyled>
          </div>
        )}
      </Container>
    </Wrapper>
  );
}

export default Profile;
