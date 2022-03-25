import React from "react";
import styled from "styled-components";
import FInput from "./FInput";
import { useForm } from "react-hook-form";
import MuiSelect from "./MuiComponents/MuiSelect";
import MuiBasicSelect from "./MuiComponents/MuiBasicSelect";
import MuiDatePicker from "./MuiComponents/MuiDatePicker";
import { ButtonStyled } from "./StyledComponents/Wrapper";
import { useDispatch } from "react-redux";
import { addDetails } from "./features/userSlice";

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
  .flex-row,
  .button {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem 0;
  }
  .button {
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    @media (max-width: 767px) {
      flex-direction: column;
      width: 200px;
    }
    span {
      margin: 0 1rem;
      font-weight: 700;
      color: #000;
      font-size: 0.8rem !important;
      opacity: 1 !important;
      @media (max-width: 767px) {
        margin: 0.7rem 0;
      }
    }
  }
`;

const ButtonStyled1 = styled(ButtonStyled)`
  color: ${(props) => (props.primary ? "#000" : `#fff`)};
  border-color: ${(props) => (props.primary ? "#000" : "transparent")};
  background-color: ${(props) => (props.primary ? "transparent" : `#000`)};

  &:hover {
    background-color: ${(props) => (props.primary ? "#fff" : "var(--medBlue)")};
    border-color: ${(props) => (props.primary ? "var(--lightRed)" : "none")};
    color: ${(props) => (props.primary ? "#000" : "#fff")};
  }
`;

const gender = [
  {
    id: 0,
    title: "male",
  },
  {
    id: 1,
    title: "female",
  },
];

const timeSlot = [
  {
    title: "7:00 - 8:00",
  },
  {
    title: "8:00 - 9:00",
  },
  {
    title: "9:00 - 10:00",
  },
  {
    title: "10:00 - 11:00",
  },
  {
    title: "11:00 - 12:00",
  },
  {
    title: "13:00 - 14:00",
  },
  {
    title: "15:00 - 16:00",
  },
  {
    title: "16:00 - 17:00",
  },
  {
    title: "17:00 - 18:00",
  },
  {
    title: "18:00 - 19:00",
  },
  {
    title: "19:00 - 20:00",
  },
];

const ageNumbers = () => {
  let age = [];
  for (let i = 1; i <= 100; i++) {
    age.push({
      id: i,
      title: i,
    });
  }
  return age;
};

console.log(ageNumbers());

function BookAppointmentForm() {
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch()


  const onSubmit = (data) => {
    dispatch(addDetails(data))
  };

  return (
    <Wrapper>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FInput
            name="name"
            label="Enter Your Name"
            required="Name is required"
            control={control}
            widthSize
          />
          <div className="flex-row">
            <MuiBasicSelect
              control={control}
              options={ageNumbers()}
              label="Age"
              name="age"
              width="320px"
            />
            <MuiBasicSelect
              control={control}
              options={gender}
              label="Gender"
              name="gender"
              width="320px"
            />
          </div>

          <div className="flex-row">
            <span>You can select one or multiple Test from dropdown</span>
            <MuiSelect control={control} name="tests" width="100%" />
          </div>

          <div className="flex-row">
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
          </div>
          <div className="flex-row">
            <MuiBasicSelect
              control={control}
              options={timeSlot}
              label="Time Slot"
              name="time"
              width="320px"
              required="Time Slot required"
            />
            <MuiDatePicker
              label="Date"
              control={control}
              name="date"
              width="320px"
            />
          </div>
          <div className="flex-row button">
            <ButtonStyled1 type="submit">Pay Now</ButtonStyled1>
            <span style={{ color: "black", fontSize: "0.6rem" }}>or</span>
            <ButtonStyled1 primary type="submit">
              Pay Now
            </ButtonStyled1>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default BookAppointmentForm;
