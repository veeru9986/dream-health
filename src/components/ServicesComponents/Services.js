import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: auto/2/auto/3;

  h2 {
    font-weight: var(--xheavyWeight);
  }

  .services-section-section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--mt);

    @media (max-width: 479px) {
      justify-content: center;
      margin-right: 0;
    }
    .services-section {
      width: 271.44px;
      height: 271.44px;
      border-radius: 10px;
      margin: 0 1rem 2rem 0;
      background: #ebebeb;

    @media (max-width: 479px) {
      margin-right: 0;
    }
    }
  }
`;

function services() {
  return (
    <Container>
      <div className="heading">
        <h2>Services</h2>
      </div>
      <div className="services-section-section">
        <div className="services-section" />
        <div className="services-section" />
        <div className="services-section" />
        <div className="services-section" />
        <div className="services-section" />
        <div className="services-section" />
        <div className="services-section" />
        <div className="services-section" />
      </div>
    </Container>
  );
}

export default services;
