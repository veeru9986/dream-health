import React from "react";
import styled from "styled-components";
import FInput from "./FInput";
import { ButtonStyled } from "./StyledComponents/Wrapper";
import { Link } from "gatsby";

import { useForm } from "react-hook-form";

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
    margin-top: 1rem;

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
    .signup-options {
      display: flex;

      .options {
        width: 50px;
        height: 50px;
        border-radius: 90px;
        background-color: var(--black);
      }
    }
  }
`;

function SignInForm() {
  //useForm
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <SignInContainer>
      {/* <span style={{ color: "red", fontSize: "0.8rem", fontStyle: "italic" }}>
        {error}
      </span> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FInput
          name="email"
          label="First Name"
          required="email required"
          control={control}
        />
        <FInput
          name="password"
          label="Password"
          required="password required"
          control={control}
        />
        <div className="btn-submit-submit">
          <div className="btn-submit">
            <ButtonStyled type="submit">sign in</ButtonStyled>
          </div>
          <p>
            Don't have an account?<Link to="/sign-up">Sign up</Link>
          </p>
        </div>
      </form>

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
