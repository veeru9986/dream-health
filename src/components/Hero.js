import React from "react";
import styled from "styled-components";
import { LinkStyled } from "./StyledComponents/Wrapper";
import { GatsbyImage } from "gatsby-plugin-image";

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
    h1 {
      line-height: 112%;
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
      @media (max-width: 767px) {
        width: 100%;
      }
    }

    @media (max-width: 767px) {
      grid-area: 1/1/2/3;
    }
    img {
      width: 100%;
      height: 300px;
      border-radius: 10px;

      @media (min-width: 767px) {
        width: 100%;
      }
    }
  }
`;

function Hero({ data }) {
  const { localFile } = data.banner_image.data.attributes;
  return (
    <Conatiner>
      <div className="image">
        <GatsbyImage image={localFile.childImageSharp.gatsbyImageData} />
      </div>
      <div className="hero-desc">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className="hero-desc-button-wrapper">
          <div className="book-appointment">
            <LinkStyled primary to={data.home_banner_button[0].button_link}>
              {data.home_banner_button[0].button_title}
            </LinkStyled>
          </div>
          <div className="phone-no">
            <LinkStyled to={data.home_banner_button[1]?.button_title || "/"}>
              {data.home_banner_button[1]?.button_title || "Phone No"}
            </LinkStyled>
          </div>
        </div>
      </div>
    </Conatiner>
  );
}

export default Hero;
