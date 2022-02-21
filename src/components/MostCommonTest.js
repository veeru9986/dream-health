import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: auto/2/auto/3;
  margin-top: var(--mt1);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: var(--xheavyWeight);
  }
  .most-common-test-grid {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: space-around;
    margin-top: 1rem;
    .grid_images {
      width: 271.44px;
      height: 271.44px;
      background: #EBEBEB;
      border-radius: 10px;
      margin: 1rem 2rem;
      @media (max-width: 479px){
        margin: 1rem 0;
      }
    }
  }
`;

function MostCommonTest() {
  return (
    <Container>
      <div className="heading">
        <h2>Most Common Test</h2>
      </div>
      <div className="most-common-test-grid">
        <div className="grid_images" />
        <div className="grid_images" />
        <div className="grid_images" />
        <div className="grid_images" />
        <div className="grid_images" />
        <div className="grid_images" />
      </div>
    </Container>
  );
}

export default MostCommonTest;
