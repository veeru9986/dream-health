import React from "react";
import styled from "styled-components";
import FInput from "./FInput";
import { ButtonStyled } from "./StyledComponents/Wrapper";
import { Link } from "gatsby";

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  .input-wrapper {
    width: 350px;
  }
  .btn-submit-submit {
    display: flex;
    width: 50%;
    justify-content: space-between;
    flex-wrap: wrap;

    .btn-submit {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    p {
      font-size: 12px;
      font-weight: var(--lightWeight);
    }
    a {
      text-decoration: none;
      font-weight: var(--mediumWeight);
      color: var(--black);
    }
  }
  .other-signup-options {
    display: flex;
    flex-direction: column;

    .heading {
      p {
        font-size: 14px;
        font-weight: var(--mediumWeight);
      }
    }
    .signup-options{
      display: flex;

      .options{
        width: 50px;
        height: 50px;
        border-radius: 90px;
        background-color: var(--black);
      }
    }
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
      <div className="btn-submit-submit">
        <div className="btn-submit">
          <ButtonStyled>sign in</ButtonStyled>
        </div>
        <p>
          Don't habe an account?<Link to="/sign-up">Sign up</Link>
        </p>
      </div>
      <div className="other-signup-options">
        <div className="heading">
          <p>or sign with</p>
        </div>
        <div className="signup-options">
          <div className="options" />
        </div>
      </div>
    </SignInContainer>
  );
}

export default SignInForm;
