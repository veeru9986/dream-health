import React from "react";
import styled from "styled-components";

import ServicesS from "../components/ServicesComponents/Services";
import { Wrapper } from "../components/StyledComponents/Wrapper";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  @media (min-width: 1700px) {
    width: 80%;
  }
`;

function Services() {
  return (
    <Wrapper>
      <Container>
         <ServicesS />
      </Container>
    </Wrapper>
  );
}

export default Services;
