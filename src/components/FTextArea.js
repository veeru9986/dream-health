import React, { useRef } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useForm, Controller } from "react-hook-form";

const InputContainer = styled.div`
  width: 100%;
  .text-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
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
  const { label, required, name, control } = props;
  return (
    <InputContainer>
      <div className="text-wrapper">
        <span>{label}</span>

        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              type="text"
              id="outlined-multiline-static"
              onChange={onChange}
              helperText={error ? error.message : null}
              value={value}
              multiline
              rows={4}
              error={error?.message.length > 1}
            />
          )}
          rules={{ required: required }}
        />
      </div>
    </InputContainer>
  );
}

export default Input;
