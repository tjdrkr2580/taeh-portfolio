import { introMotion, svgMotion } from "@/styles/animation/varients";
import { flexCenterCenter, logoStyle } from "@/styles/mixins";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import React from "react";
import { logoFillAnimation } from "@/styles/animation/keyframe";

const HeadIntro = () => {
  return (
    <HeadInfoWrapper
      variants={introMotion}
      initial="initial"
      exit="exit"
      animate="animate"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <motion.text variants={svgMotion} initial="hidden" animate="visible">
          Taeh
        </motion.text>
      </svg>
    </HeadInfoWrapper>
  );
};

const HeadInfoWrapper = styled(motion.section)`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  position: fixed;
  ${flexCenterCenter};

  svg {
    margin-top: 5rem;
    width: 12.5rem;
    overflow: visible;
    text {
      ${logoStyle};
      font-size: 10.4rem;
      stroke-width: 0.17rem;
      stroke: #d9d9d9;
      stroke-linejoin: round;
      stroke-linecap: round;
      animation: 0.5s ${logoFillAnimation} linear forwards;
      animation-delay: 3s;
    }
  }
`;

export default HeadIntro;
