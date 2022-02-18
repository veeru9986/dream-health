import React from "react";
import styled from "styled-components";
import quote from "../images/quote.png";
import Slider from "react-slick";

const Container = styled.div`
  margin-top: var(--mt1);
  grid-area: auto/2/auto/3;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;

  .slick-slider{
      display: grid;
  }

  .slick-slide{
      padding: 2rem;
  }

  .customer-slider {
    display: flex;
    flex-direction: column;
    height: auto;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 2rem;

    .quote-quote {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      font-size: var(--p3);
      font-weight: var(--lightWeight);
      color: #060708ba;
      text-align: center;
    }

    h4 {
      text-align: center;
      font-size: var(--p4);
    }
  }
`;

function CustomerSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="heading">
        <h2>What Our Customer Say about us</h2>
      </div>
      <Slider {...settings}>
        <div className="customer-slider">
          <div className="quote-quote">
            <img src={quote} alt="quote" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            sodales semper dui amet, tempor sem. Vulputate quis lacus duis in
            interdum eget nulla.
          </p>

          <h4>Name of the Customer</h4>
        </div>
        <div className="customer-slider">
          <div className="quote-quote">
            <img src={quote} alt="quote" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            sodales semper dui amet, tempor sem. Vulputate quis lacus duis in
            interdum eget nulla.
          </p>

          <h4>Name of the Customer</h4>
        </div>
        <div className="customer-slider">
          <div className="quote-quote">
            <img src={quote} alt="quote" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            sodales semper dui amet, tempor sem. Vulputate quis lacus duis in
            interdum eget nulla.
          </p>

          <h4>Name of the Customer</h4>
        </div>
        <div className="customer-slider">
          <div className="quote-quote">
            <img src={quote} alt="quote" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            sodales semper dui amet, tempor sem. Vulputate quis lacus duis in
            interdum eget nulla.
          </p>

          <h4>Name of the Customer</h4>
        </div>
      </Slider>
    </Container>
  );
}

export default CustomerSlider;
