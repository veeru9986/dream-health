import React from "react";
import styled from "styled-components";
import CustomerSlider from "../components/CustomerSlider";
import Hero from "../components/Hero";
import MostCommonTest from "../components/MostCommonTest";
import { Wrapper } from "../components/StyledComponents/Wrapper";
import WhyDreamHealth from "../components/WhyDreamHealth";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  @media (min-width: 1700px){
    width: 80%;
  }
`;

function Index() {
  return (
    <Wrapper>
      <Container>
        <Hero />
        <MostCommonTest />
        <WhyDreamHealth />
        <CustomerSlider />
      </Container>
    </Wrapper>
  );
}

export default Index;
