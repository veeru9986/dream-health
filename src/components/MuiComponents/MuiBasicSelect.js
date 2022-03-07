import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm, Controller } from "react-hook-form";
import { FormHelperText } from "@mui/material";

const Wrapper = styled.div`
  width: ${(props) => props.width && props.width};

  .MuiOutlinedInput-root {
    border-radius: 35px;
    padding: 0 10px;
    width: ${(props) => props.width && props.width};
  }
  .MuiList-root {
    height: 300px !important;
  }
`;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default function MuiBasicSelect(props) {
  const [age, setAge] = React.useState("");
  const { control, label, options, name, width, required } = props;
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Wrapper width={width}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        type="text"
        render={({ field: { onChange, value } , fieldState: { error }}) => (
          <>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            defaultValue=""
            onChange={onChange}
            IconComponent={() => <ExpandMoreIcon />}
            MenuProps={MenuProps}
            error={error?.message.length > 1}
          >
            {options?.map((o, id) => (
              <MenuItem value={o.title} key={o.id}>
                {o.title}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{error ? required : null}</FormHelperText>
          </>
        )}
        rules={{ required: required }}
      />
    </Wrapper>
  );
}
