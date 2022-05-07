import React from "react";
import styled from "styled-components";
import FInput from "./FInput";
import { ButtonStyled } from "./StyledComponents/Wrapper";
import { Link, navigate } from "gatsby";
import { saveToken } from "../../utils/cart";
import { useForm } from "react-hook-form";
import { useAddLoginMutation } from "./features/api/authApi";

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;

  .btn-submit-submit {
    display: flex;
    width: 60%;
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

function SignInForm() {
  //useForm
  const { handleSubmit, control } = useForm();

  const [addLogin, { error, isLoading, data: loginData, status }] =
    useAddLoginMutation();
  const onSubmit = async (data) => {
    const { email, password } = data;
    await addLogin({ identifier: email, password: password });
  };
  if (status === "fulfilled") {
    navigate("/");
    localStorage.setItem("user", JSON.stringify(loginData.user));
  }
  return (
    <SignInContainer>
      <span style={{ color: "red", fontSize: "0.8rem", fontStyle: "italic" }}>
        {error && error.data.error.message}
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FInput
          name="email"
          label="Email"
          required="email required"
          control={control}
        />
        <FInput
          name="password"
          label="Password"
          required="password required"
          control={control}
          password
        />
        <div className="btn-submit-submit">
          <div className="btn-submit">
            <ButtonStyled type="submit">
              {!isLoading ? "sign in" : "loading..."}
            </ButtonStyled>
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
