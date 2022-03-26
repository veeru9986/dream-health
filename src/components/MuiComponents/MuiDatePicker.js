import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import { useForm, Controller } from "react-hook-form";

const Wrapper = styled.div`
  width: ${(props) => props.width && props.width};
  @media (max-width: 767px) {
    margin: 1rem 0;
  }
  .MuiOutlinedInput-root {
    border-radius: 35px;
    padding: 0 10px;
    width: ${(props) => props.width && props.width};
  }
  .MuiInputAdornment-root {
    margin-right: 8px;
  }
`;
export default function MuiDatePicker(props) {
  const { label, control, name, width } = props;
  return (
    <Wrapper width={width}>
      <Controller
        name={name}
        control={control}
        type="number"
        render={({ field: { onChange, value } }) => (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>

            <DatePicker
              openTo="year"
              views={["year", "month", "day"]}
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={onChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        )}
      />
    </Wrapper>
  );
}
