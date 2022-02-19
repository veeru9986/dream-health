import React from "react";
import styled from "styled-components";
import Hero from "../components/AboutUsComponents/Hero";
import PeopleBehindDreamHealth from "../components/AboutUsComponents/PeopleBehindDreamHealth";
import { Wrapper } from "../components/StyledComponents/Wrapper";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  @media (min-width: 1700px) {
    width: 80%;
  }
`;

function AboutUs() {
  return (
    <Wrapper>
      <Container>
        <Hero />
        <PeopleBehindDreamHealth />
      </Container>
    </Wrapper>
  );
}

export default AboutUs;
