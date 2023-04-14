import React from "react";
import styled from "@emotion/styled";
import { layoutType } from "@/types/public";
import { Global } from "@emotion/react";
import { globalStyle } from "@/styles/GlobalStyle";

const AppLayout = ({ children }: layoutType) => {
  return (
    <TaehWrapper>
      <Global styles={globalStyle} />
      {children}
    </TaehWrapper>
  );
};

const TaehWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

export default AppLayout;
