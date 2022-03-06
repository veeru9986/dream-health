import React from "react";
import styled from "styled-components";
import FInput from "./FInput";
import { ButtonStyled } from "./StyledComponents/Wrapper";
import { Link } from "gatsby";
import { InputContainer } from "./StyledComponents/InputContainer";
import TextField from "@mui/material/TextField";

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
  const [email, setEmail] = React.useState("email");
  const [pass, setPass] = React.useState("password");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    (email === "email" || pass === "password") &&
      setError("One of the field is default value remove it.");
  };
  return (
    <SignInContainer>
      <span style={{ color: "red", fontSize: "0.8rem", fontStyle: "italic" }}>
        {error}
      </span>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <div className="input-wrapper">
            <span>Email</span>
            <TextField
              error={email === ""}
              type="text"
              id="outlined-error"
              helperText={email === "" ? `Empty Email Field` : " "}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </InputContainer>
        <InputContainer>
          <div className="input-wrapper">
            <span>Password</span>
            <TextField
              error={pass === ""}
              type="text"
              id="outlined-error"
              helperText={pass === "" ? `Empty Password Field` : " "}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
        </InputContainer>
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
