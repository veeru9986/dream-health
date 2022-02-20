import React from "react";
import styled from "styled-components";
import FInput from "../FInput";
import FTextArea from "../FTextArea";
import { ButtonStyled } from "../StyledComponents/Wrapper";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .contact-us-section {
    display: flex;
    flex-flow: row wrap;

    input {
      width: 300px;
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
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();

  const [message, setMessage] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <div className="contact-us-section">
        <FInput
          type="text"
          helperText="helper text"
          error="error"
          setDetails={setName}
          value={name}
          title="name"
          className="input"
        />
        <FInput
          type="text"
          helperText="helper text"
          error="error"
          setDetails={setEmail}
          value={email}
          title="email"
          className="input"
        />
        <FTextArea
          type="text"
          helperText="helper text"
          error="error"
          setDetails={setMessage}
          value={message}
          title="message"
          className="textarea"
        />
      </div>
      <div className="btn-wrapper">
        <ButtonStyled type="text" onSubmit={handleSubmit}>
          Submit
        </ButtonStyled>
      </div>
    </Container>
  );
}

export default ContactUsForm;
