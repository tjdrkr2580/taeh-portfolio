import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { flexCenterCenter, pageMarginStyle } from "@/styles/mixins";

const FirstInfo = () => {
  const [isIntersecting, setIsIntersecting] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const refs = [
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    refs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsIntersecting((prevState) =>
          prevState.map((_, i) => (i === index ? isVisible : _))
        );
      }
    });
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <FirstInforWrapper>
      <motion.p
        ref={refs[0]}
        variants={variants}
        initial="hidden"
        animate={isIntersecting[0] ? "visible" : "hidden"}
      >
        새로운 기술을 탐색하는 <span className="primary">개발자</span>
      </motion.p>
      <motion.p
        ref={refs[1]}
        variants={variants}
        initial="hidden"
        animate={isIntersecting[1] ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
      >
        새로운 만남을 기대하는 <span className="primary">개발자</span>
      </motion.p>
      <motion.p
        ref={refs[2]}
        variants={variants}
        initial="hidden"
        animate={isIntersecting[2] ? "visible" : "hidden"}
        transition={{ delay: 0.4 }}
      >
        새로운 경험을 희망하는 <span className="primary">개발자</span>
      </motion.p>
    </FirstInforWrapper>
  );
};

const FirstInforWrapper = styled(motion.section)`
  width: 100%;

  max-width: 128rem;
  flex-direction: column;
  gap: 25rem;
  padding: 50rem 0 20rem 0;
  p {
    font-size: 4rem;
    font-weight: 600;
    line-height: 5rem;
  }
  .primary {
    font-size: 4rem;
    color: ${(props) => props.theme.strongColor};
    font-weight: 900;
  }
  ${flexCenterCenter};
`;

export default FirstInfo;
