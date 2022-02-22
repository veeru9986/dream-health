import React from "react";
import styled from "styled-components";
import AccordionT from "../components/AccordionT";

import { Wrapper } from "../components/StyledComponents/Wrapper";
import DreamHealthCheckups from "../components/TestPageComponents/DreamHealthCheckups";
import Hero from "../components/TestPageComponents/Hero";
import CustomerSlider from "../components/CustomerSlider";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  @media (min-width: 1700px) {
    width: 80%;
  }

 
`;

function Index() {
  return (
    <Wrapper>
      <Container>
        <Hero />
        <AccordionT marginTop="var(--tmt1)" />
        <DreamHealthCheckups />
        <CustomerSlider />
      </Container>
    </Wrapper>
  );
}

export default Index;
