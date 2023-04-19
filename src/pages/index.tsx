import HeadInfo from "@/components/global/HeadInfo";
import HeadIntro from "@/components/introduction/HeadIntro";
import { flexCenterCenter, pageMarginStyle } from "@/styles/mixins";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FirstInfo from "@/components/introduction/FirstInfo";

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
      </HomeWrapper>
    </>
  );
}

export const HomeWrapper = styled.section`
  min-height: 150vh;
  ${flexCenterCenter}
`;
