import { Variants } from "framer-motion";

export const svgMotion: Variants = {
  hidden: {
    strokeDasharray: 326,
    strokeDashoffset: 326,
  },
  visible: {
    strokeDashoffset: 0,
    transition: {
      duration: 3.8,
    },
  },
};

export const introMotion: Variants = {
  initial: {
    opacity: 1,
    background: "#191919",
  },
  animate: {},
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5, // 트랜지션의 지속 시간을 설정할 수 있습니다.
    },
  },
};
