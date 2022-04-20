import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useGetOrdersQuery } from "../components/features/api/authApi";
import { Wrapper } from "../components/StyledComponents/Wrapper";
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
      span,
      a {
        font-size: var(--p2);
        font-weight: var(--xheavyWeight);
        text-decoration: none;
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
`;

function Profile() {
  const [name, setName] = React.useState("Upcoming Appoinments");
  const { data, isSuccess, isLoading } = useGetOrdersQuery();
  const cart = useSelector((state) => state.cart.cartItems);
  const { details, token } = useSelector((state) => state.user);

  const handleAppoinment = (e) => {
    setName(e.target.innerText);
  };

  const handleReports = (e) => {
    setName(e.target.innerText);
  };

  !isLoading && console.log("order", data.data[0]);

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
                    <h3>Name Surname</h3>
                  </div>
                </div>
                <div className="details">
                  <p>Age</p>
                  <p>
                    Contact : <span>+91999399933</span>
                  </p>
                  <p>
                    Email : <span>veeresh@gmail.com</span>
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
                <div className="checkout-details-wrapper">
                  <div className="test-details-section">
                    <div className="test-details">
                      <h4>Test Details</h4>
                    </div>
                    {data &&
                      data.data[0]?.attributes.data.item.map((t) => (
                        <span key={t.id}>{t.title}</span>
                      ))}
                  </div>
                  <div className="customer-details-section">
                    <div className="customer-details">
                      <h4>Customer Details</h4>
                    </div>
                    <span>Name</span>
                    <span>
                      Appointment Date,
                      {` `}
                      Time Slot
                    </span>
                    <span>
                      Email,
                      {` `}
                      Phone No
                    </span>
                  </div>
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
            }}
          >
            <h2>You Need to Login to see the profile.</h2>
          </div>
        )}
      </Container>
    </Wrapper>
  );
}

export default Profile;
