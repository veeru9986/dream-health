import React from "react";
import styled from "styled-components";
import { LinkStyled } from "./StyledComponents/Wrapper";

const Conatiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  .hero-desc {
    grid-area: 1/1/2/2;
    display: flex;
    flex-direction: column;
    padding-right: 2rem;

    @media (max-width: 991px) {
      padding-right: 1rem;
    }
    @media (max-width: 767px) {
      grid-area: 2/1/3/3;
      padding-right: 0;
      margin-top: 1rem;
    }
    h2 {
      line-height: var(--lineHeight);
      font-weight: var(--heavyWeight);
    }
    p {
      font-weight: var(--xmediumWeight);
    }
    .hero-desc-button-wrapper {
      display: flex;
      
      @media (max-width: 479px){
        flex-direction: column;
      }
      .book-appointment, .phone-no{
        display: flex;
      }
      .book-appointment {
        margin-right: 1.5rem;
        @media (max-width: 479px){
          margin-right: 0;
          margin-bottom: 1rem;
      }
      }
    }
  }
  .image {
    grid-area: 1/2/2/3;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 767px) {
      grid-area: 1/1/2/3;
    }
    img {
      width: 100%;
      height: 300px;
      border-radius: 10px;

      @media (min-width: 767px) {
        width: 80%;
      }
    }
  }
`;

function Hero() {
  return (
    <Conatiner>
      <div className="image">
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          alt="lorem ipsum"
        />
      </div>
      <div className="hero-desc">
        <h2>Lorem ipsum dolor sit amet, consectetur </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lorem
          consectetur placerat nec. Id id bibendum etiam mauris eget.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <div className="hero-desc-button-wrapper">
          <div className="book-appointment">
            <LinkStyled primary to="/">Book Appointment</LinkStyled>
          </div>
          <div className="phone-no">
            <LinkStyled to="/">Phone No</LinkStyled>
          </div>
        </div>
      </div>
    </Conatiner>
  );
}

export default Hero;
