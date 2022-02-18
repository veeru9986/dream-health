import styled from "styled-components";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  margin-top: 2rem;
  place-items: center;
`;

export const LinkStyled = styled(Link)`
  min-width: 170px;
  padding: 10px 22px;
  border: 1px solid;
  color: ${(props) => (props.primary ? "#fff" : `#000`)};
  border-color: ${(props) =>
    props.primary ? "transparent" : "var(--medBlue)"};
  background-color: ${(props) => (props.primary ? "var(--lightRed)" : `#fff`)};
  outline: none;
  font-size: 14px;
  font-weight: var(--mediumWeight);
  border-radius: 66px;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
