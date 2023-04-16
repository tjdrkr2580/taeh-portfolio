import { svgMotion } from "@/styles/animation/varients";
import { logoStyle } from "@/styles/mixins";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import React from "react";
import { logoFillAnimation } from "@/styles/animation/keyframe";

const HeadIntro = () => {
  return (
    <HeadInfoWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <motion.text variants={svgMotion} initial="hidden" animate="visible">
          Taeh
        </motion.text>
      </svg>
    </HeadInfoWrapper>
  );
};

const HeadInfoWrapper = styled.section`
  display: flex;
  align-items: center;

  svg {
    width: 12.5rem;
    overflow: visible;
    text {
      ${logoStyle};
      font-size: 5.4rem;
      stroke-width: 0.17rem;
      stroke: #d9d9d9;
      stroke-linejoin: round;
      stroke-linecap: round;
      animation: 0.5s ${logoFillAnimation} linear forwards;
      animation-delay: 2s;
    }
  }
`;

export default HeadIntro;
