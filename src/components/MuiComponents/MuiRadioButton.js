import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function MuiRadioButton(props) {
  const [value, setValue] = React.useState("upi");

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleChange(event.target.value)
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Payment Options</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel value="upi" control={<Radio />} label="UPI" />
        <FormControlLabel value="person" control={<Radio />} label="Pay in Person" />
      </RadioGroup>
    </FormControl>
  );
}
