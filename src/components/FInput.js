import React, { useRef } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useForm, Controller } from "react-hook-form";

const InputContainer = styled.div`
  .input-wrapper,
  form {
    display: flex;
    flex-direction: column;
  }
  .input-wrapper {
    margin: 0.5rem 0;
    width: ${(props) => (props.widthSize ? "100%" : "320px")};
  }
  .MuiOutlinedInput-root,
  MuiInputBase-root {
    border-radius: 35px;
  }
  label,
  span {
    font-size: var(--p2);
    font-weight: var(--xmediumWeight);
    text-transform: capitalize;
    color: var(--black);
    opacity: 0.7;
  }
`;

function FInput(props) {
  const { label, required, name, control, widthSize } = props;

  return (
    <InputContainer widthSize={widthSize}>
      <div className="input-wrapper">
        <span>{label}</span>

        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              type="text"
              id="outlined-error"
              onChange={onChange}
              helperText={error ? error.message : null}
              value={
                props.details
                  ? name === "mobile"
                    ? props.details[0].mobile
                    : name === "email"
                    ? props.details[0].email
                    : props.details[0].name
                  : value
              }
              error={error?.message.length > 1}
            />
          )}
          rules={{ required: required }}
        />
      </div>
    </InputContainer>
  );
}

export default FInput;
