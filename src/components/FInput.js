import React, { useRef } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";

const InputContainer = styled.div`
  .input-wrapper,
  form {
    display: flex;
    flex-direction: column;
  }
  .MuiOutlinedInput-root,
  MuiInputBase-root {
    border-radius: 35px;
  }
  label {
    font-size: var(--p2);
    font-weight: var(--xmediumWeight);
    text-transform: capitalize;
    color: var(--black);
    opacity: 0.7;
  }
`;

function Input(props) {
  const {
    error,
    type,
    helperText,
    setDetails,
    value,
    title,
    handleSubmit,
    required,
  } = props;
  return (
    <InputContainer>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "auto" },
        }}
        validate
        autoComplete="off"
      >
        <div className="input-wrapper">
          <label>{title}</label>
          <TextField
            error={value === ""}
            type={type}
            id="outlined-error"
            helperText={value === "" ? `Empty Field` : " "}
            value={value}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </div>
      </Box>
    </InputContainer>
  );
}

export default Input;
