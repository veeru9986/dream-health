import React from "react";
import styled from "styled-components";
import { ButtonStyled } from "./StyledComponents/Wrapper";
import { Link, navigate } from "gatsby";

import { useForm } from "react-hook-form";
import FInput from "./FInput";
import { useAddRegisterMutation } from "./features/api/authApi";

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }

  .sign-up-form-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .input-wrapper {
    width: 330px;
    @media (max-width: 767px) {
      width: 100%;
    }
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
      margin: auto;
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

function SignUpForm() {
  //useForm
  const { handleSubmit, control } = useForm();

  //destructure api from rtk
  const [addRegister, { isLoading, error, status }] = useAddRegisterMutation();

  // submit input values to redux store using dispatch(signupuser)
  const onSubmit = async (data) => {
    const { firstName, email, password } = data;
    await addRegister({
      username: firstName,
      password: password,
      email: email,
    });
  };
  console.log(status);
  console.log(error);
  console.log(isLoading);
  if (status === "fulfilled") {
    navigate("/sign-in");
  }
  return (
    <SignInContainer>
      <span style={{ color: "red", fontSize: "0.8rem", fontStyle: "italic" }}>
        {error && error.data.error.message}
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sign-up-form-wrapper">
          <FInput
            name="firstName"
            defaultValue="first name"
            label="First Name"
            required="first name required"
            control={control}
          />
          <FInput
            name="lastName"
            defaultValue="last name"
            label="Last Name"
            required="last name required"
            control={control}
          />
          <FInput
            name="email"
            defaultValue="email"
            label="Email"
            required="email name required"
            control={control}
          />
          <FInput
            name="phone"
            defaultValue="phone number"
            label="Phone Number"
            required="phone number required"
            control={control}
          />
          <FInput
            name="password"
            defaultValue="password"
            label="Password"
            required="password required"
            control={control}
            password={true}
          />
          <FInput
            name="confirm password"
            defaultValue="confirm password"
            label="Confirm Password"
            required="confirm password required"
            control={control}
            password={true}
          />
        </div>

        <div className="btn-submit-submit">
          <div className="btn-submit">
            <ButtonStyled type="submit">sign up</ButtonStyled>
          </div>
          <p>
            already have an account?<Link to="/sign-in">Sign in</Link>
          </p>
        </div>
      </form>

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
