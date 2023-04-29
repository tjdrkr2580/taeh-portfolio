import styled from "@emotion/styled";
import React from "react";

const Title = () => {
  return <TitleWrapper></TitleWrapper>;
};

const TitleWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h1 {
    font-size: 3.2rem;
  }
  span {
    font-size: 2rem;
  }
`;

export default Title;
