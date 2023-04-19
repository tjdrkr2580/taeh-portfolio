import HeadInfo from "@/components/global/HeadInfo";
import HeadIntro from "@/components/introduction/HeadIntro";
import { flexCenterCenter, pageMarginStyle } from "@/styles/mixins";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FirstInfo from "@/components/introduction/FirstInfo";
import SecondInfo from "@/components/introduction/secondInfos/SecondInfo";

export default function Home() {
  const [isView, setView] = useState(true);
  useEffect(() => {
    setTimeout(() => setView(false), 4000);
  }, []);
  return (
    <>
      <HeadInfo />
      <HomeWrapper>
        <AnimatePresence>{isView === true && <HeadIntro />}</AnimatePresence>
        <FirstInfo />
        <SecondInfo />
      </HomeWrapper>
    </>
  );
}

export const HomeWrapper = styled.section`
  min-height: 200vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30rem;
  ${flexCenterCenter}
`;
