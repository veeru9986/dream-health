import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  .input-wrapper,
  form {
    display: flex;
    flex-direction: column;
  }
  .MuiOutlinedInput-root,
  MuiInputBase-root {
    border-radius: 35px;
  }
  span {
    font-size: var(--p2);
    font-weight: var(--xmediumWeight);
    text-transform: capitalize;
    color: var(--black);
    opacity: 0.7;
  }
`;
