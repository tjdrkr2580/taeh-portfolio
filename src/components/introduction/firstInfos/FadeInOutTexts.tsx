import useThrottledScrollY from "@/hook/useThrottledScrollY";
import { firstInfoTextMotion } from "@/styles/animation/varients";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";

const FadeInOutTexts = () => {
  const throttleY = useThrottledScrollY();
  return (
    <AnimatePresence>
      {throttleY >= 1 && (
        <>
          <ScrollText
            variants={firstInfoTextMotion}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            새로운 기술을 탐색하는 <span className="primary">개발자</span>
          </ScrollText>
          <ScrollText
            variants={firstInfoTextMotion}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            새로운 만남을 기대하는 <span className="primary">개발자</span>
          </ScrollText>
          <ScrollText
            variants={firstInfoTextMotion}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            새로운 경험을 희망하는 <span className="primary">개발자</span>
          </ScrollText>
        </>
      )}
    </AnimatePresence>
  );
};

const ScrollText = styled(motion.p)`
  font-size: 4vw;
  font-weight: 600;
  @media (max-width: 650px) {
    font-size: 3.5rem;
  }
  .primary {
    font-size: 4.2vw;
    color: ${(props) => props.theme.strongColor};
    font-weight: 900;
    @media (max-width: 650px) {
      font-size: 3.5rem;
    }
  }
`;

export default FadeInOutTexts;
