import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { layoutType } from "@/types/public";
import { Global } from "@emotion/react";
import { globalStyle } from "@/styles/globalstyle";
import Header from "@/components/global/Header";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import Cursor from "../etc/Cursor";
import { isModalState } from "@/utils/store";
import { RecoilRoot, useRecoilValue } from "recoil";

const AppLayout = ({ children }: layoutType) => {
  const [mouseLocation, setMouseLocation] = useState({
    x: 0,
    y: 0,
  });

  const isModal = useRecoilValue(isModalState);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMouseLocation({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <TaehWrapper>
      <Global styles={globalStyle} />
      <Header />
      <AnimatePresence>{children}</AnimatePresence>
      <Cursor mouseLocation={mouseLocation} />
      <Footer />
    </TaehWrapper>
  );
};

const TaehWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
  padding: 0 0.8rem;
  color: ${(props) => props.theme.textColor};
  position: relative;
  cursor: none;

  a {
    color: ${(props) => props.theme.textColor};
  }
`;

export default React.memo(AppLayout);
