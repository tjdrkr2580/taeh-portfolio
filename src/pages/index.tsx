import HeadInfo from "@/components/global/HeadInfo";
import HeadIntro from "@/components/introduction/HeadIntro";
import { flexCenterCenter } from "@/styles/mixins";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FirstInfo from "@/components/introduction/FirstInfo";
import SecondInfo from "@/components/introduction/secondInfos/SecondInfo";
import { homeWrapperPropsType } from "@/types/props";
import { css } from "@emotion/react";

export default function Home() {
  const [isView, setView] = useState(true);
  useEffect(() => {
    setTimeout(() => setView(false), 4000);
  }, []);
  return (
    <>
      <HeadInfo />
      <HomeWrapper isView={isView}>
        <AnimatePresence>{isView === true && <HeadIntro />}</AnimatePresence>
        <FirstInfo />
        <SecondInfo />
      </HomeWrapper>
    </>
  );
}

export const HomeWrapper = styled.section<homeWrapperPropsType>`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (max-width: 1080px) {
    gap: 29rem;
  }
  @media (max-width : 780px) {
    gap: 30rem;
  }
  @media (max-width : 1280px) {
    gap: 35rem;
  }
  @media (min-width : 1281px) {
    gap: 40rem;
  }
  ${flexCenterCenter}
  ${(props) =>
    props.isView === true
      ? css`
          max-height: 20vh;
        `
      : css`
          min-height: 200vh;
        `}
  overflow: hidden
`;
