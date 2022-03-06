import React from "react";
import styled from "styled-components";
import FInput from "../FInput";
import FTextArea from "../FTextArea";
import { ButtonStyled } from "../StyledComponents/Wrapper";
import TextField from "@mui/material/TextField";
import { InputContainer } from "../StyledComponents/InputContainer";
import { useForm } from "react-hook-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  form {
    width: 100%;
  }
  .btn-wrapper {
    margin: 1rem 0;
  }
  .contact-us-section {
    display: flex;
    flex-flow: row wrap;

    .input-wrapper {
      width: 350px;
      margin: 1rem 0;

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
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <div className="contact-us-section">
        {/* <span style={{ color: "red", fontSize: "0.8rem", fontStyle: "italic" }}>
          {error}
        </span> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <FInput
            name="name"
            required="name required"
            label="Name"
            control={control}
          />
          <FInput
            name="email"
            required="email required"
            label="Email"
            control={control}
          />

          <FTextArea
            name="message"
            required="message required"
            label="Message"
            control={control}
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
