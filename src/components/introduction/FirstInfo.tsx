import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { flexCenterCenter, pageMarginStyle } from "@/styles/mixins";
import useThrottledScrollY from "@/hook/useThrottledScrollY";

const FirstInfo = () => {
  const dd = useThrottledScrollY();
  console.log(dd);

  return (
    <FirstInforWrapper>
      <motion.p>
        새로운 기술을 탐색하는 <span className="primary">개발자</span>
      </motion.p>
      <motion.p>
        새로운 만남을 기대하는 <span className="primary">개발자</span>
      </motion.p>
      <motion.p>
        새로운 경험을 희망하는 <span className="primary">개발자</span>
      </motion.p>
    </FirstInforWrapper>
  );
};

const FirstInforWrapper = styled(motion.section)`
  width: 100%;
  max-width: 128rem;
  flex-direction: column;
  gap: 17.5rem;
  padding: 45rem 0 20rem 0;
  p {
    font-size: 4.1rem;
    font-weight: 600;
  }
  .primary {
    font-size: 4.5rem;
    color: ${(props) => props.theme.strongColor};
    font-weight: 900;
  }
  ${flexCenterCenter};
`;

export default FirstInfo;
