import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm, Controller } from "react-hook-form";

const Wrapper = styled.div`
  width: 100%;
`;

export default function MuiBasicSelect(props) {
  const [age, setAge] = React.useState("");
  const { control } = props;
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Wrapper>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Controller
        name="age"
        control={control}
        type="text"
        render={({ field: { onChange, value } }) => (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Age"
            onChange={onChange}
            IconComponent={() => <ExpandMoreIcon />}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        )}
      />
    </Wrapper>
  );
}

