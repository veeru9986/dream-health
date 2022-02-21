import React from "react";
import styled from "styled-components";
import FInput from "./FInput";
import { ButtonStyled } from "./StyledComponents/Wrapper";
import { Link } from "gatsby";

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;

  .sign-up-form-wrapper{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
  }
  .input-wrapper {
    width: 350px;
    @media (max-width: 767px){
      width: 100%;
    }
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

function SignUpForm() {
    const [email, setEmail] = React.useState();
    const [fName, setFname] = React.useState();
    const [lName, setLname] = React.useState();
    const [cPass, setCpass] = React.useState();
    const [phone, setPhone] = React.useState();
  
    const [pass, setPass] = React.useState();
  return (
    <SignInContainer>

      <div className="sign-up-form-wrapper">
      <FInput
          type="text"
          helperText="helper text"
          error="error"
          setDetails={setFname}
          value={fName}
          title="First Name"
          className="input"
        />
        <FInput
          type="text"
          helperText="helper text"
          error="error"
          setDetails={setLname}
          value={lName}
          title="Last Name"
          className="input"
        />
        <FInput
          type="text"
          helperText="helper text"
          error="error"
          setDetails={setPhone}
          value={phone}
          title="Phone Number"
          className="input"
        />
        <FInput
          type="text"
          helperText="helper text"
          error="error"
          setDetails={setEmail}
          value={email}
          title="E-mail"
          className="input"
        />
        <FInput
          type="text"
          helperText="helper text"
          error="error"
          setDetails={setPass}
          value={pass}
          title="Password"
          className="input"
        />
        <FInput
          type="text"
          helperText="helper text"
          error="error"
          setDetails={setCpass}
          value={cPass}
          title="Confirm Password"
          className="input"
        />
      </div>
      <div className="btn-submit-submit">
        <div className="btn-submit">
          <ButtonStyled>sign up</ButtonStyled>
        </div>
        <p>
          already have an account?<Link to="/sign-in">Sign in</Link>
        </p>
      </div>
      <div className="other-signup-options">
        <div className="heading">
          <p>or sign up with</p>
        </div>
        <div className="signup-options">
          <div className="options" />
        </div>
      </div>
    </SignInContainer>
  );
}

export default SignUpForm;
