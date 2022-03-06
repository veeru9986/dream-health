import React from "react";
import styled from "styled-components";
import FInput from "./FInput";
import { useForm } from "react-hook-form";
import MuiSelect from "./MuiComponents/MuiSelect";
import MuiBasicSelect from "./MuiComponents/MuiBasicSelect";

const Wrapper = styled.div`
  width: 100%;
  label,
  span {
    font-size: var(--p2);
    font-weight: var(--xmediumWeight);
    text-transform: capitalize;
    color: var(--black);
    opacity: 0.7;
  }
`;

function BookAppointmentForm() {
  const { handleSubmit, control } = useForm();

  return (
    <Wrapper>
      <div>
        <form>
          <FInput
            name="name"
            label="Enter Your Name"
            required="Name is required"
            control={control}
            widthSize
          />
          <div className="mutlti-select-input">
            <span>You can select one or multiple Test from dropdown</span>
            <MuiSelect control={control} />
          </div>
          <MuiBasicSelect control={control} />
          <FInput
            name="mobile"
            label="Mobile Number"
            required="Mobile Number is required"
            control={control}
          />
          <FInput
            name="email"
            label="E-mail"
            required="E-mail is required"
            control={control}
          />
        </form>
      </div>
    </Wrapper>
  );
}

export default BookAppointmentForm;
