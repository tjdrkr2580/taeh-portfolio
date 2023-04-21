import { Line } from "@/styles/mixins";
import styled from "@emotion/styled";
import React from "react";

const SecondStack = () => {
  return (
    <SecondStackWrapper>
      <Line />
      ddd
    </SecondStackWrapper>
  );
};

const SecondStackWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export default SecondStack;
