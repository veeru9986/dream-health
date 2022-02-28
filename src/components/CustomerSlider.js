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

  .slick-slider {
    display: grid;
  }

  .slick-slide {
    padding: 2rem;
    @media (max-width: 479px) {
      padding: 0.5rem;
    }
  }
  .heading {
    h2 {
      font-weight: var(--xheavyWeight);
    }
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

function CustomerSlider({ data, title }) {
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
        <h2>{title}</h2>
      </div>
      <Slider {...settings}>
        {data?.customer_reviews?.map((c) => {
          return (
            <>
              <div className="customer-slider">
                <div className="quote-quote">
                  <img src={quote} alt="quote" />
                </div>
                <p>{c.description}</p>

                <h4>{c.name_of_the_customer}</h4>
              </div>
            </>
          );
        })}
      </Slider>
    </Container>
  );
}

export default CustomerSlider;
