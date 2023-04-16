import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import Logo from "../global/Logo";

const FirstInfo = () => {
  return (
    <FirstInforWrapper>
      <Logo />
    </FirstInforWrapper>
  );
};

const FirstInforWrapper = styled.section`
  width: 90%;
  max-width: 108rem;
  display: flex;
  align-items: center;
`;

export default FirstInfo;
