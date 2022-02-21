import React from "react";
import styled from "styled-components";
import quote from "../images/quote.png";
import Slider from "react-slick";
import labtest from "../images/lab.jpg";
import chemlab from "../images/chemlab.jpg";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.div`
  margin-bottom: 2rem;
  display: block;
  height: 100%;

  .slick-slider {
    display: grid;
  }

  /* .slick-slide {
    padding: 2rem;
  } */

  .customer-slider {
    display: flex;
    flex-direction: column;
    height: auto;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    height: 700px;
    @media (max-width: 767px) {
      height: auto;
    }

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      filter: grayscale(100%);
      border-radius: 25px;
    }
  }
`;

function BenefitsSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <Container>
      <Slider {...settings}>
        <div className="customer-slider">
          <StaticImage src="../images/lab.jpg" alt="" />
        </div>
        <div className="customer-slider">
          <StaticImage src="../images/chemlab.jpg" alt="" />
        </div>
      </Slider>
    </Container>
  );
}

export default BenefitsSlider;
