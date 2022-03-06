import React from "react";
import styled from "styled-components";
import { ButtonStyled } from "./StyledComponents/Wrapper";
import { Link } from "gatsby";
import { useSelector, useDispatch } from "react-redux";
import { signupUser, userSelector } from "../features/userSlice";
import TextField from "@mui/material/TextField";
import { InputContainer } from "./StyledComponents/InputContainer";

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

function SignUpForm() {
  const [email, setEmail] = React.useState("email");
  const [fName, setFname] = React.useState("first name");
  const [lName, setLname] = React.useState("last name");
  const [cPass, setCpass] = React.useState("confirm password");
  const [phone, setPhone] = React.useState("phone");
  const [pass, setPass] = React.useState("password");
  const [error, setError] = React.useState("");
  const data = { fName, email, pass };

  // redux
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  //dispatch

  const handleSubmit = (e) => {
    e.preventDefault()
    fName === "first name" ||
    lName === "last name" ||
    phone === "phone" ||
    pass === "password" ||
    cPass === "confirm password"
      ? setError("One of the field is default value remove it")
      : <>{dispatch(signupUser(data))}{setError("")}</>
  };

  return (
    <SignInContainer>
      <span style={{ color: "red", fontSize: "0.8rem", fontStyle: "italic" }}>
        {error}
      </span>
      <form onSubmit={handleSubmit}>
        <div className="sign-up-form-wrapper">
          <InputContainer>
            <div className="input-wrapper">
              <span>First Name</span>
              <TextField
                error={fName === ""}
                type="text"
                id="outlined-error"
                helperText={fName === "" ? `Empty First Name Field` : " "}
                value={fName}
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>
          </InputContainer>
          <InputContainer>
            <div className="input-wrapper">
              <span>Last Name</span>
              <TextField
                error={lName === ""}
                type="text"
                id="outlined-error"
                helperText={lName === "" ? `Empty Last Name Field` : " "}
                value={lName}
                onChange={(e) => setLname(e.target.value)}
                required
              />
            </div>
          </InputContainer>
          <InputContainer>
            <div className="input-wrapper">
              <span>Phone Number</span>
              <TextField
                error={phone === ""}
                type="text"
                id="outlined-error"
                helperText={phone === "" ? `Empty Phone Field` : " "}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </InputContainer>
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
          <InputContainer>
            <div className="input-wrapper">
              <span>Confirm Password</span>
              <TextField
                error={cPass === ""}
                type="text"
                id="outlined-error"
                helperText={cPass === "" ? `Empty Confirm Password Field` : " "}
                value={cPass}
                onChange={(e) => setCpass(e.target.value)}
                required
              />
            </div>
          </InputContainer>
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

      {/* <FInput
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
        /> */}

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
