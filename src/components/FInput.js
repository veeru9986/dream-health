import React, { useRef } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useForm, Controller } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

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
  const { label, required, name, control, widthSize, details, password } =
    props;
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <InputContainer widthSize={widthSize}>
      <div className="input-wrapper">
        <span>{label}</span>

        {!password ? (
          <Controller
            name={name}
            control={control}
            defaultValue={
              details && details.length
                ? name === "mobile"
                  ? details[0]?.mobile
                  : name === "email"
                  ? details[0]?.email
                  : details[0]?.name
                : ""
            }
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type="text"
                id="outlined-error"
                onChange={onChange}
                helperText={error ? error.message : null}
                value={value}
                error={error?.message.length > 1}
              />
            )}
            rules={{ required: required }}
          />
        ) : (
          <Controller
            name={name}
            control={control}
            defaultValue={
              details && details.length
                ? name === "mobile"
                  ? details[0]?.mobile
                  : name === "email"
                  ? details[0]?.email
                  : details[0]?.name
                : ""
            }
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type={showPassword ? "text" : "password"}
                id="outlined-error"
                onChange={onChange}
                helperText={error ? error.message : null}
                value={value}
                error={error?.message.length > 1}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
            rules={{ required: required }}
          />
        )}
      </div>
    </InputContainer>
  );
}

export default FInput;
