import { Variants } from "framer-motion";

export const svgMotion: Variants = {
  hidden: {
    strokeDasharray: 326,
    strokeDashoffset: 326,
  },
  visible: {
    strokeDashoffset: 0,
    transition: {
      duration: 4,
    },
  },
};
