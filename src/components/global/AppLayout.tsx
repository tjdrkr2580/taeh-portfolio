import React from "react";
import styled from "@emotion/styled";
import { layoutType } from "@/types/public";
import { Global } from "@emotion/react";
import { globalStyle } from "@/styles/globalstyle";
import Header from "@/components/global/Header";

const AppLayout = ({ children }: layoutType) => {
  return (
    <TaehWrapper>
      <Global styles={globalStyle} />
      <Header />
      {children}
    </TaehWrapper>
  );
};

const TaehWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
  padding: 0 0.8rem;
  * {
    color: ${(props) => props.theme.textColor};
  }
`;

export default AppLayout;
