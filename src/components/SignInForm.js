import React from "react";
import styled from "styled-components";
import FInput from "./FInput";

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  .input-wrapper {
    width: 350px;
  }
`;

function SignInForm() {
  const [email, setEmail] = React.useState();
  const [pass, setPass] = React.useState();
  return (
    <SignInContainer>
      <div>
        <FInput
          type="text"
          helperText="helper text"
          error="error"
          setDetails={setEmail}
          value={email}
          title="e-mail/Mobile number"
          className="input"
        />
        <FInput
          type="text"
          helperText="helper text"
          error="error"
          setDetails={setPass}
          value={pass}
          title="password"
          className="input"
        />
      </div>
    </SignInContainer>
  );
}

export default SignInForm;
