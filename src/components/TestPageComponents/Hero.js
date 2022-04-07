import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { addToCart } from "../features/cartSlice";
import { ButtonStyled, LinkStyled } from "../StyledComponents/Wrapper";

const HeroContainer = styled.div`
  grid-area: auto/2/auto/3;
  display: grid;
  grid-template-columns: 270px 2fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;

  .left-grid-section {
    grid-area: 1/1/3/2;
    position: relative;

    @media (max-width: 767px) {
      grid-area: 1/1/2/4;
    }

    .image-container {
      width: 270px;
      height: 270px;
      background: #ebebeb;
      border-radius: 10px;
      .gatsby-image-wrapper {
        border-radius: 10px;
        width: 100%;
        height: 100%;
      }
    }
  }
  .middle-button-section {
    grid-area: 2/2/3/4;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 767px) {
      grid-area: 3/1/4/3;
      width: 100%;
    }
    @media (max-width: 479px) {
      grid-area: 3/1/4/3;
      width: 100%;
    }
    .book-appointment {
      margin-right: 1rem;
      @media (max-width: 479px) {
        margin-bottom: 1rem;
      }
    }
  }
  .middle-grid-section {
    grid-area: 1/2/2/3;
    width: 80%;
    @media (max-width: 991px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      grid-area: 2/1/3/4;
      width: 100%;
    }
    @media (max-width: 479px) {
      grid-area: 2/1/3/4;
      width: 100%;
    }

    h2 {
      font-size: var(--h3);
      line-height: 112%;
      font-weight: var(--xheavyWeight);
    }
    p {
      margin: 0.8rem 0;
    }
  }
  .right-grid-section {
    grid-area: 1/3/2/4;
    @media (max-width: 767px) {
      grid-area: 2/3/3/4;
      width: 100%;
    }
    @media (max-width: 479px) {
      grid-area: 4/1/5/3;
      width: 100%;
    }
    span {
      font-size: var(--h3);
      font-weight: var(--mediumWeight);
    }
  }
`;
function Hero({ banner, dispatch }) {
  const { description, price, title, buttons, image } = banner;

  const handleCart = (title, price, image) => {
    dispatch(addToCart({ title, price, image }));
    navigate("/cart")
  };
  return (
    <HeroContainer>
      <div className="left-grid-section">
        <div className="image-container">
          <GatsbyImage
            image={
              image.file.childImageSharp.gatsbyImageData
            }
            alt={title}
          />
        </div>
      </div>
      <div className="middle-grid-section">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="middle-button-section">
        <div className="book-appointment">
          <LinkStyled to={buttons[0].button_link} primary>
            {buttons[0].button_title}
          </LinkStyled>
        </div>
        <div className="add-to-cart">
          <ButtonStyled to="/" onClick={() => handleCart(title, price, image)}>
            Add to cart
          </ButtonStyled>
        </div>
      </div>
      <div className="right-grid-section">
        <span>₹{price}</span>
      </div>
    </HeroContainer>
  );
}

export default Hero;
