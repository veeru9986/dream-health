import React, { useRef } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";

const InputContainer = styled.div`
  width: 100%;
  .input-wrapper {
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
  const { error, type, helperText, setDetails, value, title } = props;
  return (
    <InputContainer>
      <div className="input-wrapper">
        <label>{title}</label>
        <TextField
          id="outlined-multiline-static"
          error={value === ""}
          helperText={value === "" ? `Empty Field` : " "}
          multiline
          rows={4}
          onChange={(e) => setDetails(e.target.value)}
          required
        />
      </div>
    </InputContainer>
  );
}

export default Input;
