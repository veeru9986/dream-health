import * as React from "react";
import { Link } from "gatsby";
import four from "../images/404 1 (2).png";
import styled from "styled-components";

// styles
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .section {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
`;
// markup
const NotFoundPage = () => {
  return (
    <Wrapper>
      <div className="section">
        <img src={four} alt="404" />
      </div>
    </Wrapper>
  );
};

export default NotFoundPage;
