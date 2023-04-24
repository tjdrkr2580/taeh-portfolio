import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { flexCenterCenter } from "@/styles/mixins";
import FadeInOutTexts from "./firstInfos/FadeInOutTexts";
import { BsFileArrowDown } from "react-icons/bs";
import { logoFlyAnimation } from "../../styles/animation/keyframe";

const FirstInfo = () => {
  return (
    <FirstInforWrapper>
      {/* <FadeInOutTexts /> */}
      <BsFileArrowDown className="scroll" size={48} />
    </FirstInforWrapper>
  );
};

const FirstInforWrapper = styled(motion.section)`
  width: 100%;
  max-width: 128rem;
  flex-direction: column;
  gap: 8rem;
  padding: 15rem 0 20rem 0;
  height: 90vh;
  ${flexCenterCenter};
  position: relative;

  .scroll {
    position: absolute;
    bottom: 5%;
    animation: ${logoFlyAnimation} 4s ease-in-out infinite;
  }
`;

export default FirstInfo;
