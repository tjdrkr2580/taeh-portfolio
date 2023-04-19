import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { flexCenterCenter } from "@/styles/mixins";
import FadeInOutTexts from "./firstInfos/FadeInOutTexts";
const FirstInfo = () => {
  return (
    <FirstInforWrapper>
      <FadeInOutTexts />
    </FirstInforWrapper>
  );
};

const FirstInforWrapper = styled(motion.section)`
  width: 100%;
  max-width: 128rem;
  flex-direction: column;
  gap: 8rem;
  padding: 25rem 0 20rem 0;
  min-height: 60rem;
  .primary {
    font-size: 4.2vw;
    color: ${(props) => props.theme.strongColor};
    font-weight: 900;
    @media (max-width: 650px) {
      font-size: 2.8rem;
    }
  }
  ${flexCenterCenter};
`;

export default FirstInfo;
