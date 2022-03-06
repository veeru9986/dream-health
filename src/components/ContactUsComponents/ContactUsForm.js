import React from "react";
import styled from "styled-components";
import FInput from "../FInput";
import FTextArea from "../FTextArea";
import { ButtonStyled } from "../StyledComponents/Wrapper";
import TextField from "@mui/material/TextField";
import { InputContainer } from "../StyledComponents/InputContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  form {
    width: 100%;
  }

  .contact-us-section {
    display: flex;
    flex-flow: row wrap;

    .input-wrapper_1 {
      width: 350px;
      display: flex;
      flex-direction: column;
      @media (max-width: 767px) {
        width: 250px;
      }
    }
    .textarea {
      width: 100%;
    }
  }
`;

function ContactUsForm() {
  const [name, setName] = React.useState("name");
  const [email, setEmail] = React.useState("email");

  const [message, setMessage] = React.useState("message");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    (name === "name" || email === "email") ? 
      setError("One of the field is default value remove it") : setError("")
  };

  return (
    <Container>
      <div className="contact-us-section">
        <span style={{ color: "red", fontSize: "0.8rem", fontStyle: "italic" }}>
          {error}
        </span>
        <form onClick={handleSubmit}>
          <InputContainer>
            <div className="input-wrapper_1">
              <span>Name</span>
              <TextField
                error={name === ""}
                type="text"
                id="outlined-error"
                helperText={name === "" ? `Empty Name Field` : " "}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </InputContainer>
          <InputContainer>
            <div className="input-wrapper_1">
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
          <FTextArea
            type="text"
            helperText="helper text"
            error="error"
            setDetails={setMessage}
            value={message}
            title="message"
            className="textarea"
          />
          <div className="btn-wrapper">
            <ButtonStyled type="submit">Submit</ButtonStyled>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default ContactUsForm;
