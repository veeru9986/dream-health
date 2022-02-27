import React from "react";
import styled from "styled-components";
import { LinkStyled } from "./StyledComponents/Wrapper";
import logo from "../images/logo.png";
import { GatsbyImage } from "gatsby-plugin-image";

const Conatiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-top: var(--mt1);

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
      font-weight: var(--xheavyWeight);
    }
    p {
      font-weight: var(--xmediumWeight);
    }
    .hero-desc-button-wrapper {
      display: flex;

      @media (max-width: 479px) {
        flex-direction: column;
      }
      .book-appointment,
      .phone-no {
        display: flex;
      }
      .book-appointment {
        margin-right: 1.5rem;
        @media (max-width: 479px) {
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

    .gatsby-image-wrapper {
      width: 80%;
    }

    @media (max-width: 767px) {
      grid-area: 1/1/2/3;
      .gatsby-image-wrapper {
        width: 100%;
      }
    }
    img {
      width: 100%;
      border-radius: 10px;

      @media (min-width: 767px) {
        width: 100%;
      }
    }
  }
`;

function WhyDreamHealth({ data }) {
  const { title, description, image, buttons } = data;
  return (
    <Conatiner>
      <div className="image">
        <GatsbyImage
          image={
            image.data.attributes.localFile.childImageSharp.gatsbyImageData
          }
          alt=""
        />
      </div>
      <div className="hero-desc">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="hero-desc-button-wrapper">
          <div className="faq">
            <LinkStyled to={buttons.button_link}>
              {buttons.button_title}
            </LinkStyled>
          </div>
        </div>
      </div>
    </Conatiner>
  );
}

export default WhyDreamHealth;
