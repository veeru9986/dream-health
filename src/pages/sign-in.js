import React from "react";
import styled from "styled-components";

import { Wrapper } from "../components/StyledComponents/Wrapper";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  @media (min-width: 1700px) {
    width: 80%;
  }
`;

function SignmIn() {
  return (
    <Wrapper>
      <Container>
         <h2>Sign In</h2>
      </Container>
    </Wrapper>
  );
}

export default SignmIn;
