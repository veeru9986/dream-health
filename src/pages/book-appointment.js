import React from "react";
import styled from "styled-components";
import BookAppointmentForm from "../components/BookAppointmentForm";
import { Wrapper } from "../components/StyledComponents/Wrapper";
import { graphql } from "gatsby"

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  grid-template-rows: auto;

  h2 {
    font-weight: var(--xheavyWeight);
    font-size: var(--h3) ;
  }

  @media (min-width: 1700px) {
    width: 80%;
  }

  .left-section-section {
    display: flex;
    grid-area: 1/1/3/2;
    background-color: #ebebeb;
    border-radius: 6px;
    @media (max-width: 767px) {
      grid-area: 1/1/2/3;
      width: 100%;
      height: 200px;
    }
  }

  .right-section-section_one {
    grid-area: auto/2/auto/3;
    display: flex;
    flex-direction: column;
    width: 100%;
    .para {
      margin: 0.8rem 0;
      font-size: var(--p2);
      width: 80%;
      margin-top: 0.2rem;
      font-weight: var(--lightWeight);
      @media (max-width: 767px) {
        width: 100%;
      }
    }
    @media (max-width: 767px) {
      grid-area: 2/1/3/3;
      margin-top: var(--mt);
    }

    .contact-wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .c-wrapper {
        display: flex;
        width: 270px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding-right: 1rem;
        span {
          margin-left: 1rem;
          font-size: var(--p2);
        }
      }
    }
  }
  .get-in-touch-wrapper {
    margin-top: 1rem;
    grid-area: auto/2/auto/3;
    @media (max-width: 767px) {
      grid-area: 3/1/4/3;
    }
    .get-in-touch {
      margin-top: 1rem;
    }
  }
`;

function BookAppointment({data}) {
  return (
    <Wrapper>
      <Container>
        <div className="left-section-section">
          <div className="left-section" />
        </div>
        <div className="right-section-section_one">
          <div className="heading">
            <h2>Book Appointment</h2>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="book-appointment">
            <BookAppointmentForm data={data.allStrapiTestPages.nodes} />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default BookAppointment;

export const query = graphql`
  {
    allStrapiTestPages {
      nodes {
        data {
          attributes {
            banner {
              title
              price
            }
          }
        }
      }
    }
  }
`

